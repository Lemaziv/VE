function numeroMenor(num1, num2, num3) {
    if (num1 === num2 && num2 === num3) {
      // Si los tres números son iguales, devolver el String "números iguales"
      return "números iguales";
    } else {
      // Encontrar el número menor utilizando el operador ternario
      const numeroMenor = (num1 < num2) ? (num1 < num3 ? num1 : num3) : (num2 < num3 ? num2 : num3);
      return numeroMenor;
    }
  }
  
  // Ejemplo de uso de la función
  console.log(numeroMenor(4, 8, 2)); // Devuelve 2
  console.log(numeroMenor(5, 5, 5)); // Devuelve "números iguales"