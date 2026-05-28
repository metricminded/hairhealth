export interface SupabaseQuery {
  table: string
  operation: 'select' | 'insert' | 'update' | 'delete'
  filters?: Record<string, any>
  data?: Record<string, any>
  limit?: number
  offset?: number
  orderBy?: string
}
