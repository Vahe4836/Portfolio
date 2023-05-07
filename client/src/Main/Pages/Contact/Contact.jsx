import './Contact.scss';



export default function Contact() {
    return (
        <div className='contact_page'>

            <div className='social_div_section'>
                <div className='social_div'></div>
                <div className='social_div'></div>
                <div className='social_div'></div>
                <div className='social_div'></div>
            </div>

            <div className='form_div'>
                <input type="text" placeholder='Name' className='input_style' />
                <input type="text" placeholder='E-mail' className='input_style' />
                <input type="text" placeholder='Subject' className='input_style' />
                <textarea name="message" id="" cols="30" rows="10" placeholder='Message' className='textarea_style'></textarea>
            </div>

        </div>
    )
}