const buttonElement = document.querySelector('button');
const inputElement = document.querySelector('input');
const listElement = document.querySelector('ul');

function addGoal() {
  const enteredValue = inputElement.value;

  // createElement is a built-in method provided by the browser to create a new list item element AKA a new DOM elements programatically with JS
  const listItemElement = document.createElement('li');

  // The text between the opening and closing text of that list item
  listItemElement.textContent = enteredValue;
  listElement.appendChild(listItemElement);
  
  // Resets the input once the goal is added
  // This sets the value in the input element to an empty text, and therefore, clears it
  inputElement.value = '';
}

buttonElement.addEventListener('click', addGoal);