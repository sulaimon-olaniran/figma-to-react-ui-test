import {TOGGLE_SHOW_CART} from "../types/app";

const initState = {
  show_cart: false,
};

const appReducer = (state = initState, action) => {
  switch (action.type) {
    case TOGGLE_SHOW_CART:
      return {
        ...state,
        show_cart: !state.show_cart,
      };

    default:
      return state;
  }
};

export default appReducer;
