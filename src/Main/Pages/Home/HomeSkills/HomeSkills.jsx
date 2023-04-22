import { Link } from "react-router-dom";
import html_icon from '../../../../images/home_skills/home_html_icon.png';
import css_icon from '../../../../images/home_skills/home_css_icon.png';
import sass_icon from '../../../../images/home_skills/home_sass_icon.png';
import "./HomeSkills.scss";



export default function HomeSkills() {
    return (
        <div className="home_skills_div">
            <h2 className="home_my_skills_title">My Skills</h2>
            {/* <Link to="/skills" className="link_to_pages_from_home"> */}
                <div className="home_skills_border">
                <Link to="/skills" className="link_to_pages_from_home">
                    <div className="home_skills_html">
                        <div className="home_skill_persent_animation">
                            <div className="home_skill_icon_text">
                                <p className="home_skills_text">HTML/HTML5</p>
                                <img src={html_icon} alt="html_icon" width="55px" height="55px" />
                                {/* <div> */}
                                    <p className="home_percent_text">95%</p>
                                {/* </div> */}
                            </div>
                        </div>

                    </div>
                    <div className="home_skills_css">
                        <div className="home_skill_persent_animation">
                            <p className="home_skills_text">CSS/CSS3</p>
                            <img src={css_icon} alt="css_icon" width="80px" height="80px" />
                        </div>
                    </div>
                    <div className="home_skills_sass">
                        <div className="home_skill_persent_animation">
                            <p className="home_skills_text">SASS/SCSS</p>
                            <img src={sass_icon} alt="sass_icon" width="80px" height="80px" />
                        </div>
                    </div>
                    <div className="home_skills_other">
                        <div className="home_skill_persent_animation">
                            <p className="home_skills_text">+14</p>
                        </div>
                    </div>
                     </Link>
                </div>
            {/* </Link> */}
        </div>
    )
}