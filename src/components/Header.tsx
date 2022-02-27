import { FunctionComponent, useState } from "react";
import Wrapper from "./layouts/Wrapper";
import Navigation from "./Navigation";
import * as FaIcons from "react-icons/fa";
import Logo from "./Logo";
import useScroll from "hooks/useScroll";

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [showMobile, setShowMobile] = useState(false);

  function handleMobile() {
    setShowMobile(!showMobile);
  }

  useScroll((callbackData: any) => {
    const { scroll, lastScroll } = callbackData;

    setShowHeader(lastScroll >= scroll);
  });

  return (
    <div>
      <header
        className={
          showHeader
            ? "fixed top-0 left-0 z-50 h-[90px] w-full bg-white shadow-lg transition-all duration-300"
            : "fixed top-[-90px] left-0 z-50 h-[90px] w-full bg-white shadow-lg transition-all duration-300"
        }
      >
        <Wrapper>
          <div className="flex h-full items-center justify-between">
            <Logo className="h-full w-52" />
            <Navigation listClassName="hidden sm:flex gap-8 items-center" />

            <FaIcons.FaBars
              className="text-3xl text-dark sm:hidden"
              role="button"
              onClick={() => {
                handleMobile();
              }}
            />
          </div>
        </Wrapper>
      </header>

      <>
        <div
          className={
            showMobile
              ? "fixed top-0 left-0 z-50 h-full w-full bg-black opacity-80 transition-all duration-300"
              : "fixed top-0 left-0 z-50 opacity-0 duration-300"
          }
          role="button"
          onClick={() => {
            handleMobile();
          }}
        ></div>
        <div
          className={
            showMobile
              ? "opacity-200 fixed top-0 right-0 z-50 h-full w-4/5 bg-body shadow-lg transition-all duration-300"
              : "opacity-200 fixed right-[-100vw] top-0 z-50 h-full w-4/5 bg-body shadow-lg transition-all duration-300"
          }
        >
          <div className="flex h-[90px] items-center justify-between">
            <p></p>
            <FaIcons.FaTimes
              className="float-right mr-4 text-3xl text-dark"
              role="button"
              onClick={() => {
                handleMobile();
              }}
            />
          </div>

          <Navigation
            className="h-full"
            listClassName="h-[30%] flex flex-col justify-around text-center font-bold"
            closeMenu={() => {
              setShowMobile(false);
            }}
          />
        </div>
      </>
    </div>
  );
};

export default Header;
