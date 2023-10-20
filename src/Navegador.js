import React from "react";
import ButtonLink from "./ButtonLink";

function Navegador() {
return (
  <nav className="navegador">
    <ButtonLink className="botHome" to="/" text="Home" />
    <ButtonLink className="botAdmin" to="/Admin" text="Admin" />
    <ButtonLink className="botNP" to="/NewPost" text="¡NewPost!" />
 </nav>
);
}
export default Navegador; 