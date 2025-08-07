// src/routes/(auth)/signup/+page.server.ts
import { redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {
	const { session, user, profile } = await locals.safeGetSession();

	if (user || session) {
		if (profile && profile.is_onboarding_completed) {
			throw redirect(307, '/settings/profile');
		}
		throw redirect(307, '/onboarding');
	}
};
