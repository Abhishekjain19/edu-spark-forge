// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://gmekovreqfxfwdnqvzvp.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdtZWtvdnJlcWZ4ZndkbnF2enZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ0MjM3NTksImV4cCI6MjA1OTk5OTc1OX0.tAKA0N1lR8cgyahFs24t20vHgN8cbv2wqlelXHW5fmg";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);