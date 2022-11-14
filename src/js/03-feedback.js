import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('[type="email"]');
const textarea = document.querySelector('.feedback-form textarea');
const STORAGE_KEY = 'feedback-form-state';
const savedChanges = localStorage.getItem(STORAGE_KEY) || '{}';
const parsedChanges = JSON.parse(savedChanges);
// console.log(parsedChanges);

form.addEventListener('submit', handleFormSubmit);
form.addEventListener('input', throttle(handleInput, 500));

updateForm();

function handleFormSubmit(event) {
  //   console.log(event);
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);

  console.log(parsedChanges);
}

function handleInput(event) {
  //   console.log(event.target.name);
  parsedChanges[event.target.name] = event.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(parsedChanges));
}

function updateForm() {
  //   console.log(parsedChanges.email);
  //   console.log(parsedChanges.message);
  if (savedChanges) {
    if (parsedChanges.email) {
      emailInput.value = parsedChanges.email;
    }
    if (parsedChanges.message) {
      textarea.value = parsedChanges.message;
    }
  }
}
