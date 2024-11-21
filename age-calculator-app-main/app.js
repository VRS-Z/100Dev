// 1- Acessar o input info
// 1a- used method get for catch the info field
// 1b- saved the info at one variable
// 1c- to use the info at code

// Pegar o ano atual usando new Date()
// extrair o ano com .getFullYear()
// Subtrair o ano de nascimento do ano atual

// eu quero pegar dois valores de mês
// Se o mês atual é menor que o mês de nascimento
// deve diminuir 1 ano

// se o mês atual é igual
// comparar o dia atual com o dia de nascimento
// se o dia ainda não chegou, deve também diminuir a idade
// Primeiro, subtrair apenas o ano
// Depois, verificar o ajuste com base no mês e dia

function agir() {
  let dataAtual = new Date().getFullYear();
  let mesAtual = new Date().getMonth();
  let diaAtual = new Date().getDay();

  const birthYear = document.getElementById("year").value;
  document.getElementById("resultYear").innerHTML =
    dataAtual - birthYear + " years";
  if (!birthYear) {
    return alert("Valor invalido, por favor coloque um número valido");
  }
  const birthMonth = document.getElementById("month").value;
  document.getElementById("resultMonth").innerHTML =
    mesAtual - birthMonth + " months";
  if (!birthMonth) {
    return alert("Valor invalido, por favor coloque um número valido");
  }
  const birthDay = document.getElementById("day").value;
  document.getElementById("resultDay").innerHTML =
    birthDay - diaAtual + " days";
  if (!birthDay) {
    return alert("Valor invalido, por favor coloque um número valido");
  }
}

// Se o campo estiver vazio, retornar um alerta.
// Quero acessar o campo e conferir se está vazio
// Se algum campo estiver vazio
// Retornar alerta
