const form = document.querySelector(".feedback-form");

form.addEventListener("input", handleInputForm);

function handleInputForm(event) {
  if (event.target.closest('.feedback-form')) {
    const email = form.email.value.trim(); 
    const message = form.message.value.trim(); 

    const localStorageKey = {
      email: email,
      message: message,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(localStorageKey));
  }
}

function checkLocalStorage() {
  const savedInfo = localStorage.getItem("feedback-form-state");
  if (savedInfo) {
    const formData = JSON.parse(savedInfo)
    form.email.value = formData.email;
    form.message.value = formData.message;
  } else {
    form.reset();
  }
}

document.addEventListener('DOMContentLoaded', checkLocalStorage);

document.addEventListener("input", handleInputForm);

form.addEventListener("submit", handleSubmit) 

function handleSubmit(event) {
event.preventDefault();
  form.reset();
 const savedState = localStorage.getItem('feedback-form-state');
  const localStorageInfo = savedState ? JSON.parse(savedState) : {};

if (!localStorageInfo.email || !localStorageInfo.message) {
    alert('Будь ласка, заповніть обидва поля форми');
    return;
  }

  const emailValue = localStorageInfo.email.trim();
  const messageValue = localStorageInfo.message.trim();
  
  console.log("Email:", emailValue);
  console.log("Message:", messageValue);
}
