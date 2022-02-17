import isEmail from 'validator/lib/isEmail';

const validateName = name => /^[a-z]+$/i.test(name);

function findFormErrors({ first_name, last_name, email }) {
  if (first_name.trim().length < 2 || last_name.trim().length < 2) {
    return 'Your name and surname should be at least 2 letters long';
  }

  if (!validateName(first_name) || !validateName(last_name)) {
    return 'Only latin letters (A-Z) (a-z) are allowed for your name and surname';
  }

  if (!isEmail(email)) {
    return 'Wrong email';
  }

  return '';
}

export default findFormErrors;
