import React from "react";
import "./style.css";

function Header (props) {
    return(
        <div class="titleWrap">
        <h1 className="title">
        Current Score: {props.yourScore} {" "}
        Top Score: {props.highScore}
        {props.rightWrong}
        </h1>
        </div>
    )
}

export default Header;