// Pedimos al usuario que introduzca el número del mes
const numeroMes = parseInt(prompt("Introduce el número del mes (1 al 12):"));

// Verificamos si el número del mes introducido es válido (entre 1 y 12)
if (numeroMes >= 1 && numeroMes <= 12) {
  // Creamos un array con la cantidad de días de cada mes (en orden)
  const diasPorMes = [31,28,31,30,31,30,31,31,30,31,30,31];

  // Obtenemos la cantidad de días correspondiente al mes introducido
  const diasDelMes = diasPorMes[numeroMes - 1];

  // Mostramos por pantalla la cantidad de días del mes
  console.log(`El mes ${numeroMes} tiene ${diasDelMes} días.`);
} else {
  // Si el número del mes introducido no es válido, mostramos un mensaje de error
  console.error("El número del mes introducido no es válido.");
}