(() => {
  const login = (data: {email: string, password: number}) => {
    console.log(data.email, data.password);
  }

  login({
    email: "nico@nico.co",
    password: 12312
  });

  type Sizes = "XS" | "S" | "M" | "L" | "XL" | "XXL";
  const addProducts: any[] = [];

  const addProduct = (data: {
    title: string,
    createAt: Date,
    stock: number,
    size?: Sizes
  }) => {
    addProducts.push(data);
  }

  addProduct({
    title: "Pro1",
    createAt: new Date(),
    stock: 12
  });
  console.log(addProducts);
  addProduct({
    title: "Pro1",
    createAt: new Date(),
    stock: 12,
    size: "XL"
  });
  console.log(addProducts);
})();
