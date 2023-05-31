import { useState, useEffect } from 'react';

import mail_icon from '../../images/footer_icons/contact/mail_icon.png';
import phone_icon from '../../images/footer_icons/contact/phone_icon.png';
import address_icon from '../../images/footer_icons/contact/address_icon.png';

import "./Footer.scss";
import "./FooterMedia.scss";



export default function Footer() {

    const [footerIcons, setFooterIcons] = useState([]);

    useEffect(() => {
        fetch("/db/footer")
            .then((res) => res.json())
            .then((data) => {
                setFooterIcons(data);
            })
    }, []);


    return (
        <>
            <footer className="footer">
                <div className="footer_div">
                    <div className="footer_contacts">
                        <div className="footer_contact_icon_text">
                            <img src={mail_icon} alt="mail_icon" width="20px" height="20px" className='footer_contact_icon' />
                            <span className="footer_contacts_text">Email: vahe.hovakimyan.19@mail.ru</span>
                        </div>
                        <div className="footer_contact_icon_text">
                            <img src={phone_icon} alt="phone_icon" width="20px" height="20px" className='footer_contact_icon' />
                            <span className="footer_contacts_text">Telephone: (+374) 94 177 419</span>
                        </div>
                        <div className="footer_contact_icon_text">
                            <img src={address_icon} alt="address_icon" width="20px" height="20px" className='footer_contact_icon' />
                            <span className="footer_contacts_text">Address: Yerevan, Armenia</span>
                        </div>
                    </div>

                    <div className="footer_social_icons">

                        {footerIcons.map((item) => {
                            return (
                                <a key={item.id} href={item.href} target='_blank' rel="noreferrer">
                                    <img src={item.src} alt={item.alt} width="40px" height="40px" className='footer_icon' />
                                </a>
                            )
                        })}

                    </div>
                </div>
            </footer>

            <div className='dividing_line'></div>
        </>
    )
}