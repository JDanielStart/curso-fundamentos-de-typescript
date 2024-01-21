export type Sizes = "XS" | "S" | "M" | "L" | "XL" | "XXL";

export type Product = {
  title: string,
  createAt: Date,
  stock: number,
  size?: Sizes
};
