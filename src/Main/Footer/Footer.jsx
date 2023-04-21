import "./Footer.scss";



export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer_div">
                <div className="footer_contacts">
                    <div className="footer_contact_icon_text">
                        <div className="footer_contacts_icon"></div>
                        <span className="footer_contacts_text"> Email: vahe.hovakimyan.19@mail.ru</span>
                    </div>
                    <div className="footer_contact_icon_text">
                        <div className="footer_contacts_icon"></div>
                        <span className="footer_contacts_text">Telephone: +374 94 177 419</span>
                    </div>
                    <div className="footer_contact_icon_text">
                        <div className="footer_contacts_icon"></div>
                        <span className="footer_contacts_text">Address: Yerevan, Armenia</span>
                    </div>
                </div>
                <div className="footer_social_icons">
                    <div className="footer_social_icon"></div>
                    <div className="footer_social_icon"></div>
                    <div className="footer_social_icon"></div>
                    <div className="footer_social_icon"></div>
                </div>
            </div>
        </footer>
    )
}