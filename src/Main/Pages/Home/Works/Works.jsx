import "./Works.scss";


const works_info = [
    {
        alt: "UI_icon",
        name: "UI development",
        text: "UI development is a structure and animations of websites."
    },
    {
        alt: "Functional_icon",
        name: "Functional development",
        text: "Functional developemtn is a register and login forms, contact front-end with back-end etc."
    },
    {
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
                            <img src="" alt={item.alt} />
                            <h3 className="work_info_card_title">{item.name}</h3>
                            <p>{item.text}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}