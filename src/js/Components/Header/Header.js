import React from "react";
import styles from "./Header.scss";

const Header = (props) => {
    return (
        <header className="header">
            <h1 className="header--title">Color Mixer Tool</h1>
            <img className="header--logo" src="../../../assets/img/logo/logo-color_mixer_tool.png" alt="Color Mixer Tool" />
        </header>
    )
}

export default Header;