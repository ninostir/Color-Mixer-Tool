import React, { useRef, useState } from "react";
import styles from "./ColorBlock.scss";

const ColorBlock = ({ index }) => {

    const inputRef = useRef(null);
    const [color, setColor] = useState("#FFFFFF");

    const handleDivClick = () => {
        inputRef.current.click();
    };

    const handleColorChange = (e) => {
        setColor(e.target.value);
    };

    return (
        <>
            <div className={`color--mixer__color${index} color` }style={{
                backgroundColor: color,
            }}
                 onClick={handleDivClick}
            ></div>

            <input
                type="color"
                ref={inputRef}
                value={color}
                onChange={handleColorChange}
                style={{ display: "none" }}
            />

        </>
    )
}

export default ColorBlock;