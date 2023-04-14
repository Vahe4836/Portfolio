import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import "./Main.scss";
import Home from "./Pages/Home/Home";



export default function Main() {
    return (
        <div className="main_flex">
            <div className="main">
                <div className="main_elements">
                    <Header />
                    <Home />
                    <Footer />
                </div>
            </div>
        </div>
    )
}