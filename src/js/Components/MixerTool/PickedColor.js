import React from "react";
import ColorBlock from "./ColorBlock"
import styles from "./_PickedColor.scss";

const PickedColor = ({ onColorChange }) => {
    return (
        <>
            {[1, 2, 3, 4, 5].map((num) => (
                <ColorBlock key={num} index={num} onColorChange={onColorChange} />
            ))}
        </>
    )
}

export default PickedColor;