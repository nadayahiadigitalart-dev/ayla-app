
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zqzrnpngtywsdfqsnvez.supabase.co'
const supabaseKey = 'sb_publishable_j-u90bpnzedLS1WYNxQ6-w_YH7Bngs_'

export const Supabase = createClient(supabaseUrl, supabaseKey)
