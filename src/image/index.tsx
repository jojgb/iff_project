/* eslint-disable react-refresh/only-export-components */
import iffLogo from "../assets/iif-logo.png";
import cartLogo from "../assets/cart.png";
import homeLogo from "../assets/home.png";
import arrowDownLogo from "../assets/arrowdown.png";
import orangeCartLogo from "../assets/orangeCart.png";
import orangeDeleteLogo from "../assets/deleteOrange.png";

export const iffImage = <img src={iffLogo} alt="IIF Logo" />;

export const cartImage = <img src={cartLogo} alt="cart Logo" />;

export const homeImage = <img src={homeLogo} alt="home Logo" />;

export const arrowDownImage = <img src={arrowDownLogo} alt="arrow down Logo" />;

export const orangeCartImage = (
  <img src={orangeCartLogo} alt="Shopping Cart" width="40" height="40" />
);

export const orangeDeleteImage = (
  <img src={orangeDeleteLogo} alt="Delete" width="40" height="40" />
);

export const HomeSection = () => {
  return (
    <div className="flex items-center space-x-2 border border-orange-400 p-4 rounded-md">
      <div>{homeImage}</div>
      <div className="text-sm">{"Back To Homepage"}</div>
    </div>
  );
};

export const CartSection = () => {
  return (
    <div className="flex items-center space-x-3">
      <div>{cartImage}</div>
      <div>Nisya Indah Putri</div>
      <div>{arrowDownImage}</div>
    </div>
  );
};
