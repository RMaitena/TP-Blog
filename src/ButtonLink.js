import React from "react";
import { Link } from "react-router-dom";

export default function ButtonLink(props){
    return(
        <Link to={props.to}>
            <button>{props.text}</button>
        </Link>
    );
}