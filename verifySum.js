function verifySum() {
  let index = 12;
  let sum = 0;
  let k = 1;

  while (k < index) {
    k = k + 1;
    sum = sum + k;
  }

  console.log(`O valor da soma é: ${sum}.`);
}

module.exports = { verifySum };
