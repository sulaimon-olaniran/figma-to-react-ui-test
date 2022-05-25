import {useSelector} from "react-redux";

import HomepageLeftSection from "./sections/left/Left";
import HomepageMiddleSection from "./sections/middle/Middle";
import HomepageRightSection from "./sections/right/Right";

import {CartSidebarComponent} from "../../components";

const Homepage = () => {
  const showCart = useSelector(state => state.app.show_cart);

  return (
    <div className="homepage-container">
      <HomepageLeftSection />
      <HomepageMiddleSection />
      <HomepageRightSection />
      <div
        className={`homepage-cart-details-sidebar ${
          showCart && "show-cart-details-sidebar"
        }`}
      >
        <CartSidebarComponent />
      </div>
    </div>
  );
};

export default Homepage;
