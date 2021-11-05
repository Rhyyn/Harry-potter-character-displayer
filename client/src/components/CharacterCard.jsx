import React from "react";

function CharacterCard(data) {
  data.data[0].sort(compare);
  function compare(a, b) {
    return a.id - b.id;
  }
    // console.log(data.data[0][0]);

  return (
    <div className="cardBox">
      <h1 className="cardCharName">{data.data[0][0].name}</h1>
      <img alt={data.data[0][0].name} src={data.data[0][0].image} />
      <p className="cardCharDesc">Born in: {data.data[0][0].yearOfBirth}</p>
      <p className="cardCharDesc">{data.data[0][0].ancestry}</p>
      <p className="cardCharDesc">{data.data[0][0].house}</p>
      <p className="cardCharDesc">{data.data[0][0].alternate_Names}</p>
    </div>
  );
}

export default CharacterCard;
