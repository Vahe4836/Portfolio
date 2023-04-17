import front_end_icon from '../../../../images/home_icons/png-clipart-front-and-back-ends-computer-icons-front-end-web-development-programing-miscellaneous-angle.png';
import back_end_icon from '../../../../images/home_icons/3667919.png';
import seo_icon from '../../../../images/home_icons/1688476.png';
import "./Works.scss";


const works_info = [
    {
        icon: front_end_icon,
        alt: "UI_icon",
        name: "Front-End development",
        text: "UI development is a structure and animations of websites."
    },
    {
        icon: back_end_icon,
        alt: "Functional_icon",
        name: "Back-End development",
        text: "Functional development is a register and login forms, contact front-end with back-end etc."
    },
    {
        icon: seo_icon,
        alt: "SEO_optimization_icon",
        name: "SEO optimization",
        text: "When we searching in a Google or Yandex websites sort by SEO rank, this service became your rank high."
    }
];

export default function Works() {
    return (
        <div className="work_info_cards_flex">
            <div className="work_info_cards">
                {works_info.map((item) => {
                    return (
                        <div className="work_info_card">
                            <img style={{ backgroundColor: "white" }} src={item.icon} alt={item.alt} width="50px" height="50px" />
                            <h3 className="work_info_card_title">{item.name}</h3>
                            <p className="work_info_text">{item.text}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}