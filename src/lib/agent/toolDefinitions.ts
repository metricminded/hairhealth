import { Tool } from "@anthropic-ai/sdk/resources";

export interface SupabaseQuery {
  table: string;
  operation: "select" | "insert" | "update" | "delete";
  filters?: Record<string, any>;
  data?: Record<string, any>;
  limit?: number;
  offset?: number;
  orderBy?: string;
}

export const supabaseTools: Tool[] = [
  {
    name: "query_database",
    description:
      "Query the Supabase database for company data. Can SELECT, INSERT, UPDATE, or DELETE records from tables: teams, users, team_members, projects, tasks, okrs, campaigns, sales_deals, reports, meetings",
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
          description: "Table to query",
        },
        operation: {
          type: "string",
          enum: ["select", "insert", "update", "delete"],
          description: "Database operation to perform",
        },
        filters: {
          type: "object",
          description:
            "Conditions for SELECT/UPDATE/DELETE (e.g., {team_id: 5, status: 'active'})",
          additionalProperties: true,
        },
        data: {
          type: "object",
          description:
            "Data to insert or update (e.g., {name: 'New Project', status: 'planning'})",
          additionalProperties: true,
        },
        limit: {
          type: "number",
          description: "Limit number of results (for SELECT)",
        },
        offset: {
          type: "number",
          description: "Offset for pagination (for SELECT)",
        },
        orderBy: {
          type: "string",
          description: "Column to order by (e.g., 'created_at' or '-id' for DESC)",
        },
      },
      required: ["table", "operation"],
    },
  },
  {
    name: "get_team_summary",
    description:
      "Get a summary of a team including members, projects, and status. Useful for executive dashboards and team overviews.",
    input_schema: {
      type: "object" as const,
      properties: {
        teamName: {
          type: "string",
          description:
            "Name of the team (e.g., 'Marketing', 'Sales', 'Strategy')",
        },
      },
      required: ["teamName"],
    },
  },
  {
    name: "get_company_summary",
    description:
      "Get a comprehensive summary of the entire company including all teams, active projects, key metrics, and executive insights.",
    input_schema: {
      type: "object" as const,
      properties: {
        includeMetrics: {
          type: "boolean",
          description: "Include detailed metrics and analytics",
        },
      },
    },
  },
  {
    name: "create_project",
    description: "Create a new project within a team with initial details.",
    input_schema: {
      type: "object" as const,
      properties: {
        teamName: {
          type: "string",
          description: "Name of the team",
        },
        projectName: {
          type: "string",
          description: "Name of the new project",
        },
        description: {
          type: "string",
          description: "Project description",
        },
        priority: {
          type: "string",
          enum: ["low", "medium", "high"],
          description: "Project priority",
        },
        endDate: {
          type: "string",
          description: "Expected end date (YYYY-MM-DD)",
        },
      },
      required: ["teamName", "projectName"],
    },
  },
  {
    name: "list_overdue_items",
    description:
      "Find all overdue tasks and projects across the company. Returns items that have passed their due date.",
    input_schema: {
      type: "object" as const,
      properties: {
        teamName: {
          type: "string",
          description: "Filter by specific team (optional)",
        },
        type: {
          type: "string",
          enum: ["tasks", "projects", "both"],
          description: "Type of items to check",
        },
      },
    },
  },
];
