import React, { useState } from "react";
import styles from "./ColorMixer.scss";
import PickedColor from "./PickedColor";
import MixedColorDisplay from "./MixedColorDisplay";

const ColorMixer = () => {
const numBlocks = 5;
const [colors, setColors] = useState(Array(numBlocks).fill("#FFFFFF"));
const [mixedColor, setMixedColor] = useState("#FFFFFF");

    function hexToRgb(hex) {
        hex = hex.replace("#", "");
        const bigint = parseInt(hex, 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return [r, g, b];
    }

    function mixColors(rgbArray) {
        const total = rgbArray.length;
        let r = 0, g = 0, b = 0;
        rgbArray.forEach(([red, green, blue]) => {
            r += red;
            g += green;
            b += blue;
        });
        r = Math.round(r / total);
        g = Math.round(g / total);
        b = Math.round(b / total);
        return `rgb(${r}, ${g}, ${b})`;
    }

const handleColorChange = (index, color) => {
    const updatedColors = [...colors];
    updatedColors[index] = color;
    setColors(updatedColors);
};

const handleMixColors = () => {
    const rgbColors = colors.map(hexToRgb);
    const mixed = mixColors(rgbColors);
    setMixedColor(mixed);
};

return (
    <section className="color--mixer">
        <PickedColor onColorChange={handleColorChange} />

        <button onClick={handleMixColors}>Mix Colors</button>

        <MixedColorDisplay mixedColor={mixedColor} />
    </section>
);
};

export default ColorMixer;