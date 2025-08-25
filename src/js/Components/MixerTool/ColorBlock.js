import React from "react";
import styles from "./ColorBlock.scss";

const ColorBlock = ({ index }) => {
    return (
        <>
            <div className={`color--mixer__color${index} color` }></div>
        </>
    )
}

export default ColorBlock;