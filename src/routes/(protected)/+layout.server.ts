// src/routes/+layout.server.ts

import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from '../(auth)/auth/callback/[provider]/$types';

export const load: PageServerLoad = async ({ locals: { safeGetSession } }) => {
	const { user } = await safeGetSession();

	if (!user) {
		throw redirect(303, '/');
	}
};
