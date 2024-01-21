(() => {
  type Sizes = "XS" | "S" | "M" | "L" | "XL" | "XXL";
  type Product = {
    title: string,
    createAt: Date,
    stock: number,
    size?: Sizes
  };


  const addProducts: Product[] = [];

  const addProduct = (data: Product) => {
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
