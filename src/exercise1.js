// Ejercicio 1. Acceso al DOM.
// Crea un archivo HTML con un párrafo con un id único.
// Utiliza document.getElementById() para acceder al párrafo y muestra su contenido en la consola.
// En el archivo HTML anterior crea varios elementos con la misma clase.
// Ahora utiliza document.querySelectorAll() para acceder a todos los elementos con dicha clase y muestra
// su contenido en la consola.
// exercise1.js
// exercise1.js

// Exercise 1 function
export function exercise1() {
  const uniqueParagraph = document.getElementById("unique-paragraph");
  console.log("Unique paragraph content:", uniqueParagraph.textContent);
}

// Add an event listener to the button to trigger exercise1 when clicked
// Add event listener to the button
const button = document.getElementById("exercise1-button");
button.addEventListener("click", exercise1);
