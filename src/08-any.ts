(() => {
  //Se usa normalmente para la migración de datos
  let myDynamicVar: any;
  myDynamicVar = 100;
  myDynamicVar = null;
  myDynamicVar = {};
  myDynamicVar = "";

  //Así conseguimos que podamos usar un any de forma específica
  myDynamicVar = "Hola";
  const rta = (myDynamicVar as string).toLocaleLowerCase();

  myDynamicVar = 1212;
  const rta2 = (<number>myDynamicVar).toFixed();
  console.log(rta2);
})();
