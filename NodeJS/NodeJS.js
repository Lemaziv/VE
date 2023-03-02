// Define una función para calcular el sueldo con impuestos
const calcularSueldoConImpuestos = (sueldoDiario) => {
    const IVA = 0.16;
    const sueldoConImpuestos = sueldoDiario + (sueldoDiario * IVA);
    return sueldoConImpuestos;
  };
  
  // Usa la función para calcular el sueldo con impuestos y mostrar los resultados en la consola
  const sueldoDiario = 100;
  const sueldoConImpuestos = calcularSueldoConImpuestos(sueldoDiario);
  
  console.log(`El sueldo diario es: ${sueldoDiario}`);
  console.log(`El sueldo con impuestos es: ${sueldoConImpuestos}`);