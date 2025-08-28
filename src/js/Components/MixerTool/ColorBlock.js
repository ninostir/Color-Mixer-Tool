import React, { useRef, useState, useEffect } from "react";
import styles from "./ColorBlock.scss";

const ColorBlock = ({ index, onColorChange }) => {
    const inputRef = useRef(null);
    const [color, setColor] = useState("#FFFFFF");

    const handleDivClick = () => {
        inputRef.current.click();
    };

    const handleColorChange = (e) => {
        const newColor = e.target.value;
        setColor(newColor);
        if (onColorChange) onColorChange(index, newColor);
    };

    // Po potrebi lahko tudi inicialno posreduješ začetno barvo staršu:
    useEffect(() => {
        if (onColorChange) onColorChange(index, color);
    }, []);

    return (
        <>
            <div
                className={`color--mixer__color${index} color`}
                style={{ backgroundColor: color }}
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
    );
};

export default ColorBlock;