const prompt = require('prompt-sync')();
const { verifyIsNumber: verifyIfIsNumber } = require('./verifyIFisNumber.js');

function verifyIsFibonacci() {
  let secondToLastNumber = 0;
  let lastNumber = 1;
  let currentNumber = 1;

  console.log(
    'Digite o número que deseja verificar se pertence a sequência Fibonacci: '
  );
  const insertedNumber = parseInt(prompt('> '));

  if (verifyIfIsNumber(insertedNumber) === false) {
    return;
  }

  while (currentNumber < insertedNumber) {
    secondToLastNumber = lastNumber;
    lastNumber = currentNumber;
    currentNumber = secondToLastNumber + lastNumber;
  }

  if (
    insertedNumber === secondToLastNumber ||
    insertedNumber === lastNumber ||
    insertedNumber === currentNumber
  ) {
    console.log(`O número ${insertedNumber} percente à sequência Fibonacci`);
  } else {
    console.log(
      `O número ${insertedNumber} não pertence à sequência Fibonacci.`
    );
  }
}

module.exports = { verifyIsFibonacci };
