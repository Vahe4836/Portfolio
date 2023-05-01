import { useState, useEffect } from 'react';
import img from '../../../images/home_projects/autoelectric.png';
import './Projects.scss';



export default function Projects() {


    const [data, setData] = useState([]);

    // let img = "../../../images/home_projects/autoelectric.png"

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
                                {/* <div className='project_elements_to_center'> */}
                                    <div className='project_image_div'>
                                        <a href={item.project_url} target='_blank'>
                                            <img src={img} alt={item.alt} className='project_image' />
                                            <div className='to_project_link_opacity'></div>
                                        </a>
                                    </div>
                                {/* </div> */}
                                    <div className='project_elements'>
                                        <p className='project_element'>Project : {item.project_url}</p>
                                        <p className='project_element'>GitHub : {item.github_url}</p>
                                        <p className='project_element'>Technologies : {item.technologies} </p>
                                        <p className='project_element'>Duration : {item.duration}</p>
                                    </div>
                                </div>
                        </div>
                    )
                })}
            </div>
        </div >
    )
}