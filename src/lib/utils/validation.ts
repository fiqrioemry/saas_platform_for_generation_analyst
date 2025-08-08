type ValidationRule = {
	value: string;
	validate: (value: string) => string | null;
};

export function validateEmail(email: string): string | null {
	if (!email) return 'Email is required';
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(email)) return 'Valid email is required';
	return null; // no error
}

export function validateLength(
	fieldValue: string,
	fieldName: string,
	min: number,
	max: number
): string | null {
	if (!fieldValue) return `${fieldName} is required`;
	if (fieldValue.length < min) return `${fieldName} must be at least ${min} characters`;
	if (fieldValue.length > max)
		return `${fieldName} must be less than or equal to ${max} characters`;
	return null;
}

export function runValidations(rules: ValidationRule[]): string | null {
	for (const rule of rules) {
		const error = rule.validate(rule.value);
		if (error) return error; // return first error found
	}
	return null;
}
