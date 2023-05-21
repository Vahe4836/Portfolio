import linkedin_icon from '../../../../images/footer_icons/social/footer_linkedin_icon.png';
import github_icon from '../../../../images/footer_icons/social/footer_github_icon.png';
import facebook_icon from '../../../../images/footer_icons/social/footer_facebook_icon.png';
import instagram_icon from '../../../../images/footer_icons/social/footer_instagram_icon.png';
import arrow_icon from '../../../../images/contact_icons/arrow_icon.png';
import './Social.scss';
import { useEffect,useState } from 'react';



export default function Social() {

    const [socialData,setSocialData] = useState([]);


    useEffect(() => {
        fetch("/db/contact/social")
            .then((data) => data.json())
            .then((result) => {
                console.log(result);
                setSocialData(result);
            })
    },[])


    return (
        <section className='social_div_section'>

            {socialData.map((item) => {
                return (
                    <div
                        className='social_div'
                        id={item.id}
                        style={{ background: `linear-gradient(90deg, ${item.background_from}, ${item.background_to})` }}
                    >

                        <div className='social_div_elements'>
                            <img src={item.image} alt={item.alt} width="40px" height="40px" className='social_div_icon' />
                            <p className='social_div_text'>{item.text}</p>
                            <a href={item.href} target='_blank' rel="noreferrer" className='social_div_link'>
                                <img src={arrow_icon} alt="arrow_icon" width="40px" height="40px" />
                            </a>
                        </div>
                    </div>
                )
            })}

        </section>
    )
}