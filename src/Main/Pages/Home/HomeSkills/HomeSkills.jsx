import { Link } from "react-router-dom";
import html_icon from '../../../../images/home_skills/home_html_icon.png';
import css_icon from '../../../../images/home_skills/home_css_icon.png';
import sass_icon from '../../../../images/home_skills/home_sass_icon.png';
import "./HomeSkills.scss";


let data_home_skills = [
    {
        name: "HTML/HTML5",
        img: html_icon,
        alt: "html_icon",
        percentage: 93,
        backgroundColor: "rgb(230, 145, 67)"
    },
    {
        name: "CSS/CSS3",
        img: css_icon,
        alt: "css_icon",
        percentage: 90,
        backgroundColor: "rgb(30, 45, 255)"
    },
    {
        name: "SASS/SCSS",
        img: sass_icon,
        alt: "sass_icon",
        percentage: 80,
        backgroundColor: "rgb(230, 45, 157)"
    }
]


export default function HomeSkills() {
    return (
        <div className="home_skills_div">
            <h2 className="home_my_skills_title">My Skills</h2>
            {/* <Link to="/skills" className="link_to_pages_from_home"> */}
            <div className="home_skills_border">
                <Link to="/skills" className="link_to_pages_from_home">

                    {data_home_skills.map((item) => {
                        return (
                            <div className="home_skills_html" style={{
                                background: `conic-gradient(${item.backgroundColor} ${item.percentage * 3.6}deg, rgba(255, 255, 255, 0) 0deg)`
                            }}>
                                <div className="home_skill_percentage_animation">
                                    <div className="home_skill_icon_text">
                                        <p className="home_skills_text">{item.name}</p>
                                        <img src={item.img} alt={item.alt} width="55px" height="55px" />
                                        <p className="home_percentage_text">{item.percentage}%</p>
                                    </div>
                                </div>

                            </div>
                        )
                    })}
                    {/* <div className="home_skills_html">
                        <div className="home_skill_percentage_animation">
                            <div className="home_skill_icon_text">
                                <p className="home_skills_text">HTML/HTML5</p>
                                <img src={html_icon} alt="html_icon" width="55px" height="55px" />
                                <p className="home_percentage_text">95%</p>
                            </div>
                        </div>

                    </div>
                    <div className="home_skills_css">
                        <div className="home_skill_percentage_animation">
                            <div className="home_skill_icon_text">
                                <p className="home_skills_text">CSS/CSS3</p>
                                <img src={css_icon} alt="css_icon" width="55px" height="55px" />
                                <p className="home_percentage_text">90%</p>
                            </div>
                        </div>
                    </div>
                    <div className="home_skills_sass">
                        <div className="home_skill_percentage_animation">
                            <div className="home_skill_icon_text">
                                <p className="home_skills_text">SASS/SCSS</p>
                                <img src={sass_icon} alt="sass_icon" width="55px" height="55px" />
                                <p className="home_percentage_text">85%</p>
                            </div>
                        </div>
                    </div> */}
                    <div className="home_skills_other">
                        <div className="home_skill_percentage_animation">
                            <p className="home_skills_text">+14</p>
                        </div>
                    </div>
                </Link>
            </div>
            {/* </Link> */}
        </div>
    )
}