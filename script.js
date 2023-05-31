const mail = document.querySelector("input");
const error = document.querySelector(".error");
const succes = document.querySelector(".succes");
const form = document.querySelector("form");

const validerMail = () => {
  const format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!mail.value.match(format)) {
    error.classList.add("visible");
    succes.classList.remove("visible");
    mail.setAttribute(
      "style",
      "border:1px; border-style:solid; border-color:hsl(354, 100%, 66%);"
    );
  } else {
    succes.classList.add("visible");
    error.classList.remove("visible");
    mail.setAttribute(
      "style",
      "border:1px; border-style:solid; border-color:#32CD32;"
    );
  }
};
form.addEventListener("submit", (e) => {
  e.preventDefault();
  validerMail();
});
