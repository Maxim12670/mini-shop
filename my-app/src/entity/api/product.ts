import axios from "axios";
import type { IProduct } from "../model/product";

export const getProducts = async () => {
  const response = await axios.get("https://fakestoreapi.com/products", {
    params: { limit: 8 },
  });

  return response.data.map((product: IProduct) => ({
    ...product,
    isFavorite: false,
  })) as IProduct[];
};
