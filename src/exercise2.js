// Ejercicio 2. Cambiar el contenido de un elemento del DOM.
// Crea un archivo HTML con un div vacío.
// Escribe una función que utilice document.querySelectorAll() para acceder al elemento del div y añada el
// siguiente contenido: un párrafo con un ‘lorem ipsum…’ y debajo un botón con el texto ‘Continuar’.

export function exercise2() {
  // Select element with by the ID
  const container = document.querySelector("#exercise2-container");
  /// Created P element
  const paragraph = document.createElement("p");
  // Created button element
  const button = document.createElement("button");
  /// Add text that will display in the p
  paragraph.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  // Add text in the button
  button.textContent = "Continue";
  // Add a new element to the end of the parent element in this case P
  container.appendChild(paragraph);
  // // Add a new element to the end of the parent element in this case the button
  container.appendChild(button);
}
