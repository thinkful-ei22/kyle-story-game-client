export const required = value => value ? undefined : 'Required';
export const roomCodeLength = value => value && value.length === 6 ? undefined : 'Room Code must be 8 characters';
export const minLength = value => value && value.length > 1 ? undefined : 'Must be at least 2 characters';