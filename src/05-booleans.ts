(() => {
  let isEnabled = true;
  isEnabled = false;

  let isNew: boolean = false;
  console.log("isNew", isNew);
  isNew = true;
  console.log("isNew", isNew);

  const random = Math.random();
  console.log("random", random);
  isNew = random >= 0.5 ? true : false;
  console.log("isNew", isNew);
  //probando uso de logica para ejecutar algo
  random>= 0.5 && console.log("se cumple la condicion");

  //Esto es una mala práctica debe ser boolean
  const myBoolean: Boolean = true;
})();
