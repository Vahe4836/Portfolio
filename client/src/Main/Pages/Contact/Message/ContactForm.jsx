import { useReducer, useState } from 'react';
import './ContactForm.scss';
import './ContactFormMedia.scss';


function reducer(state, action) {
    if (action.type === "name") {
        return {
            ...state,
            name: action.payload.name
        }
    }
    else if (action.type === "email") {
        return {
            ...state,
            email: action.payload.email
        }
    }
    else if (action.type === "subject") {
        return {
            ...state,
            subject: action.payload.subject
        }
    }
    else if (action.type === "message") {
        return {
            ...state,
            message: action.payload.message
        }
    }
    else if (action.type === "empty_info") {
        return action.payload.empty
    }
    return state;
}


export default function Message() {

    const [nameValid, setNameValid] = useState(false);
    const [emailValid, setEmailValid] = useState(false);
    const [subjectValid, setSubjectValid] = useState(false);
    const [messageValid, setMessageValid] = useState(false);


    // let valid_name = /^[A-Za-z]+$/;
    let valid_email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const initialData = {
        name: "",
        email: "",
        subject: "",
        message: ""
    }


    const [data, dispatch] = useReducer(reducer, initialData);


    async function SendMessage(evt) {
        evt.preventDefault();

        setNameValid(data.name === "");
        setEmailValid(!(data.email.match(valid_email) && data.email !== ""));
        setSubjectValid(data.subject === "");
        setMessageValid(data.message === "");


        if (
            data.name &&
            data.email.match(valid_email) &&
            data.subject &&
            data.message
        ) {

            await fetch("/db/contact/message/import", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })

            dispatch({
                type: "empty_info",
                payload: {
                    empty: {
                        name: "",
                        email: "",
                        subject: "",
                        message: ""
                    }

                }
            })
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
                                    value={data.name}
                                    onChange={(evt) => {
                                        dispatch({
                                            type: "name",
                                            payload: {
                                                name: evt.target.value
                                            }
                                        })
                                    }}
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
                                    value={data.email}
                                    onChange={(evt) => {
                                        dispatch({
                                            type: "email",
                                            payload: {
                                                email: evt.target.value
                                            }
                                        })
                                    }}
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
                                value={data.subject}
                                onChange={(evt) => {
                                    dispatch({
                                        type: "subject",
                                        payload: {
                                            subject: evt.target.value
                                        }
                                    })
                                }}
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
                                value={data.message}
                                onChange={(evt) => {
                                    dispatch({
                                        type: "message",
                                        payload: {
                                            message: evt.target.value
                                        }
                                    })
                                }}
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