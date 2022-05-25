import {TOGGLE_SHOW_CART} from "../types/app";

export const toggleShowCart = () => {
  return dispatch => {
    dispatch({
      type: TOGGLE_SHOW_CART,
    });
  };
};
