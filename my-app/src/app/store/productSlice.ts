import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IProduct } from "../../entity/model/product";

interface IState {
  product: IProduct[];
  basket: IProduct[];
}

const initialState: IState = {
  product: [],
  basket: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    initializeProduct: (state, action: PayloadAction<IProduct[]>) => {
      state.product = action.payload;
    },

    toggleItemFavorite: (state, action: PayloadAction<number>) => {
      const product = state.product.find((item) => item.id === action.payload);
      if (product) {
        product.isFavorite = !product.isFavorite;
      }
    },

    addItemBasket: (state, action: PayloadAction<IProduct>) => {
      const exists = state.basket.some((item) => item.id === action.payload.id);

      if (!exists) {
        state.basket.push(action.payload);
      }
    },
    removeItemBasket: (state, action: PayloadAction<number>) => {
      state.basket = state.basket.filter((item) => item.id !== action.payload);
    },
    dropBasket: (state) => {
      state.basket = [];
    },
  },
});

export const {
  initializeProduct,
  toggleItemFavorite,
  addItemBasket,
  removeItemBasket,
} = productSlice.actions;

export default productSlice.reducer;
