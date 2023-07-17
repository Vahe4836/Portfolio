import '../../../../Pages/Skills/Skills.scss';
import '../../../../Pages/Skills/SkillsMedia.scss';
import './SkillsEditFrontEnd.scss';



export default function SkillsEditFrontEnd({ frontEndData }) {



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
                                        <button className='delete_skill_button'>X</button>
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

            <div className='create_front_skill_form'>
                <form action="/admin/front/data" method="POST">
                    <input type="text" name='name' placeholder='Name' />
                    <input type="text" name='percentage' placeholder='Percentage' />
                    <input type="text" name='image_url' placeholder='Image url' />
                    <input type="text" name='image_alt' placeholder='Image alt' />
                    <button className=''>Create</button>
                </form>
            </div>


        </div>

    )
}