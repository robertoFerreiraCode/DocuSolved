import styles from "./OutputContainer.module.scss";

// This function passes the returned text to the text Output area
const OutputContainer = ({ resultantText, setText }) => {
    return (
        <div>
            <textarea
                className={styles.box}
                value={resultantText}
                onChange={(event) => setText(event.target.value)}
            />

            {/* This button allows the user to copy the text they have just converted for ease */}
            <button
                type="button"
                className={styles.box__button}
                onClick={() => {
                    navigator.clipboard.writeText(resultantText);
                }}
            >
                Copy text
            </button>

            {/* This button allows the user to clear the text Output area */}
            <button
                type="button"
                className={styles.box__button}
                onClick={() => {
                    setText("");
                }}
            >
                Reset text
            </button>
        </div>
    );
};

export default OutputContainer;
