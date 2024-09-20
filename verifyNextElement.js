function verifyNextElement() {
  console.log('Descubra a lógica e complete o próximo elemento:');

  console.log('\na) 1, 3, 5, 7, ');
  console.log('Resposta: 9 (n + 2).');

  console.log('\nb) 2, 4, 8, 16, 32, 64, ');
  console.log('Resposta: 128 (n * 2).');

  console.log('\nc) 0, 1, 4, 9, 16, 25, 36, ');
  console.log('Resposta: 49 (n^2).');

  console.log('\nd) 4, 16, 36, 64,');
  console.log('Resposta: 100 (números pares ao quadrado).');

  console.log('\ne) 1, 1, 2, 3, 5, 8,');
  console.log('Resposta: 13 (sequência Fibonacci).');

  console.log('\nf) 2, 10, 12, 16, 17, 18, 19');
  console.log('Resposta: 200 (números que começam com a letra D).');
}

module.exports = { verifyNextElement };
