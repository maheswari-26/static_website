
// Get the button element
const myButton = document.querySelector('#myButton');

// Add an event listener for the click event
myButton.addEventListener('click', () => {
  // Do something when the button is clicked
  console.log('The button was clicked!');
});

2. Create a function that changes the text of an element when triggered:

// Get the element to modify
const myElement = document.querySelector('#myElement');

// Define a function to change the element's text
function changeText() {
  myElement.textContent = 'I was changed!';
}

// Call the function when needed
changeText();