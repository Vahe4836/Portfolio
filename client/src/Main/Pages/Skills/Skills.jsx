import { useState, useEffect } from 'react';
import './Skills.scss';



export default function Skills() {

    
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
            
        </div>
    )
}