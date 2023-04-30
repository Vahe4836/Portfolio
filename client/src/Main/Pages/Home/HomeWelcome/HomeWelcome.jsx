import { Link } from "react-router-dom";
import "./HomeWelcome.scss";



export default function HomeWelcome() {
    return (
        <div className="home_div_flex">
            <div className="home_div">
                <div className="image_div">
                </div>
                <div className="home_title">
                    <p className="hi_text">Hi, I'm Vahe 🖐</p>
                    <h2 className="create_text">Creating creative and functional websites, UI development and SEO optimization for websites.</h2>
                </div>
                <div className="download_hire_button_div">
                    <button className="home_button">Download my CV</button>
                    <button className="home_button"><Link to="/contact" className="home_hire_me_link">Hire me</Link></button>
                </div>
            </div>
        </div>
    )
}