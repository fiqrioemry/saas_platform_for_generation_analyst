import { redirect, error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

const SUPPORTED_PROVIDERS = ['google', 'github'] as const;
type Provider = (typeof SUPPORTED_PROVIDERS)[number];

export const load: PageServerLoad = async ({ params, url, locals }) => {
	const { supabase } = locals;

	const { session, user } = await locals.safeGetSession();

	if (user || session) {
		throw redirect(303, '/');
	}

	const provider = params.provider as Provider;

	if (!SUPPORTED_PROVIDERS.includes(provider)) {
		error(400, 'Provider not supported');
	}

	const code = url.searchParams.get('code');
	const error_description = url.searchParams.get('error_description');

	if (error_description) {
		redirect(303, `/auth/error?message=${encodeURIComponent(error_description)}`);
	}

	if (code) {
		const { error: exchangeError } = await supabase.auth.exchangeCodeForSession(code);

		if (exchangeError) {
			console.error('OAuth exchange error:', exchangeError);
			redirect(303, `/auth/error?message=${encodeURIComponent(exchangeError.message)}`);
		}

		redirect(303, '/signin');
	}

	const { data, error: oauthError } = await supabase.auth.signInWithOAuth({
		provider,
		options: {
			redirectTo: `${url.origin}/auth/callback/${provider}`,
			queryParams: {
				access_type: 'offline',
				prompt: 'consent'
			}
		}
	});

	if (oauthError) {
		console.error('OAuth initiation error:', oauthError);
		redirect(303, `/auth/error?message=${encodeURIComponent(oauthError.message)}`);
	}
	if (data?.url) {
		redirect(303, data.url);
	}

	redirect(303, '/signin');
};
