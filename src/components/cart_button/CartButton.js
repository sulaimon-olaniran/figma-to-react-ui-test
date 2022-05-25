import {IconButton} from "@mui/material";
import Badge from "@mui/material/Badge";
import {styled} from "@mui/material/styles";

import {ShoppingBasketIcon} from "../../assets/icons/index";

const StyledBadge = styled(Badge)(({theme}) => ({
  "& .MuiBadge-badge": {
    right: 14,
    top: 9,
    //border: `2px solid ${theme.palette.background.paper}`,
    height: "17px",
    width: "17px",
    backgroundColor: "#fff",
    padding: "0 4px",
    color: "#000000",
    fontWeight: 700,
    fontSize: "11px",
    lineHeight: "16.5px",
  },
}));

const CartButtonComponent = ({buttonAction}) => {
  return (
    <div className="cart-button-component-container">
      <StyledBadge badgeContent={4} color="primary">
        <IconButton onClick={buttonAction}>
          <ShoppingBasketIcon width="32px" height="30px" />
        </IconButton>
      </StyledBadge>
    </div>
  );
};

export default CartButtonComponent;
