import { writable } from 'svelte/store';
import type { Profile, Balance } from '$lib/types/user';
import type { User } from '@supabase/supabase-js';

export const user = writable<User | null>(null);
export const profile = writable<Profile | null>(null);
export const balance = writable<Balance | null>(null);
