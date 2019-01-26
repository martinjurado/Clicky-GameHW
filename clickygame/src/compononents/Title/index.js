import React from "react";


function Title (props) {
  return(
    <div className="titleWrap">
      <h1 className="title">{props.children}</h1>
      
    </div>
  ) 
}

export default Title;