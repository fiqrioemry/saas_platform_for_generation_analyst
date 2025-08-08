/* eslint-disable @typescript-eslint/no-explicit-any */
import { fail } from '@sveltejs/kit';
import type { SubmitFunction } from '@sveltejs/kit';

export interface CrudState<T = any> {
	loading: boolean;
	error: string;
	success: string;
	data: T;
}

export interface CrudResult {
	success: boolean;
	data?: any;
	error?: string;
	message?: string;
}

export function errorResponse(message: string, status = 500) {
	return fail(status, { error: message });
}

export function successResponse(data: any, message: string) {
	return { success: true, data, message };
}

export function createCrudStore<T>(initialData: T) {
	let state = $state<CrudState<T>>({
		loading: false,
		error: '',
		success: '',
		data: { ...initialData }
	});

	return {
		// Getters
		get loading() {
			return state.loading;
		},
		get error() {
			return state.error;
		},
		get success() {
			return state.success;
		},
		get data() {
			return state.data;
		},

		setData(data: any[]) {
			state.data = { ...state.data, ...data };
		},

		// Actions
		setLoading(loading: boolean) {
			state.loading = loading;
		},

		setError(error: string) {
			state.error = error;
			state.loading = false;
		},

		setSuccess(message: string) {
			state.success = message;
			state.loading = false;
		},

		clearMessages() {
			state.error = '';
			state.success = '';
		},

		reset() {
			state = {
				loading: false,
				error: '',
				success: '',
				data: { ...initialData }
			};
		},

		updateData(newData: Partial<T>) {
			state.data = { ...state.data, ...newData };
		}
	};
}

export function createEnhancer(
	store: ReturnType<typeof createCrudStore>,
	options?: {
		onPending?: () => void;
		onError?: (result: any) => void;
		onSuccess?: (result: any) => void;
		resetOnSuccess?: boolean;
		revalidate?: boolean;
	}
): SubmitFunction {
	return () => {
		store.clearMessages();
		store.setLoading(true);
		options?.onPending?.();

		return async ({ result, update }) => {
			if (options?.revalidate) {
				await update();
			}

			if (result.type === 'success' && result.data) {
				store.setSuccess(result.data.message || 'Success');

				if (options?.resetOnSuccess) {
					setTimeout(() => store.reset(), 100);
				}

				options?.onSuccess?.(result);
			} else if (result.type === 'failure' && result.data) {
				options?.onError?.(result);
				store.setError(result.data.error || 'Failed!');
			} else {
				store.setLoading(false);
			}
		};
	};
}
