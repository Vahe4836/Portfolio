import { Routes, Route } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import Skills from "./Pages/Skills/Skills";
import NotFound from "./NotFound/NotFound";
import WebsiteEnd from "./WebsiteEnd/WebsiteEnd";
import Admin from "./Admin/Admin";
import Login from "./Login/LoginComp";
import "./Main.scss";
import "./MainMedia.scss";


export default function Main() {
    return (
        <div className="main_flex">
            <div className="main">
                <div className="main_elements">
                    <Header />
                    {/* <Home /> */}
                    <Routes>
                        <Route path="/" element={
                            <Home />
                        } />
                        <Route path="/projects" element={
                            <Projects />
                        } />
                        <Route path="/skills" element={
                            <Skills />
                        } />
                        <Route path="/contact" element={
                            <Contact />
                        } />
                        <Route path="/login" element={
                            <Login />
                        } />
                        <Route path="/admin" element={
                            <Admin />
                        } />
                        <Route path="*" element={
                            <NotFound />
                        } />
                    </Routes>
                    <Footer />
                    <WebsiteEnd />
                </div>
            </div>
        </div>
    )
}