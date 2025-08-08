// (auth)/signout/+server.ts
import { redirect, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ locals }) => {
	const { session } = await locals.safeGetSession();
	if (!session) throw redirect(303, '/');

	await locals.supabase.auth.signOut();
	throw redirect(303, '/');
};
