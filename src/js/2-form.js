const form = document.querySelector(".feedback-form");

const localStorageKey = {
    email: form.elements.email.value,
    message: form.elements.message.value,
}

console.log(localStorageKey);
form.addEventListener("input", (handleInput) => {
    localStorage.setItem(localStorageKey, handleInput.target.value)
});

// function handleInput() {
//     const formInfo = localStorage.getItem("feedback-form-state", localStorageKey)
//     console.log(formInfo);
// }



form.addEventListener("submit", (handleSubmit) => {
  handleSubmit.preventDefault();
	console.log(handleSubmit.target.elements.message.value);
  form.reset();
});

// function handleSubmit(event) {
//     event.preventDefault()
// }

