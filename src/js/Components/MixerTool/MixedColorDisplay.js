import React from "react";
import styles from "./_MixedColorDisplay.scss";

const MixedColorDisplay = ({ mixedColor }) => {
    return (
        <>
            <div className="mixed__color" id="mixed__color" style={{ width: "95%", borderRadius: "20px", padding: "20px", textAlign: "center", marginTop: "30px", backgroundColor: mixedColor }}>
                {mixedColor}</div>
        </>
    )
}

export default MixedColorDisplay;