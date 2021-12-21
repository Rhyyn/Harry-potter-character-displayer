import React from "react";
import { BsFillArrowUpSquareFill } from "react-icons/bs";

const ButtonTopScroll = (props) => {
    // console.log(props.id);
  return (
      <BsFillArrowUpSquareFill  id={props.id}  size="4rem" title="Scroll back to the top!"/>
  );
};

export default ButtonTopScroll;
