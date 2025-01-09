/* eslint-disable react-refresh/only-export-components */
import iffLogo from "../assets/iif-logo.png";
import cartLogo from "../assets/cart.png";
import homeLogo from "../assets/home.png";
import arrowDownLogo from "../assets/arrowdown.png";
import orangeCartLogo from "../assets/orangeCart.png";
import orangeDeleteLogo from "../assets/deleteOrange.png";
import eyeLogo from "../assets/eye.png";
import trashLogo from "../assets/trash.png";
import downloadLogo from "../assets/download.png";

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

export const eyeImage = <img src={eyeLogo} alt="eye" width="40" height="40" />;

export const trashImage = (
  <img src={trashLogo} alt="trash" width="40" height="40" />
);

export const downloadImage = (
  <img src={downloadLogo} alt="download" width="40" height="40" />
);

export const HomeSection = () => {
  return (
    <div className="flex items-center space-x-2 border border-orange-400 p-4 rounded-md">
      <div>{homeImage}</div>
      <div className="text-sm">{"Back To Homepage"}</div>
    </div>
  );
};

export const CartSection = (cartItemCount: number) => {
  return (
    <div className="flex items-center space-x-3">
      <div className="relative">
        <div>{cartImage}</div>
        {cartItemCount > 0 && (
          <div className="absolute top-0 right-0 bg-red-200 text-red-500 text-xs font-bold rounded-full w-3 h-3 flex items-center justify-center">
            {cartItemCount}
          </div>
        )}
      </div>
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

export const SearchIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="11.7666"
        cy="11.7666"
        r="8.98856"
        stroke="#617170"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.0183 18.4851L21.5423 22"
        stroke="#617170"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
