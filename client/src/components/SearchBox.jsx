import React from "react";

const SearchBox = (props) => {
  return (
    <div className="search-box">
      <input
        className="search-bar"
        placeholder="Search.."
        type="text"
        spellCheck="false"
        onChange={props.handleChange}
      ></input>
    </div>
  );
};

export default SearchBox;
