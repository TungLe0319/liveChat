export const dev = window.location.origin.includes("localhost");
export const baseURL = dev ? "https://localhost:7045" : "";
export const useSockets = false;
export const domain = "bobocat.us.auth0.com";
export const audience = "https://bcw-demos.com";
export const clientId = "Acd91zZtHgbEyChg4MW53440xBdm6cqE";
export const supabaseUrl = "https://fcdwsojvebbirkngjzli.supabase.co";
export const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBoeXF3cWdsZW5kaWFrdXdwa3RiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk3Njk5MTMsImV4cCI6MTk4NTM0NTkxM30.U8cQg3rHdoa8rXGWzz8TwCnQKW78btreWj5JDQl64VE";

  export const key =
    
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZjZHdzb2p2ZWJiaXJrbmdqemxpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk4Nzk3NTQsImV4cCI6MTk4NTQ1NTc1NH0._kZE8P3jMjVfTMX9vEVExWow0Kgb1kPP0RaLES_JiW0";


// import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = "https://fcdwsojvebbirkngjzli.supabase.co";
// const supabaseKey = process.env.SUPABASE_KEY;
// const supabase = createClient(supabaseUrl, supabaseKey);