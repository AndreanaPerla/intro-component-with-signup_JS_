const form = document.getElementById("intro-form");
const username = document.getElementById("name");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const nameValue = username.value;
  const lastnameValue = lastname.value;
  const emailValue = email.value;
  const passwordValue = password.value;

  //name form
  if (nameValue === "") {
    //add error class
    setErrorForName(username);
  } else {
    //add success class
    setSuccessForName(username);
  }

  //lastname form
  if (lastnameValue === "") {
    setErrorForLastName(lastname);
  } else {
    setSuccessForLastName(lastname);
  }

  //password form
  if (passwordValue === "") {
    setErrorForPassword(password);
  } else {
    setSuccessForPassword(password);
  }

  //email form
  if (emailValue === "") {
    setErrorForEmail(email);
  } else if (!isEmail(emailValue)) {
    setErrorForEmail(email);
  } else {
    setSuccessForEmail(email);
  }
}

//name form functions
function setErrorForName(input) {
  const nameForm = input.parentElement; //.name-form
  nameForm.classList.add("error");
}

function setSuccessForName(input) {
  const nameForm = input.parentElement;
  nameForm.className = "name-form";
}

//lastname form functions
function setErrorForLastName(input) {
  const lastnameForm = input.parentElement; //.lastname-form
  lastnameForm.classList.add("error");
}

function setSuccessForLastName(input) {
  const lastnameForm = input.parentElement;
  lastnameForm.className = "lastname-form";
}

//password form functions
function setErrorForPassword(input) {
  const passwordForm = input.parentElement; //.password-form
  passwordForm.classList.add("error");
}

function setSuccessForPassword(input) {
  const passwordForm = input.parentElement;
  passwordForm.className = "password-form";
}

//email form functions
function setErrorForEmail(input) {
  const emailForm = input.parentElement; //.email-form
  emailForm.classList.add("error");
}

function setSuccessForEmail(input) {
  const emailForm = input.parentElement;
  emailForm.className = "email-form";
}

function isEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
