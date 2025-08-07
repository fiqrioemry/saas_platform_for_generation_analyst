import type { Profile } from '$lib/types/user.js';
import type { Database } from './database.types.ts';
import type { Session, User, SupabaseClient } from '@supabase/supabase-js';

declare global {
	namespace App {
		interface Locals {
			supabase: SupabaseClient<Database>;
			safeGetSession: () => Promise<{
				session: Session | null;
				user: User | null;
				profile: Profile | null;
			}>;
			session: Session | null;
			profile: Profile | null;
			user: User | null;
		}
		interface PageData {
			session: Session | null;
		}
	}
}

export {};
