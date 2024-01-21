(() => {
  type Sizes = "XS" | "S" | "M" | "L" | "XL" | "XXL";

  function createProductToJson(
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
  )
  {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  const producto1 = createProductToJson("P1", new Date(), 12, "XL");
  console.log(producto1);
  console.log(producto1.title);
  console.log(producto1.stock);
  console.log(producto1.createdAt);
  console.log(producto1.size);

  //Es mejor trabajar con arrow function para evitar problemas con el this
  const  createProductToJsonV2 = (
    title: string,
    createdAt: Date,
    stock: number,
    //Aqui creo un argumento opcional no tiene nada que ver con optional chaining
    //Ademas se le añade que size puede ser undefined
    //Tambien puedo hacer size: Size = "S" y ya no se pone el ? porque ahora es opcional con un valor inicializado
    size?: Sizes
  ) => {
    //Se puede poner un return explicito si ponemos parentesis
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  const producto2 = createProductToJsonV2("P1", new Date(), 12);
  console.log(producto2);
  console.log(producto2.title);
  console.log(producto2.stock);
  console.log(producto2.createdAt);
  console.log(producto2.size);
})();
