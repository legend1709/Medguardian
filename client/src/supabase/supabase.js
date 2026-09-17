import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://cadcjaxmulrpdxkintsw.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNhZGNqYXhtdWxycGR4a2ludHN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk2MTYxNzIsImV4cCI6MjEwNTE5MjE3Mn0.1PTkkPkYhkW3RKLIVcsw8P49ApSwuSmXWM29_YzTpp8";

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);