import React, { Fragment } from "react";
import "../menu/Menu.css";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <Fragment>
      <div className="menuContainer">
        <Link className="menuLink" to="/">
          Inicio
        </Link>
        <Link className="menuLink" to="/AboutMe">
          Sobre mim
        </Link>
        <a className="menuLink" href="mailto:ladeiraoctavio@gmail.com">
          Contato
        </a>
      </div>
    </Fragment>
  );
}

export default Menu;
