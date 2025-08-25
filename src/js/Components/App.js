import React from "react";
import styles from "../../styles/main.scss";
import ColorMixer from "./MixerTool/ColorMixer";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const App = () => {
    return (
        <>
            <Header></Header>

            <ColorMixer></ColorMixer>

            <Footer></Footer>
        </>
    )
}

export default App;