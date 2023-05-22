import { Link } from "react-router-dom";
import "./HomeProjects.scss";
import "./HomeProjectsMedia.scss";



export default function HomeProjects() {
    return (

        <div className="home_projects_div">
            <h2 className="home_my_projects_title">My projects</h2>
            <div className="home_projects_border">
                <Link to="/projects" className="link_to_pages_from_home">

                    <div className="home_project_auto_electric">
                        <div className="home_project_opacity">
                            <p className="home_project_text">Autoelectrickrd.ru</p>
                        </div>
                    </div>

                    <div className="home_project_spy_game">
                        <div className="home_project_opacity">
                            <p className="home_project_text">Spy Game</p>
                        </div>
                    </div>

                    <div className="home_project_other">
                        <div className="home_project_opacity">
                            <p className="home_project_text">+2 ...</p>
                            </div>
                    </div>

                </Link>
            </div>
        </div>
    )
}