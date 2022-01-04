import { RefObject } from "react";

import "./ArrowButton.scss";

interface Props {
  text: string;
  productsContainerRef: RefObject<HTMLDivElement>;
  offset: number;
}

export const ArrowButton: React.FC<Props> = ({
  productsContainerRef,
  text,
  offset,
}) => {
  const handleClick = () => {
    // can I use ! in this case?
    productsContainerRef!.current!.scrollLeft += offset;
  };

  return (
    <button onClick={() => handleClick()} className="arrow-button">
      {text}
    </button>
  );
};
