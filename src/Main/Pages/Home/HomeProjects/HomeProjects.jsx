import "./HomeProjects.scss";



export default function HomeProjects() {
    return (
        <div className="home_projects_div">
            <h2 className="home_my_projects_title">My projects</h2>
            <div className="home_projects_border">
                <div className="home_project_auto_electric">
                    <p className="home_project_text">Autoelectrickrd.ru</p>
                </div>
                <div className="home_project_spy_game">
                   <p className="home_project_text">Spy Game</p>
                </div>
                <div className="home_project_other">
                    <p className="home_project_text">+1</p>
                </div>
            </div>
        </div>
    )
}