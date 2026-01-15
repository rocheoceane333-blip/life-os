import { supabase } from '../supabaseClient';

export const databaseService = {
  // Lire des données (ex: databaseService.get('meals'))
  async get(tableName) {
    const { data, error } = await supabase
      .from(tableName)
      .select('*')
      .order('created_at', { ascending: false });
    if (error) throw error;
    return data;
  },

  // Créer une donnée
  async create(tableName, payload) {
    const { data, error } = await supabase
      .from(tableName)
      .insert([payload])
      .select();
    if (error) throw error;
    return data[0];
  }
};