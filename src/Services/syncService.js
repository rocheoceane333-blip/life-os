import { supabase } from '../supabaseClient';
import { DataConflict } from '../Entities/DataConflict';

export const syncService = {
  /**
   * Vérifie si les données locales sont synchronisées avec le serveur
   * En cas de différence, crée une entité DataConflict
   */
  async checkSyncStatus(tableName, localData) {
    const { data: remoteData, error } = await supabase
      .from(tableName)
      .select('*')
      .eq('id', localData.id)
      .single();

    if (error) return { status: 'error', message: error.message };

    // Comparaison basique par date de mise à jour
    if (new Date(remoteData.updated_at) > new Date(localData.updated_at)) {
      return new DataConflict({
        id: crypto.randomUUID(),
        entityType: tableName,
        localData: localData,
        remoteData: remoteData,
        resolved: false
      });
    }

    return { status: 'synced' };
  },

  /**
   * Force la synchronisation locale vers Supabase
   */
  async pushUpdate(tableName, entity) {
    const { data, error } = await supabase
      .from(tableName)
      .upsert(entity)
      .select();

    if (error) throw error;
    return data[0];
  },

  /**
   * Écoute les changements en temps réel sur une table
   * (Utile pour le SpyMode ou les notifications)
   */
  subscribeToChanges(tableName, callback) {
    return supabase
      .channel(`public:${tableName}`)
      .on('postgres_changes', { event: '*', schema: 'public', table: tableName }, 
        payload => callback(payload)
      )
      .subscribe();
  }
};