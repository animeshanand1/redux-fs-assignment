import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
  cartItem: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setDataProduct: (state, action) => {
      // console.log(action);
      state.productList = [...action.payload];
    },
    addtoCart: (state, action) => {
      console.log(action);
      const total = action.payload.price;
      state.cartItem = [
        ...state.cartItem,
        { ...action.payload, qty: 1, total: total },
      ];
    },
    deletefromCart: (state, action) => {
      const index = state.cartItem.findIndex((el) => el.id === action.payload);
      state.cartItem.splice(index, 1);
      console.log(index);
    },
    increaseQty: (state, action) => {
      const { id } = action.payload;
      const item = state.cartItem.find((item) => item.id === id);
      if (item) {
        item.qty++;
        item.total = item.price * item.qty;
      }
    },
    decreaseQty: (state, action) => {
      const { id } = action.payload;
      const item = state.cartItem.find((item) => item.id === id);
      if (item) {
        if (item.qty > 1) {
          item.qty--;
          item.total = item.price * item.qty;
        } else {
          // If qty is already 1, remove the item from the cart
          state.cartItem = state.cartItem.filter((item) => item.id !== id);
        }
      }
    },
  },
});
export const {
  setDataProduct,
  addtoCart,
  deletefromCart,
  increaseQty,
  decreaseQty,
} = productSlice.actions;
export default productSlice.reducer;
