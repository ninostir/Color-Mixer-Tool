import React from "react";
import styles from "../../styles/main.scss";
import ColorMixer from "./MixerTool/ColorMixer";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import MixedColorDisplay from "./MixerTool/MixedColorDisplay";

const App = () => {

    return (
        <>
            <Header></Header>

            <ColorMixer></ColorMixer>

            <MixedColorDisplay></MixedColorDisplay>

            <Footer></Footer>
        </>
    )
}

export default App;