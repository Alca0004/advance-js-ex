// Ejercicio 2. Cambiar el contenido de un elemento del DOM.
// Crea un archivo HTML con un div vacío.
// Escribe una función que utilice document.querySelectorAll() para acceder al elemento del div y añada el
// siguiente contenido: un párrafo con un ‘lorem ipsum…’ y debajo un botón con el texto ‘Continuar’.
// Define exercise2 as a function
// exercise2.js
// Function to modify the div when the button is clicked
// Exercise 2 function
export function exercise2() {
  const container = document.getElementById("exercise2-container");

  // Check if the div exists to avoid errors
  if (container) {
    // Create a new paragraph element with lorem ipsum text
    const paragraph = document.createElement("p");
    paragraph.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

    // Create a new button element
    const continueButton = document.createElement("button");
    continueButton.textContent = "Continuar";

    // Append the paragraph and button to the container
    container.appendChild(paragraph);
    container.appendChild(continueButton);
  }
}
