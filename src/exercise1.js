// Ejercicio 1. Acceso al DOM.
// Crea un archivo HTML con un párrafo con un id único.
// Utiliza document.getElementById() para acceder al párrafo y muestra su contenido en la consola.
// En el archivo HTML anterior crea varios elementos con la misma clase.
// Ahora utiliza document.querySelectorAll() para acceder a todos los elementos con dicha clase y muestra
// su contenido en la consola.

// Exercise 1 function
// exercise1.js

export function exercise1() {
  /// Accessing the unique ID
  const uniqueParagraph = document.getElementById("unique-paragraph");
  console.log("Unique paragraph content:", uniqueParagraph.textContent);
  // Acesss all the paragraphs with the same class
  const multipleParagraphs = document.querySelectorAll(".multiple");

  // Loops through each element and finds them all, using the index + 1 so the count starts at 1

  multipleParagraphs.forEach((paragraph, index) => {
    console.log(`Paragraph ${index + 1}`, paragraph.textContent);
  });
}
