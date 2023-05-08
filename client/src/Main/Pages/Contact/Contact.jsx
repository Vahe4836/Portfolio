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