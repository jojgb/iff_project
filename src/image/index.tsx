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

export const DropDownIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-gray-500"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.707a1 1 0 011.414 0L10 11.086l3.293-3.379a1 1 0 111.414 1.414l-4 4.086a1 1 0 01-1.414 0l-4-4.086a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
