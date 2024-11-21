const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const icon = togglePassword.querySelector("img");

togglePassword.addEventListener("click", () => {
  const type =
    passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);

  icon.src =
    type === "password"
      ? "../images/eye-slash-solid.svg"
      : "../images/eye-solid.svg";
});

let formButt = document.querySelector(".btn button");
formButt.addEventListener("click", (e) => {
  e.preventDefault();

  const name = document.getElementById("userName").value;
  const password = document.getElementById("password").value;

  const usernamePattern = /^[a-zA-Z0-9_]{3,}$/;
  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

  let error = document.querySelectorAll(".error");
  error.forEach((element) => {
    element.innerText = "";
  });

  let isValid = true;

  if (!usernamePattern.test(name)) {
    document.getElementById("usernameError").innerText =
      "This field is required.";
    isValid = false;
  }

  if (!passwordPattern.test(password)) {
    document.getElementById("passwordError").innerText =
      "This field is required.";
    isValid = false;
  }


  if (isValid) {
    let finalValidation = document.getElementsByClassName("form-cantrol");
    // console.log(finalValidation);
    Array.from(finalValidation).forEach((el) => {
        el.value = "";
    });

}
});

// console.log(icon.src);cv
