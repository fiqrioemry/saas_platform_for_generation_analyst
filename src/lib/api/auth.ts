import { supabase } from '$lib/supabase';
import { user } from '$lib/stores/auth';
import { goto } from '$app/navigation';

export async function signUp(email: string, password: string) {
	const { data, error } = await supabase.auth.signUp({
		email,
		password
	});

	if (error) {
		throw error;
	}

	return data;
}

export async function signIn(email: string, password: string) {
	const { data, error } = await supabase.auth.signInWithPassword({
		email,
		password
	});

	if (error) {
		throw error;
	}

	user.set(data.user);
	return data;
}

export async function signOut() {
	const { error } = await supabase.auth.signOut();

	if (error) {
		throw error;
	}

	user.set(null);
	goto('/signout');
}

export async function getUser() {
	const {
		data: { user: currentUser }
	} = await supabase.auth.getUser();
	user.set(currentUser);
	return currentUser;
}
