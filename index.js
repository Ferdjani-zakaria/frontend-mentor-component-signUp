const getElementWithId = (e) => {
  return document.getElementById(`${e}`)
    ? document.getElementById(`${e}`)
    : null;
};
const getElementWithClasse = (e) => {
  return document.getElementsByClassName(`${e}`)
    ? document.getElementsByClassName(`${e}`)
    : null;
};
// form btn
const submitBtn = document.getElementById("submit-btn");

const submition = () => {
  let message = getElementWithClasse("error_message");
  //   form input treated one by one
  // first name input
  let first = getElementWithId("FirstName");
  if (!first.value.length) {
    console.log(first.value.length);
    let error1 = getElementWithId("error-icon-1");
    error1.style.display = "block";
    message[0].style.opacity = 1;
  } else {
    console.log(first.value.length + "ee");
    let error1 = getElementWithId("error-icon-1");
    error1.style.display = "none";
    message[0].style.opacity = 0;
  }
  // last name input
  let Last = getElementWithId("LastName");
  if (!Last.value.length) {
    let error2 = getElementWithId("error-icon-2");
    error2.style.display = "block";
    message[1].style.opacity = 1;
  } else {
    let error2 = getElementWithId("error-icon-2");
    error2.style.display = "none";
    message[1].style.opacity = 0;
  }
  // email input
  let email = getElementWithId("Email");
  if (!email.value.length) {
    let error3 = getElementWithId("error-icon-3");
    error3.style.display = "block";
    message[2].style.opacity = 1;
  } else {
    let error3 = getElementWithId("error-icon-3");
    error3.style.display = "none";
    message[2].style.opacity = 0;
  }
  //   password input
  let password = getElementWithId("password");
  if (!password.value.length) {
    let error4 = getElementWithId("error-icon-4");
    error4.style.display = "block";
    message[3].style.opacity = 1;
  } else {
    let error4 = getElementWithId("error-icon-4");
    error4.style.display = "none";
    message[3].style.opacity = 1;
  }
};

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  submition();
});
