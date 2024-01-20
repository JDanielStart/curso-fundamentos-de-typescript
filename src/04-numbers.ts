(() => {
  let productPrice = 100;
  productPrice = 12;
  console.log("productPrice", productPrice);

  let customerAge: number = 28;
  customerAge = customerAge + 1;
  console.log("customerAge", customerAge);

  let productInSTock: number = 4;
  console.log("productInStock", productInSTock);
  if (productInSTock > 10) {
    console.log("is greater");
  }
  else {
    console.log("apply");
  }

  let discount = parseInt("100");
  console.log("discount", discount);
  if (discount <= 200) {
    console.log("apply");
  }
  else {
    console.log("not apply");
  }

  //Lo traduce a decimal
  let hex = 0xfff;
  console.log("hex", hex);
  let bin = 0b1010;
  console.log("bin", bin);

  //Esto en javascript es un objeto de tipo Number no es el number de typescript
  const myNumberObj: Number = 3;
  //Esta es la forma correcta
  const myNumber: number = 10;
})();
