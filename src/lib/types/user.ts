export interface User {
	id: string;
	profile?: Profile;
	balance?: Balance;
}

export interface Profile {
	id: string;
	email: string;
	display_name: string;
	settings: Settings;
	avatar_url: string;
	joined_at: string;
}

export interface Balance {
	credit_balance: number;
	token_balance: number;
}

export interface Settings {
	timezone: string;
	preferred_language: string;
	theme: 'light' | 'dark' | 'system';
	system_notifications: boolean;
}
