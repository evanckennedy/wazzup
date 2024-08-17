/*
  Validates the input fields for a form.

  The 'fields' parameter is an object containing the form fields to be validated.
  The keys are the field names (e.g., 'name', 'username', 'password'),
  and the values are the corresponding field values.
  This parameter returns an object.

  The function checks if the required fields ('name', 'username', 'password') are present and valid.
  If a field is missing or invalid, an appropriate error message is added to the errors object.

  The 'errors' object is what this function returns.
  It contains error messages for each invalid field.
  If all fields are valid, the object will be empty. 
*/

export const validate = (fields) => {
  const errors = {};

  if (fields.name !== undefined) {
    if (!fields.name) errors.name = 'Name is required';
  }

  if (!fields.username) {
    errors.username = 'Username is required';
  }
  // Check if username is valid: 3-30 chars, alphanumeric, underscores, no spaces 
  else if (!/^[a-zA-Z0-9_]{3,30}$/.test(fields.username)) {
    errors.username = 'Invalid username';
  }

  if (!fields.password) errors.password = 'Password is required';

  console.log('Validation errors:', errors); // Debugging line

  return errors;
}