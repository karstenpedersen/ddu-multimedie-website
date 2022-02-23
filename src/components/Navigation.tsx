import { FunctionComponent, useState } from "react";
import * as FaIcons from "react-icons/fa";

interface Props {
  className?: string;
  listClassName?: string;
  closeMenu?: () => void;
}

const Navigation: FunctionComponent<Props> = (props) => {
  const { className, listClassName, closeMenu = () => {} } = props;

  return (
    <nav className={className}>
      <ul className={listClassName}>
        <NavItem
          title="Værkstedsforløbet"
          sectionId="#home"
          closeMenu={closeMenu}
        />
        <NavItem
          title="Om forløbet"
          sectionId="#værkstedsforløb"
          closeMenu={closeMenu}
        />
        <NavItem title="Link 3" sectionId="#" closeMenu={closeMenu} />
      </ul>
    </nav>
  );
};

interface ItemProps {
  title: string;
  sectionId: string;
  closeMenu?: () => void;
}

const NavItem: FunctionComponent<ItemProps> = (props) => {
  const { title, sectionId, closeMenu = () => {} } = props;

  return (
    <li className="">
      <a
        href={sectionId}
        onClick={() => {
          closeMenu();
        }}
        className="text-lg"
      >
        {title}
      </a>
    </li>
  );
};

export default Navigation;