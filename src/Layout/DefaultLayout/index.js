import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import styles from "./DefaultLayout.module.css";

function DefaultLayout({ children }) {
    return (
        <div>
            <div className={styles.header}>
                <Header />
            </div>

            <div>{children}</div>

            <div className={styles.footer}>
                <Footer />
            </div>
        </div>
    );
}

export default DefaultLayout;
