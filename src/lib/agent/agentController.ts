import Anthropic from "@anthropic-ai/sdk";
import { supabase } from "../supabase";
import { SupabaseQuery } from "./toolDefinitions";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export class CompanyAgent {
  private client: Anthropic;
  private conversationHistory: Message[] = [];

  constructor(apiKey: string) {
    this.client = new Anthropic({
      apiKey,
    });
  }

  async chat(userMessage: string): Promise<string> {
    this.conversationHistory.push({
      role: "user",
      content: userMessage,
    });

    const tools = [
      {
        name: "query_database",
        description:
          "Query the Supabase database for company data. Can SELECT, INSERT, UPDATE, or DELETE records.",
        input_schema: {
          type: "object" as const,
          properties: {
            table: {
              type: "string",
              enum: [
                "teams",
                "users",
                "team_members",
                "projects",
                "tasks",
                "okrs",
                "campaigns",
                "sales_deals",
                "reports",
                "meetings",
              ],
            },
            operation: {
              type: "string",
              enum: ["select", "insert", "update", "delete"],
            },
            filters: { type: "object" as const, additionalProperties: true },
            data: { type: "object" as const, additionalProperties: true },
            limit: { type: "number" },
            offset: { type: "number" },
            orderBy: { type: "string" },
          },
          required: ["table", "operation"],
        },
      },
    ];

    const response = await this.client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 2000,
      system: `You are an intelligent assistant for a company operational hub. You help teams manage projects, track OKRs, analyze sales pipelines, and provide executive insights.

You have access to company data including:
- Teams: Marketing, Sales, Strategy, CEO Office, Operations
- Projects: Initiative planning and tracking
- Tasks: Work items with assignments
- OKRs: Strategic objectives
- Campaigns: Marketing campaigns with budgets
- Sales Deals: Sales pipeline
- Reports: Executive reports
- Meetings: Company meetings

When users ask about company data, use the query_database tool to fetch information from Supabase.
Always be helpful, clear, and provide actionable insights.
For data modifications, always confirm what you're about to do before executing.`,
      messages: this.conversationHistory.map((msg) => ({
        role: msg.role,
        content: msg.content,
      })),
      tools: tools as any,
    });

    let finalResponse = "";

    // Process tool calls and gather results
    for (const content of response.content) {
      if (content.type === "text") {
        finalResponse = content.text;
      } else if (content.type === "tool_use") {
        const toolResult = await this.executeTool(
          content.name,
          content.input as any
        );

        // Add assistant message with tool use
        this.conversationHistory.push({
          role: "assistant",
          content: JSON.stringify({
            type: "tool_use",
            name: content.name,
            input: content.input,
          }),
        });

        // Add tool result as user message
        this.conversationHistory.push({
          role: "user",
          content: JSON.stringify({
            type: "tool_result",
            result: toolResult,
          }),
        });

        // Get follow-up response
        const followUp = await this.client.messages.create({
          model: "claude-sonnet-4-6",
          max_tokens: 2000,
          messages: this.conversationHistory.map((msg) => ({
            role: msg.role,
            content: msg.content,
          })),
          tools: tools as any,
        });

        for (const item of followUp.content) {
          if (item.type === "text") {
            finalResponse = item.text;
          }
        }
      }
    }

    // Add final response to history
    this.conversationHistory.push({
      role: "assistant",
      content: finalResponse,
    });

    return finalResponse;
  }

  private async executeTool(
    toolName: string,
    input: Record<string, any>
  ): Promise<string> {
    try {
      if (toolName === "query_database") {
        return await this.queryDatabase(input);
      }
      return JSON.stringify({ error: "Unknown tool" });
    } catch (error) {
      return JSON.stringify({
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }

  private async queryDatabase(query: SupabaseQuery & any): Promise<string> {
    const { table, operation, filters, data, limit, offset, orderBy } = query;

    try {
      switch (operation) {
        case "select": {
          let q = supabase.from(table).select("*");

          if (filters) {
            Object.entries(filters).forEach(([key, value]) => {
              q = q.eq(key, value);
            });
          }

          if (orderBy) {
            const [col, dir] = orderBy.includes("-")
              ? [orderBy.substring(1), false]
              : [orderBy, true];
            q = q.order(col, { ascending: dir });
          }

          if (limit) {
            q = q.limit(limit);
          }

          if (offset) {
            q = q.range(offset, offset + (limit || 10) - 1);
          }

          const { data: results, error } = await q;
          if (error) throw error;

          return JSON.stringify({
            success: true,
            count: results?.length || 0,
            data: results || [],
          });
        }

        case "insert": {
          const { data: result, error } = await supabase
            .from(table)
            .insert([data])
            .select();

          if (error) throw error;

          return JSON.stringify({
            success: true,
            message: `Created record in ${table}`,
            data: result?.[0],
          });
        }

        case "update": {
          if (!filters) throw new Error("Update requires filters");

          let q = supabase.from(table).update(data);

          Object.entries(filters).forEach(([key, value]) => {
            q = q.eq(key, value);
          });

          const { data: result, error } = await q.select();

          if (error) throw error;

          return JSON.stringify({
            success: true,
            message: `Updated ${result?.length || 0} records in ${table}`,
            data: result,
          });
        }

        case "delete": {
          if (!filters) throw new Error("Delete requires filters");

          let q = supabase.from(table).delete();

          Object.entries(filters).forEach(([key, value]) => {
            q = q.eq(key, value);
          });

          const { error } = await q;

          if (error) throw error;

          return JSON.stringify({
            success: true,
            message: `Deleted records from ${table}`,
          });
        }

        default:
          return JSON.stringify({ error: "Unknown operation" });
      }
    } catch (error) {
      return JSON.stringify({
        error: error instanceof Error ? error.message : "Database error",
      });
    }
  }

  getConversationHistory(): Message[] {
    return this.conversationHistory;
  }

  clearHistory(): void {
    this.conversationHistory = [];
  }
}
