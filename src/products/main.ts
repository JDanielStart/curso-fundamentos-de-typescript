import { addProduct, calcStock, products} from "./product.service";

addProduct({
  title: "Pro1",
  createAt: new Date(),
  stock: 12
});
addProduct({
  title: "Pro1",
  createAt: new Date(),
  stock: 12,
  size: "XL"
});

console.log(products);
console.log(calcStock());
