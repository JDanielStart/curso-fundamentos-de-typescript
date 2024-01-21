(() => {
  let myNumber: number;
  let myString: string;
  //Queda como any
  let myNull = null;
  let myUndefined = undefined;

  //Queda con el tipo que le especificas
  let nulli: null = null;

  let myNumber2: number | null = null;
  myNumber2 = 3;

  let myString2: string | undefined = undefined;
  myString2 = "sdfasd";

  function hi(name: string | null) {
    let hello = "Hola ";
    if (name) {
      hello += name;
    }
    else {
      hello += "nobody";
    }
    console.log(hello);
  }

  hi("Nicolás");
  hi(null);

  //Es mejor comprobar los nulos y undefined de esta manera con el optional chaining
  function hiV2(name: string | null) {
    let hello = "Hola ";
    hello += name?.toLowerCase() || "nobody";
    console.log(hello);
  }

  hiV2("Nicolás");
  hiV2(null);
})();
