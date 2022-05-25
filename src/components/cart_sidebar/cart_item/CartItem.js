import {useDispatch} from "react-redux";

import {CoconutIcon, ArrowDownIcon} from "../../../assets/icons";
import {updateCartItem} from "../../../store/actions/cart";

const CartItem = ({item}) => {
  const dispatch = useDispatch();

  const handleSelectChange = event => {
    const newCartItem = {...item, weight: event.target.value};

    dispatch(updateCartItem(newCartItem));
  };

  return (
    <div key={item.id} className="cart-sidebar-cart-item-container">
      <div className="item-information-container">
        <div className="item-icon-container">
          <CoconutIcon />
        </div>

        <div className="item-name-price-container">
          <p>{item.name}</p>
          <span>${item.price * item.weight}</span>
        </div>
      </div>

      <div className="item-weight-container">
        <select
          name="weight"
          id="weight"
          value={item.weight}
          onChange={handleSelectChange}
        >
          <option value={1}>1 kg</option>
          <option value={2}>2 kg</option>
          <option value={3}>3 kg</option>
          <option value={4}>4 kg</option>
        </select>

        <ArrowDownIcon />
      </div>

      <div className="item-tags-container">
        {item.tags.map((tag, i) => {
          return (
            <div
              key={i}
              style={{backgroundColor: `${tag.color}`}}
              className="each-tag-container"
            >
              <span>{tag.letter}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CartItem;
