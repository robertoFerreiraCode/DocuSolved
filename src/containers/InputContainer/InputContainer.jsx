import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { imageToText } from "./../../Assets/Utils/imageToText";

import styles from "./InputContainer.module.scss";

// Utilsing React DropZone to limit files to jpeg and png only and allow drag and drop as well as upload
export default function Accept({ setText }) {
    // let [acceptedFileItems, setAcceptedFileItems] = useState([]);

    const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
        useDropzone({
            accept: "image/jpeg, image/png",
        });

    // Array of accepted files
    let acceptedFileItems = acceptedFiles.map((file) => (
        <li key={file.path}>
            {file.path} - {(file.size / (1024 * 1024)).toFixed(3)} MB
        </li>
    ));

    console.log(acceptedFileItems);

    // Manages rejected files and provides alert to user regarding acceptable file types
    const fileRejectionItems = fileRejections.map(({ file, errors }) => (
        <li key={file.path}>
            {file.path} - {(file.size / (1024 * 1024)).toFixed(3)} MB
            <ul>
                {errors.map((e) => (
                    <li key={e.code}>{e.message}</li>
                ))}
            </ul>
        </li>
    ));

    return (
        <section className="container">
            <div {...getRootProps({ className: "dropzone" })}>
                <input
                    {...getInputProps()}
                    className={styles.box}
                    accept="image/jpeg, image/png"
                    type="file"
                    multiple
                />
                <div className={styles.box}>
                    <p>
                        Drag 'n' drop .jpeg or .png files here, or
                        <strong> click here</strong> to select files from your
                        computer
                    </p>
                </div>
            </div>
            <aside className={styles.aside}>
                <h4 className={styles.text}>Accepted screenshots</h4>
                <ul>{acceptedFileItems}</ul>

                <h4 className={styles.text}>Rejected files</h4>
                <ul>{fileRejectionItems}</ul>
            </aside>

            <div>
                {/* This button runs runs the OCR and sends text to the outputText box */}
                <button
                    type="button"
                    className={styles.box__button}
                    onClick={() => {
                        let outputText = "";
                        acceptedFiles.forEach((file) => {
                            imageToText(file).then((result) => {
                                outputText += "\n" + result;
                                setText(outputText);
                            });
                        });
                    }}
                >
                    Convert
                </button>

                {/* This button allows the user to clear the uploaded files  */}
                <button
                    type="button"
                    className={styles.box__button}
                    onClick={() => {
                        window.location.reload();
                    }}
                >
                    Clear files
                </button>
            </div>
        </section>
    );
}

<Accept />;
