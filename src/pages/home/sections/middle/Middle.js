import {useState} from "react";
import {useDispatch} from "react-redux";
import {Button} from "@mui/material";
import {
  SearchIcon,
  TruckIcon,
  CreditCardIcon,
  GiftIcon,
  ShopIcon,
} from "../../../../assets/icons";
import {CartButtonComponent} from "../../../../components";
import {toggleShowCart} from "../../../../store/actions/app";

const basketsInfo = [
  {
    title: "Total Basket",
    icon: <ShopIcon width={28} height={26} fill="#DA8539" />,
    value: "0",
    backgroundColor: "#DA853933",
  },

  {
    title: "In-Transit Jobs",
    icon: <TruckIcon />,
    value: "0",
    backgroundColor: "#5E7ED233",
  },

  {
    title: "Total Paid",
    icon: <CreditCardIcon />,
    value: "$0.00",
    backgroundColor: "#56B1A033",
  },

  {
    title: "Completed Jobs",
    icon: <GiftIcon />,
    value: "0",
    backgroundColor: "#868DB533",
  },
];

const HomepageMiddleSection = () => {
  const [transform, setTransform] = useState(0);
  const [activeOption, setActiveOption] = useState("paid");

  const dispatch = useDispatch();

  const handleToggleActiveOption = (option, transform) => {
    setActiveOption(option);
    setTransform(transform);
  };

  const handleToggleShowCart = () => {
    dispatch(toggleShowCart());
  };

  return (
    <div className="homepage-middle-section-container">
      <div className="homepage-middle-section-header-container">
        <div className="header-container-welcome-text">
          <span>Good Evening, Laura!</span>
        </div>

        <div className="header-container-search">
          <div className="search-input-container">
            <SearchIcon />
            <input type="text" placeholder="Search Basket" />
          </div>
        </div>
      </div>

      <div className="user-baskets-information-container">
        {basketsInfo.map((info, index) => {
          return (
            <div key={index} className="each-user-basket-info">
              <div
                className="basket-info-icon-container"
                style={{backgroundColor: info.backgroundColor}}
              >
                {info.icon}
              </div>
              <div className="basket-info-details-container">
                <p>{info.title}</p>
                <span>{info.value}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="homepage-middle-section-create-basket-section">
        <div className="create-basket-section-title">
          <span>Baskets</span>
        </div>

        <div className="create-basket-section-button">
          <Button variant="contained">
            <p>Create Basket</p>
          </Button>
        </div>
      </div>

      <div className="paid-pending-completed-baskets-container">
        <div className="paid-pending-completed-baskets-header">
          <div className="header-buttons-border-container ">
            <div
              className="is-current-button-option"
              style={{transform: `translateX(${transform})`}}
            />
          </div>

          <div className="header-buttons-container">
            <div
              className={`each-header-button ${
                activeOption === "paid" && "button-is-active"
              } `}
            >
              <Button onClick={() => handleToggleActiveOption("paid", "0%")}>
                Paid
              </Button>
            </div>

            <div
              className={`each-header-button ${
                activeOption === "pending" && "button-is-active"
              }`}
            >
              <Button
                onClick={() => handleToggleActiveOption("pending", "100%")}
              >
                Pending
              </Button>
            </div>

            <div
              className={`each-header-button ${
                activeOption === "completed" && "button-is-active"
              }`}
            >
              <Button
                onClick={() => handleToggleActiveOption("completed", "200%")}
              >
                Completed
              </Button>
            </div>
          </div>
        </div>

        <div className="paid-pending-completed-baskets-body">
          <div className="baskets-body-contents-container">
            <div className="shop-icon-container">
              <ShopIcon />
            </div>
            <p>
              No <span>{activeOption}</span> Baskets, yet!
            </p>
          </div>
        </div>
      </div>

      <div className="show-cart-toggle-button-container">
        <CartButtonComponent buttonAction={handleToggleShowCart} />
      </div>
    </div>
  );
};

export default HomepageMiddleSection;
