import { useEffect, useState } from 'react';
import front_end_icon from '../../../../images/home_icons/front_end_icon.png';
import back_end_icon from '../../../../images/home_icons/Back_end_icon.png';
import seo_icon from '../../../../images/home_icons/seo_optimization_icon.png';
import "./Works.scss";


// const works_info = [
//     {
//         id: Math.random(),
//         icon: front_end_icon,
//         alt: "UI_icon",
//         name: "Front-End development",
//         text: "UI development is a structure and animations of websites."
//     },
//     {
//         id: Math.random(),
//         icon: back_end_icon,
//         alt: "Functional_icon",
//         name: "Back-End development",
//         text: "Functional development is a register and login forms, contact front-end with back-end etc."
//     },
//     {
//         id: Math.random(),
//         icon: seo_icon,
//         alt: "SEO_optimization_icon",
//         name: "SEO optimization",
//         text: "When we searching in a Google or Yandex websites sort by SEO rank, this service became your rank high."
//     }
// ];


export default function Works() {

    const [homeWorks, setHomeWorks] = useState([]);

    useEffect(() => {
        fetch("/db/home/works")
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setHomeWorks(data);
        })
    }, [])


    return (
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
    )
}