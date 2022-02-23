import { FunctionComponent, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const Wrapper: FunctionComponent<Props> = (props) => {
  const { children, className = "" } = props;

  return (
    <div className="h-full w-full bg-inherit">
      <div className={"mx-auto h-full w-[90vw] max-w-[960px] " + className}>
        {children}
      </div>
    </div>
  );
};

export default Wrapper;
