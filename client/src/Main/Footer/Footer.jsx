import linkedin_icon from '../../images/footer_icons/footer_linkedin_icon.png';
import facebook_icon from '../../images/footer_icons/footer_facebook_icon.png';
import instagram_icon from '../../images/footer_icons/footer_instagram_icon.png';
import github_icon from '../../images/footer_icons/footer_github_icon.png';
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
                        <span className="footer_contacts_text">Telephone: (+374) 94 177 419</span>
                    </div>
                    <div className="footer_contact_icon_text">
                        <div className="footer_contacts_icon"></div>
                        <span className="footer_contacts_text">Address: Yerevan, Armenia</span>
                    </div>
                </div>
                <div className="footer_social_icons">
                    <img src={linkedin_icon} alt="linkedin_icon" width="40px" height="40px" className='footer_icon'/>
                    <img src={github_icon} alt="github_icon" width="40px" height="40px" className='footer_icon'/>
                    <img src={facebook_icon} alt="facebook_icon" width="40px" height="40px" className='footer_icon'/>
                    <img src={instagram_icon} alt="instagram_icon" width="40px" height="40px" className='footer_icon'/>
                </div>
            </div>
        </footer>
    )
}