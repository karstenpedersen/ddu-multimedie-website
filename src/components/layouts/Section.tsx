import Footer from "components/Footer";
import Header from "components/Header";
import Head from "next/head";
import { FunctionComponent, ReactNode } from "react";
import Wrapper from "./Wrapper";

interface Props {
  children: ReactNode;
  sectionId: string;
  className?: string;
}

const Section: FunctionComponent<Props> = (props) => {
  const { children, sectionId, className = "" } = props;

  return (
    <section id={sectionId} className={"min-h-screen pt-[120px] " + className}>
      <Wrapper>{children}</Wrapper>
    </section>
  );
};

export default Section;
