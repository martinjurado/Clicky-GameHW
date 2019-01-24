import React from "react";
import "./style.css";

function Character (props) {
  // deconstructure
  const {image, name} = props
  return (
    <div className="card">
      <div className="img-container">
        <img alt={name} src={image} />
      </div>
    </div>
  );
}
export default Character;
