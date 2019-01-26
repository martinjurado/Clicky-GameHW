import React from "react";
import "./style.css";

function Character (props) {
  
  const {image, name, id, clickDiv} = props
  return (
    <div 
    className="card"
    onClick={() => clickDiv(id)}
    >
      <div className="img-container">
        <img alt={name} src={image} id={id}

        />
      </div>
    </div>
  );
}
export default Character;
