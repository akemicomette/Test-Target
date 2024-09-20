const prompt = require('prompt-sync')();
const { verifyIsNumber } = require('./verifyIFisNumber.js');

const { verifyIsFibonacci } = require('./verifyIsFibonacci.js');
const { verifyHasLetter } = require('./verifyHasLetter.js');
const { verifySum } = require('./verifySum.js');
const { verifyNextElement } = require('./verifyNextElement.js');
const { lamp } = require('./lamp.js');

console.log('Teste Vaga Estágio Target - Questões');
console.log(' ');
console.log('1. Verifique se o número pertence a sequência Fibonacci.');
console.log('2. Verfique o número de letras "a".');
console.log('3. Descubra o valor de soma.');
console.log('4. Descubra o valor do próximo elemento.');
console.log('5. Lógica dos interruptores.');
console.log(' ');
console.log('Informe o número da questão que deseja testar: ');
let questionNumber = parseInt(prompt('> '));

if (verifyIsNumber(questionNumber) == false || questionNumber > 5) {
  console.log('Erro: Somente números entre 1 e 5 são válidos.');
}

switch (questionNumber) {
  case 1:
    verifyIsFibonacci();
    break;

  case 2:
    verifyHasLetter();
    break;

  case 3:
    verifySum();
    break;

  case 4:
    verifyNextElement();
    break;

  case 5:
    lamp();
    break;

  default:
    console.log('Questão inválida.');
    break;
}
