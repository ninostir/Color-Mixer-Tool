import React from "react";
import styles from "./ColorMixer.scss";
import PickedColor from "./PickedColor";


const ColorMixer = (props) => {
    return (
        <>
        <section className="color--mixer">
            <PickedColor></PickedColor>
        </section>
            </>
    )
}

export default ColorMixer;