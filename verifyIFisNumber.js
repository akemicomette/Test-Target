function verifyIsNumber(value) {
  if (value < 0 || isNaN(value)) {
    console.log('Erro: Valor inserido inválido!');
    return false;
  }
  return true;
}

module.exports = { verifyIsNumber };
