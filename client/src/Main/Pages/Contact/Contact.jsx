import linkedin_icon from '../../../images/footer_icons/social/footer_linkedin_icon.png';
import github_icon from '../../../images/footer_icons/social/footer_github_icon.png';
import facebook_icon from '../../../images/footer_icons/social/footer_facebook_icon.png';
import instagram_icon from '../../../images/footer_icons/social/footer_instagram_icon.png';
import arrow_icon from '../../../images/contact_icons/arrow_icon.png';
import './Contact.scss';



export default function Contact() {
    return (
        <div className='contact_page'>
            <section className='social_div_section'>

                <div className='social_div_linkedin'>
                    <div className='social_div_elements'>
                        <img src={linkedin_icon} alt="linkedin_icon" width="40px" height="40px" className='social_div_icon' />
                        <p className='social_div_text'>Contact with me on Linkedin.</p>
                        <a href="https://www.linkedin.com/in/vahe-hovakimyan-a0368a22a" target='_blank' rel="noreferrer" className='social_div_link'>
                            <img src={arrow_icon} alt="arrow_icon" width="40px" height="40px" />
                        </a>
                    </div>
                </div>

                <div className='social_div_github'>
                    <div className='social_div_elements'>
                        <img src={github_icon} alt="github_icon" width="40px" height="40px" className='social_div_icon' />
                        <p className='social_div_text'>Follow me on Github.</p>
                        <a href="https://github.com/VaheHovakimyan" target='_blank' rel="noreferrer" className='social_div_link'>
                            <img src={arrow_icon} alt="arrow_icon" width="40px" height="40px" />
                        </a>
                    </div>
                </div>


                <div className='social_div_facebook'>
                    <div className='social_div_elements'>
                        <img src={facebook_icon} alt="facebook_icon" width="40px" height="40px" className='social_div_icon' />
                        <p className='social_div_text'>Contact with me on Facebook.</p>
                        <a href="https://www.facebook.com/vahe.hovakimyan.963" target='_blank' rel="noreferrer" className='social_div_link'>
                            <img src={arrow_icon} alt="arrow_icon" width="40px" height="40px" />
                        </a>
                    </div>
                </div>


                <div className='social_div_instagram'>
                    <div className='social_div_elements'>
                        <img src={instagram_icon} alt="instagram_icon" width="40px" height="40px" className='social_div_icon' />
                        <p className='social_div_text'>Contact with me on Instagram.</p>
                        <a href="https://www.instagram.com/vahe.h.789/" target='_blank' rel="noreferrer" className='social_div_link'>
                            <img src={arrow_icon} alt="arrow_icon" width="40px" height="40px" />
                        </a>
                    </div>
                </div>

            </section>



            <div className='form_div_flex'>
                <div className='form_div'>

                    <h1 className='contact_me_title'>Contact me</h1>

                    <p className='contact_me_text'>
                        I am interested in both office jobs and freelance opportunities.
                        However, if you have any other query or question,
                        don't hesitate to use the form.
                    </p>

                    <div className="name_Email_div">
                        <input type="text" placeholder='Name' className='input_style' />
                        <input type="text" placeholder='E-mail' className='input_style' />
                    </div>

                    <input type="text" placeholder='Subject' className='input_style_subject' />
                    <textarea name="message" id="" cols="30" rows="10" placeholder='Message' className='textarea_style'></textarea>

                    <div className='send_button_div'>
                        <button className='send_button'>Send</button>
                    </div>

                </div>
            </div>



        </div>
    )
}