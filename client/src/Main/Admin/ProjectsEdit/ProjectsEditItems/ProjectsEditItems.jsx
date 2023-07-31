



export default function ProjectsEditItems({ projectsData, onDelete }) {


    return (
        <div className='projects_page'>

            <h1 className='projects_title'>Projects</h1>

            <div className='projects_page_flex'>
                {projectsData.map((item) => {

                    return (
                        <div className='projects_div'>
                            <div className='project_all_elements'>
                                <button className='delete_skill_button' onClick={(evt) => {
                                    evt.preventDefault();
                                    onDelete(item._id);
                                }}>X</button>
                                <h3 className='project_name'>{item.name}</h3>

                                <div className='project_image_div'>
                                    <a href={item.project_url} target='_blank' rel="noreferrer">
                                        <img src={item.img} alt={item.alt} className='project_image' loading="lazy" />
                                        <div className='to_project_link_opacity'></div>
                                    </a>
                                </div>

                                <div className='project_elements'>

                                    <div className='project_element'>
                                        <span className='project_element_title'>Project : </span>
                                        <a href={item.projectUrl} className='to_project_and_github'>{item.projectUrl}</a>
                                    </div>

                                    <div className='project_element'>
                                        <span className='project_element_title'>GitHub : </span>
                                        <a href={item.githubUrl} className='to_project_and_github'>{item.githubUrl}</a>
                                    </div>

                                    <div className='project_element'>
                                        <span className='project_element_title'>Technologies : </span>
                                        <span className='technologies_and_duration'>{item.technologies}</span>
                                    </div>

                                    <div className='project_element'>
                                        <span className='project_element_title'>Duration : </span>
                                        <span className='technologies_and_duration'>{item.duration}</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    )

                })}
            </div>
        </div >
    )
}