import React, { RefObject } from "react";

import "./ArrowButton.scss";

interface Props {
  text: string;
  div: RefObject<HTMLDivElement>;
  offset: number;
}

export const ArrowButton: React.FC<Props> = ({ div, text, offset }) => {
  const handleClick = () => {
    console.log("we scrolling");
    console.log(div);
    div!.current!.scrollLeft += offset;
  };

  return (
    <button tabIndex={0} onClick={() => handleClick()} className="arrow-button">
      {text}
    </button>
  );
};
