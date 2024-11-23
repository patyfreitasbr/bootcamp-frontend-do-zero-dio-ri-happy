
const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmPorLitros = 10;
const distaciaKm = 100;
const tipoCombustivel = 'gasolina';

const litrosConsumidos = distaciaKm / kmPorLitros;

if (tipoCombustivel === 'etanol') {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
} else {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
}






