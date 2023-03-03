const calcularSueldoConImpuestos = require('./calculadoraSueldo');

const sueldoDiario = 100;
const sueldoConImpuestos = calcularSueldoConImpuestos(sueldoDiario);

console.log(`El sueldo diario es: ${sueldoDiario}`);
console.log(`El sueldo con impuestos es: ${sueldoConImpuestos}`);