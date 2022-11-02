import styles from "./Footer.module.scss";

//Footer is imported into Wrapper
const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            Copyright © {year}. All rights reserved.
        </footer>
    );
};

export default Footer;
