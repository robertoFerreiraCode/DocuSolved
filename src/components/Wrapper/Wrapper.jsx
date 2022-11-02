import styles from "./Wrapper.module.scss";
import Footer from "../Footer/Footer";
import InputContainer from "../../containers/InputContainer/InputContainer";
import OutputContainer from "../../containers/OutputContainer";
import logo from "../../Assets/img/accenture.png";
import logo1 from "../../Assets/img/logowhite.png";
import { useEffect, useState } from "react";

export const Wrapper = () => {
    let [text, setText] = useState("");
    useEffect(() => {
        // console.log("This is the value of text: ", text);
    }, [text]);
    return (
        <div>
            {/* This component manages rendering  */}
            <header className={styles.header}>
                <img src={logo1} alt="logo1" className={styles.logo} />
                <img src={logo} alt="logo" className={styles.logo} />
            </header>
            <div>
                <div className={styles.container}>
                    <h1 className={styles.text}>
                        Screenshot to Text Converter
                    </h1>
                    <p className={styles.text}>
                        Save time when preparing your documentation utilising
                        this optical character recognition service to extract
                        text from your screenshot.
                        <br />
                        Upload your screenshot as a{" "}
                        <strong>JPEG or PNG file</strong>, click on the convert
                        button and receive text to copy and paste into your
                        documentation instantly.
                    </p>

                    <form className={styles.form} id="inputImage">
                        <div>
                            <h2 className={styles.text}>
                                Drag & Drop or Upload your screenshot below:
                            </h2>
                            <InputContainer setText={setText} />
                        </div>

                        <div
                            id="textOutputBox"
                            className={styles.textOutputBox}
                        >
                            <h2 className={styles.text}>Your Text Output:</h2>
                            <OutputContainer
                                resultantText={text}
                                setText={setText}
                            />
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};
