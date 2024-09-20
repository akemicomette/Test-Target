function lamp() {
  console.log(
    ' 5) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em salas diferentes. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada. Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada? '
  );
  console.log('Resposta: ');
  console.log('Seguiria os seguintes passos: ');
  console.log(
    '1. Acenderia o interruptor 1, designado por mim contaria até 30 e o apagaria '
  );
  console.log(
    '2. Acenderia o interruptor do meio, iria até a sala e tocaria nas lâmpadas apagadas'
  );
  console.log(
    '3. Caso a lâmpada estivesse quente, saberia que ela é a correspondente ao primeiro interruptor, a lâmpada acesa corresponde ao interruptor ligado e a fria ao que não liguei.'
  );
}

module.exports = { lamp };
