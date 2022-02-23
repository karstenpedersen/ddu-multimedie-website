import Wrapper from "./layouts/Wrapper";
import Logo from "./Logo";
import * as FaIcons from "react-icons/fa";
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="bg-dark text-body">
      <div className="bg-secondary py-8">
        <Wrapper className="flex flex-col justify-between text-center md:text-left lg:flex-row">
          <Logo className="h-30 w-52" />

          <ul className="flex flex-col justify-between gap-8 text-lg md:flex-row">
            <li>
              <h3 className="title-bold">Fredericia</h3>
              <p>Købmagergade 86</p>
              <p>7000 Fredericia</p>
            </li>
            <li>
              <h3 className="title-bold">Esbjerg</h3>
              <p>Niels Bohrs Vej 3</p>
              <p>6700 Esbjerg</p>
            </li>
            <li>
              <h3 className="title-bold">Sønderborg</h3>
              <p>Alsion 2</p>
              <p>6400 Sønderborg</p>
            </li>
            <li>
              <p>
                Tlf:{" "}
                <a className="link" href="#">
                  75 92 28 33
                </a>
              </p>
              <p>
                Efterudd:{" "}
                <a className="link" href="#">
                  76 20 65 46
                </a>
              </p>
              <p>
                Mail:{" "}
                <a className="link" href="#">
                  fms@fms.dk
                </a>
              </p>
            </li>
          </ul>
        </Wrapper>
      </div>

      <Wrapper className="flex items-center justify-between py-5 text-xl">
        <p className="text-inherit">EAN: 5798000023154 // CVR: 13002738</p>
        <Socials
          className="flex items-center justify-between gap-3 text-2xl"
          itemClassName="hover:text-primary transition-colors"
        />
      </Wrapper>
    </footer>
  );
};

export default Footer;
