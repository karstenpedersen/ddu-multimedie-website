import { FunctionComponent } from "react";
import * as FaIcons from "react-icons/fa";

interface Props {
  text: string;
  path: string;
  linkType?: string;
}

const PopOutLink: FunctionComponent<Props> = (props) => {
  const { text, path, linkType = "id" } = props;

  return (
    <>
      {linkType === "id" ? (
        <a
          href={path}
          className="group hover:text-dark flex w-fit items-center gap-2 rounded bg-transparent py-4 font-bold text-primary shadow-none transition-all hover:bg-secondary hover:px-10 hover:shadow-lg"
        >
          <p className="text-inherit">{text}</p>
          <FaIcons.FaArrowRight className="" />
        </a>
      ) : (
        <a
          href={path}
          target="_blank"
          rel="noreferrer"
          className="group hover:text-dark flex w-fit items-center gap-2 rounded bg-transparent py-4 font-bold text-primary shadow-none transition-all hover:bg-secondary hover:px-10 hover:shadow-lg"
        >
          <p className="text-inherit">{text}</p>
          <FaIcons.FaArrowRight className="" />
        </a>
      )}
    </>
  );
};

export default PopOutLink;
