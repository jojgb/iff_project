import { FunctionComponent } from "react";
import NavItem from "./navitem";
import { cartImage, homeImage, iffImage } from "../../image";

interface NavbarProps {
  className?: string;
  fontColor?: string;
}

const Navbar: FunctionComponent<NavbarProps> = ({ className, fontColor }) => {
  const HomeSection = () => {
    return (
      <div className="flex items-center space-x-4">
        <div> {homeImage}</div>
        <div> {"Back To Homepage"}</div>
      </div>
    );
  };
  const CartSection = () => {
    return (
      <div className="flex items-center space-x-4">
        <div> {cartImage}</div>
        <div> {"Name"}</div>
      </div>
    );
  };
  return (
    <nav
      className={"p-4 fixed top-0 left-0 w-full z-50".concat(
        className ? " " + className : ""
      )}
    >
      <ul className="flex justify-between items-center w-full">
        <NavItem child={iffImage} href="/" className={fontColor} />

        <div className="flex items-center space-x-4">
          <NavItem child={<HomeSection />} href="/" className={fontColor} />
          <NavItem child={<CartSection />} href="/" className={fontColor} />
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
