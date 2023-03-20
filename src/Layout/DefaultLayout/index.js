import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div>{children}</div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
