import Header from "./Components/Header";
import Footer from "./Components/Footer";

function DefaultLayout({ children }) {
    return (
        <div>
            <div className="Header">
                <Header />
            </div>

            <div className="Container">{children}</div>
            
            <div className="Footer">
                <Footer />
            </div>
        </div>
    );
}

export default DefaultLayout;
