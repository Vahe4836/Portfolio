import { Link } from "react-router-dom";
import js_icon from '../../../../images/home_skills/home_js_icon.png';
import "./HomeSkills.scss";


let data_home_skills = [
    {
        id: Math.random(),
        name: "HTML/HTML5",
        img: "https://i.ibb.co/QQpk6rs/home-html-icon.png",
        alt: "html_icon",
        percentage: 93,
        backgroundColor: "rgb(230, 145, 67)"
    },
    {
        id: Math.random(),
        name: "CSS/CSS3",
        img: "https://i.ibb.co/TBnNzmW/home-css-icon.png",
        alt: "css_icon",
        percentage: 90,
        backgroundColor: "rgb(30, 45, 255)"
    },
    {
        id: Math.random(),
        name: "SASS/SCSS",
        img: "https://i.ibb.co/KmG2qYS/home-sass-icon.png",
        alt: "sass_icon",
        percentage: 80,
        backgroundColor: "rgb(230, 45, 157)"
    }
]


export default function HomeSkills() {
    return (
        <div className="home_skills_div">
            <h2 className="home_my_skills_title">My Skills</h2>
            <div className="home_skills_border">
                <Link to="/skills" className="link_to_pages_from_home">

                    {data_home_skills.map((item) => {
                        return (
                            <div
                                className="home_skills" style={{
                                    background: `conic-gradient(${item.backgroundColor} ${item.percentage * 3.6}deg, rgba(255, 255, 255, 0) 0deg)`
                                }}
                                key={item.id}
                            >

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


                    <div className="home_skills" style={{
                        background: `conic-gradient(yellow ${77 * 3.6}deg, rgba(255, 255, 255, 0) 0deg)`
                    }}>
                        <div className="home_skill_percentage_animation">

                            <div className="home_skill_icon_text">
                                <p className="home_skills_text">Javascript</p>
                                <img src={js_icon} alt="js_icon" width="55px" height="55px" />
                                <p className="home_percentage_text">77%</p>
                            </div>
                            
                            <div className="other_div">
                                <p className="other_skills_text">+14  ...</p>
                            </div>

                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}