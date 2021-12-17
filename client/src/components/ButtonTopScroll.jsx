import React from "react";
import { BsFillArrowUpSquareFill } from "react-icons/bs";

const ButtonTopScroll = (props) => {
    // console.log(props.id);
  return (
      <BsFillArrowUpSquareFill className={props.className} id={props.id} color="#6e091f" size="4rem" />
  );
};

export default ButtonTopScroll;
