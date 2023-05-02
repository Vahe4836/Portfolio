import { useState, useEffect } from 'react';
import test from '../../../images/home_person_image.jpg';
import './Skills.scss';



export default function Skills() {

    console.log(test);
    
    const [frontEndData, setFrontEndData] = useState([]);
    const [backEndData, setBackEndData] = useState([]);
    const [designData, setDesignData] = useState([]);

    useEffect(() => {

        fetch("/db/skills/frontEnd").then(res => res.json()).then(res => {
            console.log(res, "skills");
            setFrontEndData(res);
        })

    }, []);


    return (
        <div className='skills_page'>
            <img src={test} alt="test_icon" width="100px" height="100px"/>
        </div>
    )
}