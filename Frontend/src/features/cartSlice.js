
import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const initialState = {
  cart: [],
  totalQuantity: 0,
  totalPrice: 0,
  status: 'idle',
  error: null
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const existingItem = state.cart.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...item, quantity: 1 });
      }

      // Update totals
      state.totalQuantity = state.cart.reduce((total, item) => total + item.quantity, 0);
      state.totalPrice = state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeItem(state, action) {
      const id = action.payload;
      state.cart = state.cart.filter((item) => item.id !== id);
      toast.success("Item removed from cart");
    
      // Update totals
      state.totalQuantity = state.cart.reduce((total, item) => total + item.quantity, 0);
      state.totalPrice = state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    
      // Update localStorage immediately
      localStorage.setItem("cart", JSON.stringify(state.cart));
    }
    ,
    decreaseItemQuantity(state, action) {
      const id = action.payload;
      const item = state.cart.find((item) => item.id === id);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.cart = state.cart.filter((item) => item.id !== id);
      }

      // Update totals
      state.totalQuantity = state.cart.reduce((total, item) => total + item.quantity, 0);
      state.totalPrice = state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
      localStorage.setItem("cart", JSON.stringify(state.cart));
      
    },
    increaseItemQuantity(state, action) {
      const id = action.payload;
      const item = state.cart.find((item) => item.id === id);

      if (item) {
        item.quantity += 1;
      }

      // Update totals
      state.totalQuantity = state.cart.reduce((total, item) => total + item.quantity, 0);
      state.totalPrice = state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
      localStorage.setItem("cart", JSON.stringify(state.cart));
      
    },
    getCartTotal(state) {
      // This might be redundant if totals are updated in the above reducers
      state.totalQuantity = state.cart.reduce((total, item) => total + item.quantity, 0);
      state.totalPrice = state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    },
    setCartFromLocalStorage(state, action) {
      state.cart = action.payload;

      // Update totals based on the cart loaded from localStorage
      state.totalQuantity = state.cart.reduce((total, item) => total + item.quantity, 0);
      state.totalPrice = state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    }
  }
});

export const {
  addToCart,
  removeItem,
  decreaseItemQuantity,
  increaseItemQuantity,
  getCartTotal,
  setCartFromLocalStorage
} = cartSlice.actions;

export default cartSlice.reducer;


