import { useReducer } from 'react';
import './ContactForm.scss';


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


    const initialData = {
        name: "",
        email: "",
        subject: "",
        message: ""
    }


    const [data, dispatch] = useReducer(reducer, initialData);


    async function SendMessage(evt) {
        evt.preventDefault();

        let valid_name = /^[A-Za-z]+$/;
        let valid_email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        console.log("Name " + data.name.match(valid_name));
        console.log(data.email.match(valid_email));

        if (
            data.name.match(valid_name) &&
            data.email.match(valid_email) &&
            data.subject &&
            data.message
        ) {
            console.log("All inputs valid, All inputs valid, All inputs valid");
            console.log(data);

            await fetch("/db/contact/message", {
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

    console.log(data);


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

                    </div>



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