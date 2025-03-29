// Ejercicio 3. Crea una web en HTML que muestre 4 cuadrados rellenos de color hex. #3b78d7. Usando
// CSS centrar los cuadrados horizontal y verticalmente con una separación de 10px.
// Una vez esté listo el código CSS elimina los elementos HTML y crea una función que le pasemos el
// número de cuadrados y añada todos los elementos HTML necesarios para mostrar el mismo resultado
// que antes. Ahora crea las clases necesarias en CSS para que los cuadrados alternen 3 colores
// sucesivamente y actualiza tu función para que aplique las clases.
// Nota: para definir las clases CSS que va a tener un elemento en Javascript usa la propiedad “className”
// de dicho elemento asignándole una cadena de texto con el nombre de las clases.
export function exercise3() {
  // Select the container where the squares will be added
  const container = document.getElementById("exercise3-container");

  // Clear any existing content in the container
  container.innerHTML = "";

  // Number of squares to create
  const numberOfSquares = 4;

  // Loop to create squares
  for (let i = 0; i < numberOfSquares; i++) {
    const square = document.createElement("div");

    // Assign the "square" class and alternating color classes
    square.className = `square color${(i % 3) + 1}`;

    // Append the square to the container
    container.appendChild(square);
  }
}
