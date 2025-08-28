import React from "react";
import styles from "./MixedColorDisplay.scss";

const MixedColorDisplay = ({ mixedColor }) => {
    return (
        <>
            <div className="mixed__color" id="mixed__color" style={{ backgroundColor: mixedColor }}>
                {mixedColor}</div>
        </>
    )
}

export default MixedColorDisplay;