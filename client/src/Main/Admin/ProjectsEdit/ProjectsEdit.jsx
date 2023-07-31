import { useEffect, useState } from "react";
import ProjectsEditItems from "./ProjectsEditItems/ProjectsEditItems";
import ProjectsEditForm from "./ProjectsEditForm/ProjectsEditForm";
import "../../Pages/Projects/Projects.scss";
import "../../Pages/Projects/ProjectsMedia.scss";
import "./ProjectsEdit.scss";



export default function ProjectsEdit() {

    const [projectsData, setProjectsData] = useState([]);

    const onDelete = function (id) {

        (async function () {

            await fetch("/db/admin/projects/export", {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                body: JSON.stringify({
                    id: id
                })
            })
                .then((stream) => stream.json())
                .then((data) => {
                    setProjectsData(data);
                })

        })()

    }

    useEffect(() => {
        fetch("/db/projects")
            .then((stream) => stream.json())
            .then((data) => {
                setProjectsData(data);
            })
    }, []);

    return (

        <div className="projects_section">

            <ProjectsEditItems
                projectsData={projectsData}
                onDelete={onDelete}
            />

            <ProjectsEditForm
                setProjectsData={setProjectsData}
            />

        </div>

    )
}