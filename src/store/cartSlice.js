import { createSlice } from "@reduxjs/toolkit";

const loadCart = () => {
  try {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

const saveCart = (items) => {
  try {
    localStorage.setItem("cart", JSON.stringify(items));
  } catch {
    // ignore storage errors (e.g. private browsing quota)
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: loadCart() },
  reducers: {
    addToCart: (state, action) => {
      const { _id, name, price, unit, thumbnail } = action.payload;
      const existing = state.items.find((item) => item.productId === _id);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({
          productId: _id,
          name,
          price,
          unit,
          thumbnail,
          quantity: 1,
        });
      }
      saveCart(state.items);
    },
    increaseQuantity: (state, action) => {
      const item = state.items.find((i) => i.productId === action.payload);
      if (item) item.quantity += 1;
      saveCart(state.items);
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find((i) => i.productId === action.payload);
      if (item) {
        item.quantity -= 1;
        if (item.quantity <= 0) {
          state.items = state.items.filter((i) => i.productId !== action.payload);
        }
      }
      saveCart(state.items);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((i) => i.productId !== action.payload);
      saveCart(state.items);
    },
    clearCart: (state) => {
      state.items = [];
      saveCart(state.items);
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;