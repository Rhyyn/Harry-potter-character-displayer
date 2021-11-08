import React from "react";

function CharacterCard({ data }) {
  data.Items.sort(compare);
  function compare(a, b) {
    return a.id - b.id;
  }

  return (
    <div className="cardBox">
      {data.Items.map((item) => (
        <div className="uniCard" key={item.id}>
          <h2 className="cardCharName">{item.name}</h2>
          <img className="cardCharImage" src={item.image} alt={item.name} />
          <div className="cardDesc">
            <p className="cardCharDateOfBirth">
              Date of Birth: {item.dateOfBirth}
            </p>
            <p className="cardCharAncestry">
              Blood Status: {item.ancestry}
            </p>
            <p className="cardCharHouse">House: {item.house}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CharacterCard;
