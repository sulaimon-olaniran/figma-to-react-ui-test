import {useEffect, useState} from "react";
import {Button, IconButton} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";

import CartButtonComponent from "../cart_button/CartButton";
import {GoBackIcon} from "../../assets/icons";

import {toggleShowCart} from "../../store/actions/app";
import CartItem from "./cart_item/CartItem";

const CartSidebarComponent = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const cartItems = useSelector(state => state.cart.cart_items);

  const dispatch = useDispatch();

  const handleCloseCartSidebar = () => {
    dispatch(toggleShowCart());
  };

  useEffect(() => {
    setTotalAmount(0);
    cartItems.map(item => {
      return setTotalAmount(prev => prev + item.price * item.weight);
    });
  }, [cartItems]);

  const addCommaToNumber = number => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="cart-sidebar-component-container">
      <div className="cart-sidebar-component-header-container">
        <div className="header-left-side-contents">
          <IconButton onClick={handleCloseCartSidebar}>
            <GoBackIcon />
          </IconButton>
          <p>My Cart</p>
        </div>

        <div className="cart-sidebar-component-cart-button">
          <CartButtonComponent />
        </div>
      </div>

      <div className="cart-sidebar-compoent-body-container">
        {cartItems.map(item => {
          return <CartItem key={item.id} item={item} />;
        })}
      </div>

      <div className="cart-sidebar-component-footer-container">
        <div className="cart-total-price-container">
          <p>Total</p>
          <span>${addCommaToNumber(totalAmount)}</span>
        </div>

        <div className="cart-sidebar-component-footer-button-container">
          <Button variant="contained" onClick={handleCloseCartSidebar}>
            <p>Done Shopping</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartSidebarComponent;
