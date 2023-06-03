import { useEffect, useState } from 'react';
import arrow_icon from '../../../../images/contact_icons/arrow_icon.png';
import './Social.scss';
import './SocialMedia.scss';



export default function Social() {

    const [socialData, setSocialData] = useState([]);

    useEffect(() => {
        fetch("/db/contact/social")
            .then((data) => data.json())
            .then((result) => {
                setSocialData(result);
            })
    }, [])


    return (
        <section className='social_div_section'>

            {socialData.map((item) => {
                return (
                    <a href={item.href} className='to_social_pages'>
                        <div
                            className='social_div'
                            id={item.id}
                            style={{ background: `linear-gradient(90deg, ${item.background_from}, ${item.background_to})` }}
                        >

                            <div className='social_div_elements'>
                                <img src={item.image} alt={item.alt} width="40px" height="40px" className='social_div_icon' />
                                <p className='social_div_text'>{item.text}</p>
                                <a href={item.href} target='_blank' rel="noreferrer" className='social_div_link'>

                                    <div class="arrow_bounce">
                                        <img src={arrow_icon} alt="arrow_icon" className='arrow_image' width="40px" height="40px" />
                                    </div>

                                </a>
                            </div>
                        </div>
                    </a>

                )
            })}

        </section>
    )
}