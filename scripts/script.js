// Carne - 400 gr por pessoa + de 6 horas - 650
// Cerveja - 12000ml por pessoa + de 6 horas - 2000ml
// Refrigerante/agua - 1000ml por pessoa + 6 horas 1500ml

// crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
  console.log("Calculando");

  let adultos = inputAdultos.value;
  let criancas = inputCriancas.value;
  let duracao = inputDuracao.value;

  let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao)/2 * criancas);
  let qtdTotalCerveja = cervejaPP(duracao) * adultos;
  let qtdTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao)/2 * criancas);
  
  resultado.innerHTML = `<p>${qtdTotalCarne/1000} Kg de Carne</p>`
  resultado.innerHTML += `<p>${qtdTotalCerveja/1000} L de Cerveja</p>`
  resultado.innerHTML += `<p>${qtdTotalBebidas/1000} L de Bebidas</p>`
}

function carnePP(duracao){
  if (duracao <= 6){
    return 400;
  }
  else {
    return 650;
  }
}

function cervejaPP(duracao){
  if (duracao <= 6){
    return 1200;
  }
  else {
    return 2000;
  }
}

function bebidasPP(duracao){
  if (duracao <= 6){
    return 1000;
  }
  else {
    return 1500;
  }
}
