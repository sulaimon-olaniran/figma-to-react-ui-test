import {UPDATE_CART_ITEM} from "../types/cart";

import cartItems from "../../assets/json/cartItems.json";

const initState = {
  cart_items: cartItems,
};

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_CART_ITEM:
      return {
        ...state,
        cart_items: state.cart_items.map(item =>
          item.id === action.payload.id ? {item, ...action.payload} : item
        ),
      };

    default:
      return state;
  }
};

export default cartReducer;
