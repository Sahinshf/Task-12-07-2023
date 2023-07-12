import React from "react";
import Styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={Styles.app__header__section}>
      <div className={`${Styles.app__header} container`}>
        <h1>Where in the world ?</h1>
        <div>
          <p className={Styles.app__header__darkmode}>Dark Mode</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
