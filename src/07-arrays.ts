(() => {
  let prices = [1,2,2,1,1,212];
  prices.push(4);
  prices.push(121212);
  console.log("prices", prices);

  let differentTypes = [true, "hola", 232];
  differentTypes.push(false);
  differentTypes.push(342);
  differentTypes.push("probando");
  console.log(differentTypes);

  let mixed: (number | string | boolean)[] = ["hola", true];
  mixed.push(232);
  console.log("mixed", mixed);

  //Gracias a que sabemos bien que tipo de datos hay en el array podemos usar funciones sin esperar sorpresas
  let numbers = [1,2,2,1,1,212];
  numbers.map(item => item * 2);
})();
