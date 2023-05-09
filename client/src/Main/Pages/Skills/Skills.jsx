import { useState,useEffect } from 'react';
import './Skills.scss';



export default function Skills() {

    const [frontEndData,setFrontEndData] = useState([]);
    const [backEndData,setBackEndData] = useState([]);
    const [designData,setDesignData] = useState([]);
    const [otherData,setOtherData] = useState([]);

    useEffect(() => {

        Promise.all([
            fetch("/db/skills/frontEnd"),
            fetch("/db/skills/backEnd"),
            fetch("/db/skills/design"),
            fetch("/db/skills/other")
        ]).then((streams) => {
            return Promise.all(streams.map((stream) => stream.json()));
        }).then((data) => {
            console.log(data);
            const [frontEndInfo,backEndInfo,designInfo,otherInfo] = data;
            setFrontEndData(frontEndInfo);
            setBackEndData(backEndInfo);
            setDesignData(designInfo);
            setOtherData(otherInfo);
        }).catch((err) => {
            console.log(err);
        })

    },[]);



    return (
        <div className='skills_page'>

            <section className='skills_section'>
                <h2 className='skills_page_title'>Front End skills</h2>

                <div className='skills_div_flex'>
                    <div className='skills_div'>
                        {frontEndData.map((item) => {
                            return (
                                <div
                                    className="skill_animation" style={{
                                        background: `conic-gradient(${item.backgroundColor} ${item.percentage * 3.6}deg, rgba(255, 255, 255, 0) 0deg)`
                                    }}
                                    key={item.id}
                                >

                                    <div className="skill_percentage_animation">
                                        <div className="skill_icon_text">
                                            <p className="skills_text">{item.name}</p>
                                            <img src={item.img} alt={item.alt} width="55px" height="55px" />
                                            <p className="percentage_text">{item.percentage}%</p>
                                        </div>
                                        <div className="skill_opacity"></div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>



            <section className='skills_section'>
                <h2 className='skills_page_title'>Back End skills</h2>
                <div className='skills_div_flex'>
                    <div className='skills_div'>
                        {backEndData.map((item) => {
                            return (
                                <div
                                    className="skill_animation" style={{
                                        background: `conic-gradient(${item.backgroundColor} ${item.percentage * 3.6}deg, rgba(255, 255, 255, 0) 0deg)`
                                    }}
                                    key={item.id}
                                >

                                    <div className="skill_percentage_animation">
                                        <div className="skill_icon_text">
                                            <p className="skills_text">{item.name}</p>
                                            <img src={item.img} alt={item.alt} width="55px" height="55px" />
                                            <p className="percentage_text">{item.percentage}%</p>
                                        </div>
                                        <div className="skill_opacity"></div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            <section className='skills_section'>
                <h2 className='skills_page_title'>Design skills</h2>
                <div className='skills_div_flex'>
                    <div className='skills_div'>
                        {designData.map((item) => {
                            return (
                                <div
                                    className="skill_animation" style={{
                                        background: `conic-gradient(${item.backgroundColor} ${item.percentage * 3.6}deg, rgba(255, 255, 255, 0) 0deg)`
                                    }}
                                    key={item.id}
                                >

                                    <div className="skill_percentage_animation">
                                        <div className="skill_icon_text">
                                            <p className="skills_text">{item.name}</p>
                                            <img src={item.img} alt={item.alt} width="55px" height="55px" />
                                            <p className="percentage_text">{item.percentage}%</p>
                                        </div>
                                        <div className="skill_opacity"></div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>


            <section className='skills_section'>
                <h2 className='skills_page_title'>Other skills</h2>
                <div className='skills_div_flex'>
                    <div className='skills_div'>
                        {otherData.map((item) => {
                            return (
                                <div
                                    className="skill_animation" style={{
                                        background: `conic-gradient(${item.backgroundColor} ${item.percentage * 3.6}deg, rgba(255, 255, 255, 0) 0deg)`
                                    }}
                                    key={item.id}
                                >

                                    <div className="skill_percentage_animation">
                                        <div className="skill_icon_text">
                                            <p className="skills_text">{item.name}</p>
                                            <img src={item.img} alt={item.alt} width="55px" height="55px" />
                                            <p className="percentage_text">{item.percentage}%</p>
                                        </div>
                                        <div className="skill_opacity"></div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

        </div>

    )
}