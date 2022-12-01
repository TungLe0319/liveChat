import { createClient } from "@supabase/supabase-js";
import { key, supabaseAnonKey, supabaseUrl } from "./src/env";

export const supabase = createClient(supabaseUrl, key);


