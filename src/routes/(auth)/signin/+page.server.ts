// src/routes/(auth)/signup/+page.server.ts
import type { Actions } from './$types';
import { fail, redirect } from '@sveltejs/kit';
import { validateEmail, runValidations } from '$lib/utils/validation';
import { errorResponse, successResponse } from '$lib/utils/crud';

export const load = async ({ locals }) => {
	const { session, user } = await locals.safeGetSession();

	if (user || session) {
		throw redirect(307, '/');
	}
};

export const actions: Actions = {
	login: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();
		const email = formData.get('email') as string;
		const password = formData.get('password') as string;

		const err = runValidations([{ value: email, validate: validateEmail }]);

		if (err) {
			return fail(400, { err });
		}

		const { data, error } = await supabase.auth.signInWithPassword({ email, password });

		if (error) {
			errorResponse(error.message, 500);
		}

		successResponse(data, 'Login successfully');
	}
};
