export const validate = (fields) => {
  const errors = {};

  if (fields.name !== undefined) {
    if (!fields.name) errors.name = 'Name is required';
  }

  if (!fields.email) errors.email = 'Email is required';
  else if (!/\S+@\S+\.\S+/.test(fields.email)) errors.email = 'Email is invalid';

  if (!fields.password) errors.password = 'Password is required';

  return errors;
}