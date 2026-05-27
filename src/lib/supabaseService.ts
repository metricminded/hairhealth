import { supabase } from './supabase';

interface FetchOptions {
  limit?: number;
  offset?: number;
  orderBy?: string;
  ascending?: boolean;
}

interface InsertOptions {
  returning?: 'minimal' | 'representation';
}

export const supabaseService = {
  async getAll<T>(
    tableName: string,
    options?: FetchOptions
  ): Promise<T[]> {
    let query = supabase.from(tableName).select();

    if (options?.orderBy) {
      query = query.order(options.orderBy, {
        ascending: options.ascending !== false,
      });
    }

    if (options?.limit) {
      query = query.limit(options.limit);
    }

    if (options?.offset) {
      query = query.range(options.offset, options.offset + (options.limit || 10) - 1);
    }

    const { data, error } = await query;

    if (error) throw error;
    return data as T[];
  },

  async getById<T>(tableName: string, id: string | number): Promise<T | null> {
    const { data, error } = await supabase
      .from(tableName)
      .select()
      .eq('id', id)
      .single();

    if (error && error.code !== 'PGRST116') throw error;
    return data as T | null;
  },

  async insert<T>(
    tableName: string,
    record: Omit<T, 'id' | 'created_at' | 'updated_at'>,
    options?: InsertOptions
  ): Promise<T> {
    const { data, error } = await supabase
      .from(tableName)
      .insert([record])
      .select();

    if (error) throw error;
    return (data?.[0] as T) || ({} as T);
  },

  async update<T>(
    tableName: string,
    id: string | number,
    updates: Partial<T>
  ): Promise<T> {
    const { data, error } = await supabase
      .from(tableName)
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data as T;
  },

  async delete(tableName: string, id: string | number): Promise<void> {
    const { error } = await supabase
      .from(tableName)
      .delete()
      .eq('id', id);

    if (error) throw error;
  },

  async query<T>(tableName: string, filters: Record<string, any>): Promise<T[]> {
    let query = supabase.from(tableName).select();

    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        query = query.eq(key, value);
      }
    });

    const { data, error } = await query;

    if (error) throw error;
    return data as T[];
  },
};
