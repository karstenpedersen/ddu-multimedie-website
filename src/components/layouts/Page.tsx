import Footer from "components/Footer";
import Header from "components/Header";
import Head from "next/head";
import { FunctionComponent, ReactNode } from "react";

interface Props {
  children: ReactNode;
  title?: string;
}

const Page: FunctionComponent<Props> = (props) => {
  const { children, title = "TITLE" } = props;

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Page;
