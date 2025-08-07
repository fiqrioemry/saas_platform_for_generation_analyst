export interface Profile {
	id: string;
	email: string;
	display_name: string;
	team_name: string;
	onboarding: Onboarding;
	is_onboarding_completed: boolean;
	settings: Settings;
	avatar_url: string;
	joined_at: string;
}

export interface Onboarding {
	role: string;
	use_case: string;
	team_size: string;
	additional_info: string;
	referral_source: string;
	additial_info: string;
}

export interface Balance {
	credit_balance: number;
	token_balance: number;
	total_available_token: number;
}

export interface Settings {
	timezone: string;
	preferred_language: string;
	theme: 'light' | 'dark' | 'system';
	system_notifications: boolean;
}
