import { useState, useEffect } from 'react';
import './Skills.scss';



export default function Skills() {

    
    const [data, setData] = useState([]);

    useEffect(() => {

        fetch("/db/skills").then(res => res.json()).then(res => {
            console.log(res, "skills");
        })

    }, []);


    return (
        <div className='skills_page'>

        </div>
    )
}