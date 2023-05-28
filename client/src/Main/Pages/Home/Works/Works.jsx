import { useEffect, useState } from 'react';
import "./Works.scss";
import "./WorksMedia.scss";



export default function Works() {

    const [homeWorks, setHomeWorks] = useState([]);

    useEffect(() => {
        fetch("/db/home/works")
            .then((res) => res.json())
            .then((data) => {
                setHomeWorks(data);
            })
    }, [])


    return (
        <article className='works'>
            <h2 className="home_welcome_title">What I can do?</h2>
            <div className="work_info_cards_flex">
                <div className="work_info_cards">
                    {homeWorks.map((item) => {
                        return (
                            <div className="work_info_card" key={item.id}>
                                <img src={item.icon} alt={item.alt} width="38px" height="38px" className='work_info_card_icon' />
                                <h3 className="work_info_card_title">{item.name}</h3>
                                <p className="work_info_text">{item.text}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </article>
    )
}