import { FunctionComponent, ReactNode } from "react";

interface NavItemProps {
  child?: ReactNode;
  href?: string;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const NavItem: FunctionComponent<NavItemProps> = ({
  child,
  href,
  className,
  onClick,
}) => {
  return (
    <li>
      <a
        href={href}
        className={className ? className : "text-black"}
        onClick={onClick}
      >
        {child}
      </a>
    </li>
  );
};

export default NavItem;
