const Search = document.getElementById("search");
const checkSearch = () => {

  var valid = false;

  const min = 1,
  max = 25;

  const searchValue = Search.value.trim();

  if (!isRequired(searchValue)) {
    showError(Search, 'Search Bar cannot be blank.');
  } else if (!isBetween(searchValue.length, min, max)) {
    showError(Search)
  } else {
    showSuccess(Search);
    valid = true;
  }
  return valid;
};
/*
const usernameEl = document.getElementById("firstname");
const usernameL = document.getElementById("lastname");
const emailEl = document.getElementById("email");
const passwordEl = document.getElementById("password1");
const confirmPasswordEl = document.getElementById("password2");



const checkUsername = () => {

  var valid = false;

  const min = 3,
  max = 25;

  const username = usernameEl.value.trim();

  if (!isRequired(username)) {
    showError(usernameEl, 'Username cannot be blank.');
  } else if (!isBetween(username.length, min, max)) {
    showError(usernameEl, `Username must be between ${min} and ${max} characters.`)
  } else {
    showSuccess(usernameEl);
    valid = true;
  }
  return valid;
};

const checkLastname = () => {

  var valid = false;

  const min = 3,
  max = 25;

  const username = usernameEl.value.trim();

  if (!isRequired(username)) {
    showError(usernameEl, 'Username cannot be blank.');
  } else if (!isBetween(username.length, min, max)) {
    showError(usernameEl, `Username must be between ${min} and ${max} characters.`)
  } else {
    showSuccess(usernameEl);
    valid = true;
  }
  return valid;
};


const checkEmail = () => {
  var valid = false;
  const email = emailEl.value.trim();
  if (!isRequired(email)) {
    showError(emailEl, 'Email cannot be blank.');
  } else if (!isEmailValid(email)) {
    showError(emailEl, 'Email is not valid.')
  } else {
    showSuccess(emailEl);
    valid = true;
  }
  return valid;
};

const checkPassword = () => {
  var valid = false;


  const password = passwordEl.value.trim();

  if (!isRequired(password)) {
    showError(passwordEl, 'Password cannot be blank.');
  } else if (!isPasswordSecure(password)) {
    showError(passwordEl, 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
  } else {
    showSuccess(passwordEl);
    valid = true;
  }

  return valid;
};

const checkConfirmPassword = () => {
  var valid = false;
  // check confirm password
  const confirmPassword = confirmPasswordEl.value.trim();
  const password = passwordEl.value.trim();

  if (!isRequired(confirmPassword)) {
    showError(confirmPasswordEl, 'Please enter the password again');
  } else if (password !== confirmPassword) {
    showError(confirmPasswordEl, 'The password does not match');
  } else {
    showSuccess(confirmPasswordEl);
    valid = true;
  }
  return valid;
};
*/

const isRequired = value => value === '' ? false: true;
const isBetween = (length, min, max) => length < min || length > max ? false: true;
const showError = (input) => {
  const formField = input.parentElement;
  formField.classList.remove('has-success');
  formField.classList.add('has-error');
};
const showSuccess = (input) => {
  const formField = input.parentElement;
  formField.classList.remove('has-error');
  formField.classList.add('has-success');
}
 function verify() {
    // validate fields
    var isSearchValid = checkSearch();
    var isFormValid = isSearchValid;
    if (isFormValid) {
    return true;
    } else {
      return false;
    }
  }
