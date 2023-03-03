const calcularSueldoConImpuestos = (sueldoDiario) => {
  const IVA = 0.16;
  const sueldoConImpuestos = sueldoDiario + (sueldoDiario * IVA);
  return sueldoConImpuestos;
};

module.exports = calcularSueldoConImpuestos;