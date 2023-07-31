import { useState } from "react";




export default function ProjectsEditForm({ setProjectsData }) {

    const [displayFormBool, setDisplayFormBool] = useState(false);

    const [technologies, setTechnologies] = useState("");
    const [projectUrl, setProjectUrl] = useState("");
    const [githubUrl, setGithubUrl] = useState("");
    const [duration, setDuration] = useState("");
    const [name, setName] = useState("");
    const [img, setImg] = useState("");
    const [alt, setAlt] = useState("");


    const handleChange = (setState) => (event) => {
        setState(event.target.value)
    }


    async function SendMessage(evt) {

        evt.preventDefault();

        const data = {
            technologies,
            projectUrl,
            githubUrl,
            duration,
            name,
            img,
            alt
        }

        if (
            technologies &&
            projectUrl &&
            githubUrl &&
            duration &&
            name &&
            img &&
            alt
        ) {

            await fetch("/db/admin/projects/import", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then((stream) => stream.json())
                .then((data) => {
                    setProjectsData(data);
                })


            setTechnologies("");
            setProjectUrl("");
            setGithubUrl("");
            setDuration("");
            setName("");
            setImg("");
            setAlt("");

        }

    }




    return (
        <>
            <div className="display_form_button_div">
                <button onClick={(evt) => {
                    evt.preventDefault();
                    setDisplayFormBool(!displayFormBool);
                }}
                    className="display_form_button"
                >{displayFormBool ? "Close Projects form" : "Open Projects form"}</button>
            </div>


            <div className='create_projects_form' style={{ display: `${displayFormBool ? "block" : "none"}` }}>
                <form className="edit_form">

                    <input
                        type="text"
                        name='name'
                        placeholder='Name'
                        className="form_edit_input"
                        value={name}
                        onChange={handleChange(setName)}
                    />

                    <input
                        type="text"
                        name='technologies'
                        placeholder='Technologies'
                        className="form_edit_input"
                        value={technologies}
                        onChange={handleChange(setTechnologies)}
                    />

                    <input
                        type="text"
                        name='projectUrl'
                        placeholder='Project Url'
                        className="form_edit_input"
                        value={projectUrl}
                        onChange={handleChange(setProjectUrl)}
                    />

                    <input
                        type="text"
                        name='githubUrl'
                        placeholder='Github Url'
                        className="form_edit_input"
                        value={githubUrl}
                        onChange={handleChange(setGithubUrl)}
                    />

                    <input
                        type="text"
                        name='duration'
                        placeholder='Duration'
                        className="form_edit_input"
                        value={duration}
                        onChange={handleChange(setDuration)}
                    />


                    <input
                        type="text"
                        name='image'
                        placeholder='Image url'
                        className="form_edit_input"
                        value={img}
                        onChange={handleChange(setImg)}
                    />

                    <input
                        type="text"
                        name='alt'
                        placeholder='Image alt'
                        className="form_edit_input"
                        value={alt}
                        onChange={handleChange(setAlt)}
                    />

                    <button
                        className='form_edit_button'
                        onClick={(evt) => { SendMessage(evt) }}
                    >Create</button>
                </form>
            </div>
        </>
    )
}