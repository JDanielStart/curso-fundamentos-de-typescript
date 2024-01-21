(() => {
  let userId: string | number;
  userId = 1212;
  userId = "asasa";

  //Al usar union types esta es la forma de tratarlo según lo que llegue
  function greeting(myText: string | number) {
    if (typeof myText === "string") {
      console.log(`string ${myText.toLocaleLowerCase()}`);
    }
    else {
      console.log(`number ${myText.toFixed(1)}`);
    }
  }
  greeting("Hola");
  greeting(12.234234353);
})();
