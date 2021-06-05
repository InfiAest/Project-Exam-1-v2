const form = document.querySelector("#contactForm");
const fullName = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const nameErrorIcon = document.querySelector(".nameErrorIcon");
const nameTick = document.querySelector(".nameTick");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const subjectErrorIcon = document.querySelector(".subjectErrorIcon");
const subjectTick = document.querySelector(".subjectTick");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const emailErrorIcon = document.querySelector(".emailErrorIcon");
const emailTick = document.querySelector(".emailTick");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const messageErrorIcon = document.querySelector(".messageErrorIcon");
const messageTick = document.querySelector(".messageTick");
const validationModal = document.querySelector("#validation-modal");

function validateForm(event) {
    event.preventDefault();

    var formIsValid = true;

    if (checkLength(fullName.value, 4) === true) {
        nameError.style.display = "none";
        nameErrorIcon.style.display = "none";
        nameTick.style.display = "block";
    } else {
        nameError.style.display = "block";
        nameErrorIcon.style.display = "block";
        formIsValid = false;
    }

    if (checkLength(subject.value, 14) === true) {
        subjectError.style.display = "none";
        subjectErrorIcon.style.display = "none";
        subjectTick.style.display = "block";
    } else {
        subjectError.style.display = "block";
        subjectErrorIcon.style.display = "block";
        formIsValid = false;
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
        emailErrorIcon.style.display = "none";
        emailTick.style.display = "block";
    } else {
        emailError.style.display = "block";
        emailErrorIcon.style.display = "block";
        formIsValid = false;
    }

    if (checkLength(message.value, 25) === true) {
        messageError.style.display = "none";
        messageErrorIcon.style.display = "none";
        messageTick.style.display = "block";
    } else {
        messageError.style.display = "block";
        messageErrorIcon.style.display = "block";
        formIsValid = false;
    }

    if (formIsValid === true) {
        validationModal.style.display = "block";
        console.log("Congrats! You filled out the form correctly");
    } 

}

const closeButton = document.getElementsByClassName("close")[0];
const homeButton = document.querySelector(".home-button");
const newMessageButton = document.querySelector(".new-message-button");


/* Close button --------*/
closeButton.onclick = function() { 
  validationModal.style.display = "none";
  window.location = "contact.html";
}
/* Home button --------*/
homeButton.onclick = function() { 
    window.location = "index.html";
  }
/* New Message button --------*/
newMessageButton.onclick = function() { 
    validationModal.style.display = "none";
    window.location = "contact.html";
  }

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}