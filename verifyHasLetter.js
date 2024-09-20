const prompt = require('prompt-sync')();

function verifyHasLetter() {
  console.log(
    "Qual a palavra ou frase deseja verificar a quantidade de as letras 'A'?"
  );
  const word = prompt('> ');

  if (isNaN(word)) {
    let count = 0;

    for (let i = 0; i < word.length; i++) {
      if (word[i].toLowerCase() === 'a') {
        count++;
      }
    }
    console.log(`A letra 'A' aparece ${count} vezes.`);
  } else {
    console.log('Valor inserido inválido! Recomece a questão.');
  }
}

module.exports = { verifyHasLetter };
