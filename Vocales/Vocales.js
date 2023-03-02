function esVocal(caracter) {
    // Convertir el carácter a minúscula para hacer la comparación
    caracter = caracter.toLowerCase();
  
    // Comprobar si el carácter es una vocal
    if (caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u') {
      return true;
    } else {
      return false;
    }
  }
  
  // Ejemplo de uso de la función
  console.log(esVocal('a')); // Devuelve true
  console.log(esVocal('E')); // Devuelve true
  console.log(esVocal('x')); // Devuelve false