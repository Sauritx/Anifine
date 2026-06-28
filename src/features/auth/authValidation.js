/** Normalizes usernames so availability checks are stable and case-insensitive. */
export const normalizeUsername = (username = '') => username.trim().toLowerCase();

/** Returns password strength rules for realtime validation feedback. */
export function getPasswordRules(password = '') {
  return [
    { label: 'At least 8 characters', valid: password.length >= 8 },
    { label: 'One uppercase letter', valid: /[A-Z]/.test(password) },
    { label: 'One lowercase letter', valid: /[a-z]/.test(password) },
    { label: 'One number', valid: /\d/.test(password) },
    { label: 'One symbol', valid: /[^A-Za-z0-9]/.test(password) },
  ];
}

/** Passwords are considered strong only when every production rule passes. */
export const isStrongPassword = (password) => getPasswordRules(password).every((rule) => rule.valid);

/** Converts Firebase/auth exceptions into user-safe copy. */
export function friendlyAuthError(error) {
  const code = error?.code || '';
  if (code.includes('email-already-in-use')) return 'That email is already registered.';
  if (code.includes('invalid-credential') || code.includes('wrong-password') || code.includes('user-not-found')) return 'Invalid email or password.';
  if (code.includes('network-request-failed')) return 'Network error. Check your connection and try again.';
  if (code.includes('too-many-requests')) return 'Too many attempts. Please wait before trying again.';
  return error?.message || 'Something went wrong. Please try again.';
}
