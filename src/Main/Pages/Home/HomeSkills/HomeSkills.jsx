import { Link } from "react-router-dom"
import "./HomeSkills.scss";



export default function HomeSkills() {
    return (
        <div className="home_skills_div">
            <h2 className="home_my_skills_title">My Skills</h2>
            <Link to="/contact" className="link_to_contact_from_home">
                <div className="home_skills_border">
                    <div className="home_skills_html">
                        <p className="home_skills_text">HTML/HTML5</p>
                    </div>
                    <div className="home_skills_css">
                        <p className="home_skills_text">CSS/CSS3</p>
                    </div>
                    <div className="home_skills_sass">
                        <p className="home_skills_text">SASS/SCSS</p>
                    </div>
                    <div className="home_skills_other">
                        <p className="home_skills_text">+1</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}