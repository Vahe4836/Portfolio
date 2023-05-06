import linkedin_icon from '../../images/footer_icons/social/footer_linkedin_icon.png';
import facebook_icon from '../../images/footer_icons/social/footer_facebook_icon.png';
import instagram_icon from '../../images/footer_icons/social/footer_instagram_icon.png';
import github_icon from '../../images/footer_icons/social/footer_github_icon.png';
import mail_icon from '../../images/footer_icons/contact/mail_icon.png';
import phone_icon from '../../images/footer_icons/contact/phone_icon.png';
import address_icon from '../../images/footer_icons/contact/address_icon.png';
import "./Footer.scss";



export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer_div">
                <div className="footer_contacts">
                    <div className="footer_contact_icon_text">
                        <img src={mail_icon} alt="mail_icon" width="20px" height="20px" />
                        <span className="footer_contacts_text"> Email: vahe.hovakimyan.19@mail.ru</span>
                    </div>
                    <div className="footer_contact_icon_text">
                        <img src={phone_icon} alt="phone_icon" width="20px" height="20px" />
                        <span className="footer_contacts_text">Telephone: (+374) 94 177 419</span>
                    </div>
                    <div className="footer_contact_icon_text">
                        <img src={address_icon} alt="address_icon" width="20px" height="20px" style={{border: "2px white solid", borderRadius: "50%"}} />
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