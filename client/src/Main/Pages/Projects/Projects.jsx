import { useState, useEffect } from 'react';
import './Projects.scss';
import './ProjectsMedia.scss';



export default function Projects() {

    const [data, setData] = useState([]);

    useEffect(() => {

        fetch("/db/projects")
            .then(res => res.json())
            .then(res => {
                setData(res);
                console.log(res, "projects");
            })

    }, [])


    return (
        <div className='projects_page'>
            <div className='projects_page_flex'>

                {data.map((item) => {

                    return (
                        <div className='projects_div'>
                            <div className='project_all_elements'>
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
                                        <a href={item.project_url} className='to_project_and_github'>{item.project_url}</a>
                                    </div>

                                    <div className='project_element'>
                                        <span className='project_element_title'>GitHub : </span>
                                        <a href={item.github_url} className='to_project_and_github'>{item.github_url}</a>
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