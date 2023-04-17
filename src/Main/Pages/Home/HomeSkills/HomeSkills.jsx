import "./HomeSkills.scss";



export default function HomeSkills(){
    return(
        <div className="home_skills_div">
            <h2 className="home_my_skills_title">My Skills</h2>
            <div className="home_skills_border">
                <div className="home_skills_html">
                    <p className="home_skills_text">HTML/HTML5</p>
                </div>
                <div className="home_skills_css">
                   <p className="home_skills_text">CSS/CSS3</p>
                </div>
                <div className="home_skills_other">
                    <p className="home_skills_text">+1</p>
                </div>
            </div>
        </div>
    )
}