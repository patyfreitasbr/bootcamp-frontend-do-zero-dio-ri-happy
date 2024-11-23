
const precoCombustivel = 5.79;
const kmPorLitros = 10;
const distaciaKm = 100;

const litrosConsumidos = distaciaKm / kmPorLitros;

const valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto.toFixed(2));



