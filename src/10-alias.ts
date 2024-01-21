(() => {
  //Creando alias o nuestros propios tipos
  type UserID = string | number;
  let userId: UserID;

  //Literal types es crear nuestros valores fijos
  type Sizes = "XS" | "S" | "M" | "L" | "XL" | "XXL";
  let shirtSize: Sizes;
  shirtSize = "XS";
  shirtSize = "S";
  shirtSize = "M";
  shirtSize = "L";
  shirtSize = "XL";
  shirtSize = "XXL";

  function greeting(myText: UserID, sizes: Sizes) {
    if (typeof userId === "string") {
      console.log(`string ${userId.toLocaleLowerCase()}`);
    }
    else (typeof userId === "number") {

    }
  }

  greeting(121, "XS");
})();
