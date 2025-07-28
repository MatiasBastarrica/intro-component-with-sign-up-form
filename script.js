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
  errorIconContainer.classList.add("erro-icon-container");
  const errorIcon = document.createElement(img);
  errorIcon.setAttribute("src", "./images/icon-error.svg");
  errorIconContainer.appendChild(errorIcon);
  inputContainer.appendChild(errorIconContainer);
}

function getFieldName(input) {
  return input.getAttribute("placeholder");
}

inputsContainer.forEach((inputContainer) => {
  const input = inputContainer.querySelector("input");
  input.addEventListener("invalid", (e) => {
    e.preventDefault();
    if (inputContainer.childElementCount === 2) {
      const lastChild = inputContainer.lastElementChild;
      inputContainer.removeChild(lastChild);
    }
    const fieldName = getFieldName(input);
    const message = `Looks like this is not a valid ${fieldName.toLowerCase()}`;
    displayErrorMessage(message, inputContainer);
    input.style.borderColor = "red";
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  inputsContainer.forEach((inputContainer) => {
    const input = inputContainer.querySelector("input");
    if (inputContainer.childElementCount === 2) {
      const lastChild = inputContainer.lastElementChild;
      inputContainer.removeChild(lastChild);
    }
    if (input.value === "" && inputContainer.childElementCount === 1) {
      const fieldName = getFieldName(input);
      const message = `${fieldName} cannot be empty`;
      displayErrorMessage(message, inputContainer);
      input.style.borderColor = "red";
    }
  });
});
