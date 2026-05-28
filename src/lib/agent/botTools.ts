import { Tool } from "@anthropic-ai/sdk/resources";
import { LandbotService } from "../integrations/landbotService";

export const botTools: Tool[] = [
  {
    name: "sync_landbot_data",
    description:
      "Sync Landbot conversations and leads to Supabase database. Fetches all conversations from Landbot API and saves them.",
    input_schema: {
      type: "object" as const,
      properties: {},
    },
  },
  {
    name: "get_bot_leads",
    description:
      "Get recent leads/conversations from the bot. Returns leads captured from Landbot.",
    input_schema: {
      type: "object" as const,
      properties: {
        days: {
          type: "number",
          description: "Number of days to look back (default: 7)",
        },
        emailOnly: {
          type: "boolean",
          description: "Only return leads with email addresses",
        },
      },
    },
  },
  {
    name: "get_bot_statistics",
    description:
      "Get statistics about bot performance: total leads, new leads, leads with email, etc.",
    input_schema: {
      type: "object" as const,
      properties: {},
    },
  },
];

export async function executeBotTool(
  toolName: string,
  input: Record<string, any>,
  landbotApiKey: string
): Promise<string> {
  const landbotService = new LandbotService(landbotApiKey);

  try {
    switch (toolName) {
      case "sync_landbot_data": {
        const result = await landbotService.syncToSupabase();
        return JSON.stringify({
          success: true,
          message: `Synced ${result.synced} new leads and updated ${result.updated} existing leads`,
          synced: result.synced,
          updated: result.updated,
          error: result.error,
        });
      }

      case "get_bot_leads": {
        const days = input.days || 7;
        const emailOnly = input.emailOnly || false;

        let leads;
        if (emailOnly) {
          leads = await landbotService.getLeadsWithEmail();
        } else {
          leads = await landbotService.getRecentLeads(days);
        }

        return JSON.stringify({
          success: true,
          count: leads.length,
          leads: leads.slice(0, 20), // Return top 20
          message: `Found ${leads.length} leads from last ${days} days${emailOnly ? " with email" : ""}`,
        });
      }

      case "get_bot_statistics": {
        const stats = await landbotService.getStats();
        return JSON.stringify({
          success: true,
          stats: stats,
          message: `Bot stats for last 30 days`,
        });
      }

      default:
        return JSON.stringify({ error: "Unknown tool" });
    }
  } catch (error) {
    return JSON.stringify({
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
