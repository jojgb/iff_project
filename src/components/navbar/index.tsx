import { FunctionComponent } from "react";
import NavItem from "./navitem";
import { CartSection, HomeSection, iffImage } from "../../image";
import styles from "../../App.module.scss";
interface NavbarProps {
  className?: string;
  fontColor?: string;
}

const Navbar: FunctionComponent<NavbarProps> = ({ className, fontColor }) => {
  return (
    <nav
      className={`${styles.container}fixed top-0 left-0 w-full z-50 mt-4`.concat(
        className ? " " + className : ""
      )}
    >
      <ul className="flex justify-between items-center border-b border-gray-300 pb-4">
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
