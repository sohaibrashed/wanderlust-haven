import { createClient } from "@supabase/supabase-js";

const key = import.meta.env.VITE_SUPABASE_KEY;

export const supabaseUrl = "https://ojpoarbvecvoorqabvnc.supabase.co";
const supabaseKey = key;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
