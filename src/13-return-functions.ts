(() => {
  //Es mejor tipar las funciones para que quede claro el uso de la función sin inferir
  const calcTotal = (prices: number[]): string => {
    let total = 0;
    prices.forEach((item) => {
      total += item;
    });
    return total.toString();
  }

  //Explicitamente dices que la función no retorna nada
  const printTotal = (prices: number[]): void => {
    calcTotal(prices);
    console.log(`El total es ${rta}`);
  }

  const rta = calcTotal([1, 2, 1, 1, 1]);
  console.log(rta);

  printTotal([1, 2, 1, 1, 1]);
})();
