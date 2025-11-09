// Type-only shim for the auto-generated Supabase types file.
// This satisfies `import type { Database } from './types'` in the client.

export type { Database } from "../../lib/database.types";

import type { Database as DB } from "../../lib/database.types";

export type Tables<T extends keyof DB["public"]["Tables"]> = DB["public"]["Tables"][T]["Row"];
export type TablesInsert<T extends keyof DB["public"]["Tables"]> = DB["public"]["Tables"][T]["Insert"];
export type TablesUpdate<T extends keyof DB["public"]["Tables"]> = DB["public"]["Tables"][T]["Update"];
