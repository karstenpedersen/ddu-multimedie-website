import Image from "next/image";
import { FunctionComponent } from "react";
import logo from "../../public/images/logo.svg";

interface Props {
  className: string;
}

const Logo: FunctionComponent<Props> = (props) => {
  const { className } = props;

  return (
    <a href="#home" className={"relative " + className}>
      <Image src={logo} alt="logo" layout="fill" />
    </a>
  );
};

export default Logo;
