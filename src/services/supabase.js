import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ojpoarbvecvoorqabvnc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9qcG9hcmJ2ZWN2b29ycWFidm5jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgxNTUxNDMsImV4cCI6MjAyMzczMTE0M30.nIlrHmQIsfFzcMQ_h3VpZxdW3YLq6BdrqYeuo_nmB6o";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
