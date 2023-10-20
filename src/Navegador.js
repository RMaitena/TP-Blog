import React from "react";
import ButtonLink from "./ButtonLink";

function Navegador() {
return (
  <nav className="navegador">
    <ul>
    <li><ButtonLink to="/" text="Home" /></li>
    <li><ButtonLink to="/Admin" text="Admin" /></li>
    <li><ButtonLink to="/NewPost" text="¡NewPost!" /></li>
    </ul>
 </nav>
);
}
export default Navegador; 