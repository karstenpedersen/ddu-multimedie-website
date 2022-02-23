import { FunctionComponent } from "react";
import * as FaIcons from "react-icons/fa";

interface Props {
  className?: string;
  itemClassName?: string;
}

const Socials: FunctionComponent<Props> = (props) => {
  const { className = "", itemClassName = "" } = props;

  return (
    <ul className={className}>
      <li>
        <a href="#" className={itemClassName}>
          <FaIcons.FaEnvelope />
        </a>
      </li>
      <li>
        <a href="#" className={itemClassName}>
          <FaIcons.FaInstagram />
        </a>
      </li>
      <li>
        <a href="#" className={itemClassName}>
          <FaIcons.FaFacebookF />
        </a>
      </li>
      <li>
        <a href="#" className={itemClassName}>
          <FaIcons.FaLinkedinIn />
        </a>
      </li>
      <li>
        <a href="#" className={itemClassName}>
          <FaIcons.FaYoutube />
        </a>
      </li>
    </ul>
  );
};

export default Socials;
