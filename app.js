const passElement = document.getElementById("ip");
const lenElement = document.getElementById("len");

const upCase = "ABCDEFGHIJKLMNOPQRSTWXYZ";
const lowCase = "abcdefghijklmnopqrstwxyz";
const numbers = "0123456789";
const symbols = "~!@#$%^&*()_-+={[}]|:;<,>.?/";

const allChars = upCase + lowCase + numbers + symbols;

function generatePassword() {
  const length = parseInt(lenElement.value, 10);
  if (length < 4) {
    alert("Password length must be at least 4!");
    return;
  }

  let password = "";

  password += upCase[Math.floor(Math.random() * upCase.length)];
  password += lowCase[Math.floor(Math.random() * lowCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];


  while (password.length < length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }


  passElement.value = password;
}

function copyPassword() {
  navigator.clipboard.writeText(passElement.value).then(() => {
    alert("Password copied to clipboard!");
  }).catch(err => {
    alert("Failed to copy password: " + err);
  });
}

function togglePassword() {
  const type = passElement.type === "password" ? "text" : "password";
  passElement.type = type;
}
