import { useState } from "react";




export default function SkillEditBackItems({ backEndData, onDelete }) {

    const [displaySkill, setDisplayFrontSkill] = useState(true);
    const [allowEdit, setAllowEdit] = useState(false);


    return (

        <section className='skills_section'>

            <h2 className='skills_page_title'>Back End skills</h2>

            <div className="display_skill_button_div">
                <button
                    className="display_skill_button"
                    onClick={(evt) => {
                        evt.preventDefault();
                        setDisplayFrontSkill(!displaySkill);
                    }}>{displaySkill ? "Close Back-End skills" : "Open Back-End skills"}</button>

            </div>

            <div className="check_button_div">
                <span className="check_button_text">{allowEdit ? "Close skills" : "Open skills"}</span>
                <input
                    type="checkbox"
                    name="hide"
                    id="hide"
                    value={allowEdit}
                    onChange={() => { setAllowEdit(!allowEdit) }}
                />
            </div>

            <div className='skills_div_flex'
                style={{ display: `${displaySkill ? "flex" : "none"}` }}
            >


                <div className='skills_div'>
                    {backEndData.map((item) => {
                        return (
                            <div
                                className="skill_animation" style={{
                                    background: `conic-gradient(${item.backgroundColor} ${item.percentage * 3.6}deg, rgba(255, 255, 255, 0) 0deg)`,
                                    opacity: `${allowEdit ? "1" : "0.6"}`,
                                    pointerEvents: `${allowEdit ? "auto" : "none"}`
                                }}
                                key={item.id}
                            >
                                <div className="skill_percentage_animation">
                                    <button className='delete_skill_button' onClick={(evt) => {
                                        evt.preventDefault();
                                        onDelete(item._id);
                                    }}>X</button>
                                    <div className="skill_icon_text">
                                        <p className="skills_text">{item.name}</p>
                                        <img src={item.img} alt={item.alt} className='icon_img' />
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

    )
}