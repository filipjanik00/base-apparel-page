const form = document.getElementById("form");
const email = document.getElementById("email");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkMail();
});

function checkMail() {
  // Trim Email Value
  const emailValue = email.value.trim();

  if (emailValue === "") {
    errorMsg();
  } else if (!isEmail(emailValue)) {
    errorMsg2();
  } else {
    successMsg();
  }
}

function errorMsg() {
  const input = document.querySelector(".input");
  input.style.borderColor = "red";
  const small = document.querySelector("small");
  small.style.display = "block";
}

function errorMsg2() {
  const input = document.querySelector(".input");
  input.style.borderColor = "red";
  const small = document.querySelector("small");
  small.style.display = "block";
  small.innerText = "Looks like this is not an email!";
}

function successMsg() {
  const input = document.querySelector(".input");
  input.style.borderColor = "green";
  const small = document.querySelector("small");
  small.style.display = "none";
  alert("Thanks! We'll be in touch! Call you soon!");
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
