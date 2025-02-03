function gerarArrayNumeros() {
    const numeros = [];
    for (let i = 0; i < 50; i++) {
      numeros.push(Math.floor(Math.random() * 100));
    }

    return numeros;
}

function separarMultiplosDe3(array) {
    const multiplosDe3 = [];
    const naoMultiplosDe3 = [];
  
    for (const numero of array) {
      if (numero % 3 === 0) {
        multiplosDe5.push(numero);
      } else {
        naoMultiplosDe3.push(numero);
      }
    }
  
  return { multiplosDe3, naoMultiplosDe3 };
}

function exibirResultados(multiplosDe3, naoMultiplosDe3) {
  console.log("Múltiplos de 3:", multiplosDe3);
  console.log("Não múltiplos de 3:", naoMultiplosDe3);
}

function executar() {
  const numeros = gerarArrayNumeros();
  const { multiplosDe3, naoMultiplosDe3 } = separarMultiplosDe5(numeros);
  exibirResultados(multiplosDe3, naoMultiplosDe3);
}
  