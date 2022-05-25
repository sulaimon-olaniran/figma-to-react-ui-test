import {Button, IconButton} from "@mui/material";
import {
  AppLogo,
  UserIcon,
  LogoutIcon,
  HistoryIcon,
  ShoppingBasketIcon,
} from "../../../../assets/icons";

const HomepageLeftSection = () => {
  return (
    <div className="homepage-left-section-container">
      <div className="app-logo-section">
        <AppLogo />
      </div>

      <div className="homepage-left-section-user-account">
        <div className="profile-section">
          <UserIcon />
          <span>Profile</span>
        </div>
        <div className="baskets-section">
          <Button variant="contained">
            <ShoppingBasketIcon />
            Baskets
          </Button>
        </div>
        <div className="order-history-section">
          <HistoryIcon />
          <span>Order History</span>
        </div>
      </div>

      <div className="homepage-left-section-logout-section">
        <div className="user-name-initials-container">
          <p>LE</p>
        </div>

        <div className="user-name-container">
          <p>Laura Edson</p>
        </div>

        <div className="user-email-container">
          <p>lauraedson@work.com</p>
        </div>

        <IconButton>
          <LogoutIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default HomepageLeftSection;
