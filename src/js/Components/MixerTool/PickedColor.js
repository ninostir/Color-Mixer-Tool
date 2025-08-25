import React from "react";
import ColorBlock from "./ColorBlock"
import styles from "./PickedColor.scss";

const PickedColor = (props) => {
    return (
        <>
            {[1, 2, 3, 4, 5].map((num) => (
                <ColorBlock key={num} index={num} />
            ))}
        </>
    )
}

export default PickedColor;