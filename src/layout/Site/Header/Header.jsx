import React from "react";
import Styles from "./Header.module.css";
import Darkmode from "darkmode-js";

const Header = () => {
  return (
    <div className={Styles.app__header__section}>
      <div className={`${Styles.app__header} container`}>
        <h1>Where in the world ?</h1>
        <div>
          <p
            className={Styles.app__header__darkmode}
            onClick={() => new Darkmode().showWidget}
          >
            Dark Mode
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
