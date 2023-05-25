import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./HomeProjects.scss";
import "./HomeProjectsMedia.scss";




export default function HomeProjects() {

    const [homeProjects, setHomeProjects] = useState([]);

    useEffect(() => {
        fetch("/db/home/projects")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setHomeProjects(data);
            })
    }, [])


    return (

        <div className="home_projects_div">
            <h2 className="home_my_projects_title">My projects</h2>
            <div className="home_projects_border">
                <Link to="/projects" className="link_to_pages_from_home">

                    {homeProjects.map((item) => {
                        return (
                            <div key={item.id} className="home_project" style={{
                                background: `url(${item.backgroundImage})`,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center"
                            }}>
                                <div className="home_project_opacity">
                                    <p className="home_project_text">{item.text}</p>
                                </div>
                            </div>
                        )
                    })}

                </Link>
            </div>
        </div>
    )
}