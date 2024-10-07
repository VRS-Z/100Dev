for (let contador = 20; contador <= 60; contador++) console.log(contador);

function respostaDaProgressãoAritimetica(numeroInicial, numeroFinal, razao) {
  let soma = 0;

  for (
    let resposta = numeroInicial;
    resposta <= numeroFinal;
    resposta += razao
  ) {
    soma += resposta;
  }
  return soma;
}
console.log(respostaDaProgressãoAritimetica(69, 100, 5));

function fazerBolo(tipoDeMassa, saborDoRecheio) {
  const bolo = `Eu quero um bolo ${tipoDeMassa} de ${saborDoRecheio}`;
  return bolo;
}
const boloDoCliente = fazerBolo("Fofo", "Chocolate");
console.log(boloDoCliente);
