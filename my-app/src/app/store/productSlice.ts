import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IProduct } from "../../entity/model/product";

interface IState {
  product: IProduct[];
  favorites: IProduct[];
  basket: IProduct[];
}

const initialState: IState = {
  product: [],
  favorites: [],
  basket: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    initializeProduct: (state, action: PayloadAction<IProduct[]>) => {
      state.product = action.payload;
    },

    addItemFavorites: (state, action: PayloadAction<IProduct>) => {
      const exists = state.favorites.some(
        (item) => item.id === action.payload.id,
      );

      if (!exists) {
        state.favorites.push(action.payload);
      }
    },
    removeItemFavorites: (state, action: PayloadAction<number>) => {
      state.favorites = state.favorites.filter(
        (item) => item.id !== action.payload,
      );
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
  addItemFavorites,
  removeItemFavorites,
  addItemBasket,
  removeItemBasket,
} = productSlice.actions;

export default productSlice.reducer;
