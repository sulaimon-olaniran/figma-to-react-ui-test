import {UPDATE_CART_ITEM} from "../types/cart";

export const updateCartItem = update => {
  return dispatch => {
    dispatch({
      type: UPDATE_CART_ITEM,
      payload: update,
    });
  };
};
