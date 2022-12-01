import { createClient } from "@supabase/supabase-js";
import { supabaseAnonKey, supabaseUrl } from "./src/env";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
