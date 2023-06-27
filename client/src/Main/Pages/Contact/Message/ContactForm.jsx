import { useState } from 'react';
import './ContactForm.scss';
import './ContactFormMedia.scss';



export default function Message() {

    const [nameValid, setNameValid] = useState(false);
    const [emailValid, setEmailValid] = useState(false);
    const [subjectValid, setSubjectValid] = useState(false);
    const [messageValid, setMessageValid] = useState(false);

    const [nameValue, setNameValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [subjectValue, setSubjectValue] = useState("");
    const [messageValue, setMessageValue] = useState("");


    // let valid_name = /^[A-Za-z]+$/;
    const valid_email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


    const handleChange = (setState) => (event) => {
        setState(event.target.value)
    }


    async function SendMessage(evt) {
        evt.preventDefault();

        setNameValid(nameValue === "");
        setEmailValid(!(emailValue.match(valid_email) && emailValue !== ""));
        setSubjectValid(subjectValue === "");
        setMessageValid(messageValue === "");

        const data = {
            name: nameValue,
            email: emailValue,
            subject: subjectValue,
            message: messageValue
        }

        if (
            nameValue &&
            emailValue.match(valid_email) &&
            subjectValue &&
            messageValue
        ) {

            await fetch("/db/contact/message/import", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })

            setNameValue("");
            setEmailValue("");
            setSubjectValue("");
            setMessageValue("");

        }

    }



    return (
        <div className='form_div_flex'>
            <div className='form_div'>

                <h1 className='contact_me_title'>Contact me</h1>

                <p className='contact_me_text'>
                    I am interested in both office jobs and freelance opportunities.
                    However, if you have any other query or question,
                    don't hesitate to use the form.
                </p>

                <form onSubmit={SendMessage}>

                    <div className="name_Email_div">

                        <div className='input_div_and_invalid'>

                            <div className='input_div'>

                                <input
                                    type="text"
                                    placeholder='Name'
                                    className='input_style'
                                    value={nameValue}
                                    onChange={handleChange(setNameValue)}
                                />

                                <span className='focus-border'></span>

                            </div>

                            <p className={nameValid ? 'invalid_text' : 'valid_text'}>
                                <span className='invalid_valid_text'>
                                    Name is invalid.
                                </span>
                            </p>


                        </div>

                        <div className='input_div_and_invalid'>
                            <div className='input_div'>

                                <input
                                    type="text"
                                    placeholder='E-mail'
                                    className='input_style'
                                    value={emailValue}
                                    onChange={handleChange(setEmailValue)}
                                />

                                <span className='focus-border'></span>

                            </div>

                            <p className={emailValid ? 'invalid_text' : 'valid_text'}>
                                <span className='invalid_valid_text'>
                                    E-mail is invalid.
                                </span>
                            </p>

                        </div>

                    </div>

                    <div className='input_div_and_invalid'>
                        <div className='input_div'>

                            <input
                                type="text"
                                placeholder='Subject'
                                className='input_style_subject'
                                value={subjectValue}
                                onChange={handleChange(setSubjectValue)}
                            />

                            <span className='focus-border'></span>

                        </div>

                        <p className={subjectValid ? 'invalid_text' : 'valid_text'}>
                            <span className='invalid_valid_text'>
                                Subject input is empty.
                            </span>
                        </p>

                    </div>


                    <div className='input_div_and_invalid'>
                        <div className='input_div'>

                            <textarea
                                name="message"
                                cols="30"
                                rows="10"
                                placeholder='Message'
                                className='textarea_style'
                                value={messageValue}
                                onChange={handleChange(setMessageValue)}
                            ></textarea>

                            <span className='focus-border'></span>

                        </div>

                        <p className={messageValid ? 'invalid_text' : 'valid_text'}>
                            <span className='invalid_valid_text'>
                                Message input is empty.
                            </span>
                        </p>

                    </div>


                    <div className='send_button_div'>

                        <button
                            className='send_button'
                            onClick={(evt) => { SendMessage(evt) }}
                        >
                            Send message!
                        </button>

                    </div>

                </form>

            </div>
        </div>
    )
}