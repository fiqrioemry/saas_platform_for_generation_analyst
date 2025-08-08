// src/routes/(auth)/signup/+page.server.ts
import { redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {
	const { session, user } = await locals.safeGetSession();

	if (user || session) {
		throw redirect(307, '/');
	}
};
