// DOM Access and Manipulation

element = document.querySelector('Selector'); // Select the element

var something = element.textContent; // Read the element text and store in a variable
element.textContent = 'something'; // Set the element text
element.innerHTML = '<em>' + something + '</em>'; // Set the element html
element.style.display = 'none'; // Change the css (in this case set the display to 'none')
element.addEventListener('event', action()); 
// or                                               // Run a function when the event happen
element.addEventListener('event', function() {
    // Something
});
element.classList.remove('className'); // Remove a class
element.classList.add('className'); // Add a class
element.classList.toggle('className'); // Toggle a class
