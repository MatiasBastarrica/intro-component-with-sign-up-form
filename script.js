const form = document.querySelector("form");
const inputsContainer = document.querySelectorAll(".input-container");

function displayErrorMessage(message, inputContainer) {
  const paragraph = document.createElement("p");
  paragraph.classList.add("error-message");
  paragraph.textContent = message;
  inputContainer.appendChild(paragraph);
}

function displayErrorIcon(inputContainer) {
  const errorIconContainer = document.createElement("div");
  errorIconContainer.classList.add("error-icon-container");
  const errorIcon = document.createElement("img");
  errorIcon.setAttribute("src", "./images/icon-error.svg");
  errorIconContainer.appendChild(errorIcon);
  inputContainer.appendChild(errorIconContainer);
}

function getFieldName(input) {
  return input.getAttribute("placeholder");
}

form.addEventListener("submit", (e) => {
  inputsContainer.forEach((inputContainer) => {
    const input = inputContainer.querySelector("input");
    const errorMessage = inputContainer.querySelector(".error-message");
    const fieldName = getFieldName(input);
    const message = `${fieldName} cannot be empty`;
    const lastChild = inputContainer.lastElementChild;

    if (input.value === "") {
      e.preventDefault();
      errorMessage.textContent = message;
      input.style.borderColor = "red";
      errorMessage.classList.remove("hide");
      if (inputContainer.childElementCount == 2) {
        displayErrorIcon(inputContainer);
      }
    } else {
      errorMessage.classList.add("hide");
      if (inputContainer.childElementCount === 3) {
        inputContainer.removeChild(lastChild);
      }
    }
  });
});

inputsContainer.forEach((inputContainer) => {
  const input = inputContainer.querySelector("input");
  const errorMessage = inputContainer.querySelector(".error-message");
  const fieldName = getFieldName(input);
  const message = `Looks like this is not a valid ${fieldName.toLowerCase()}`;
  input.addEventListener("invalid", (e) => {
    e.preventDefault();
    errorMessage.textContent = message;
    input.style.borderColor = "red";
    errorMessage.classList.remove("hide");
    if (inputContainer.childElementCount == 2) {
      displayErrorIcon(inputContainer);
    }
  });
});
