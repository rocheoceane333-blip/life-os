import { createClient } from '@supabase/supabase-client';

const supabaseUrl = 'https://jeqhlrpvzahabutikbts.supabase.co';
const supabaseKey = 'sb_publishable_f50bjPhH0uJ4ZGSGFuvTRA_LuLaimAU'; 

export const supabase = createClient(supabaseUrl, supabaseKey);