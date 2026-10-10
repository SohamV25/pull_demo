
const helloBtn = document.getElementById("helloBtn");
const message = document.getElementById("message");

helloBtn.addEventListener("click", function () {
  message.textContent = "Your first pull request was successful!";
});
