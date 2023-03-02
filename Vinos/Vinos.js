// Creamos un objeto que contenga la información de los vinos disponibles
const vinos = {
  "blanco": 100,
  "tinto": 200
};

// Pedimos al usuario que introduzca el código del vino
const codigoVino = prompt("Introduce el código del vino (blanco/tinto):");

// Verificamos si el código introducido está en nuestra lista de vinos disponibles
if (vinos.hasOwnProperty(codigoVino)) {
  // Obtenemos el precio original del vino
  const precioOriginal = vinos[codigoVino];

  // Calculamos el descuento correspondiente en función del tipo de vino
  let descuento = 0;
  if (codigoVino === "blanco") {
    descuento = precioOriginal * 0.05;
  } else if (codigoVino === "tinto") {
    descuento = precioOriginal * 0.1;
  }

  // Mostramos el descuento correspondiente por pantalla
  console.log(`El descuento del vino ${codigoVino} es de ${descuento}€.`);
} else {
  // Si el código introducido no está en nuestra lista de vinos disponibles, mostramos un mensaje de error
  console.error("El código introducido no corresponde a ningún vino disponible.");
}