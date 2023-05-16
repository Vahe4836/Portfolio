import { useReducer,useState } from 'react';
import './ContactForm.scss';


function reducer(state,action) {
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
    else if (action.type === "send_info") {
        return {
            ...state,
            send: action.payload.send
        }
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


    const [data,dispatch] = useReducer(reducer,initialData);


    function SendMessage(evt) {
        evt.preventDefault();
        data = {
            name: "",
            email: "",
            subject: "",
            message: ""
        };
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

                    </div>

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


                    <div className='send_button_div'>

                        <button
                            className='send_button'
                            onClick={(evt) => {
                                let valid_bool;
                                // console.log("NaN " + isNaN(data.name));
                                // console.log("Finite " + isFinite(data.name));
                                let valid_name = /^[A-Za-z]+$/;
                                let valid_email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                                console.log("Name " + data.name.match(valid_name));
                                console.log("Email " + data.email.match(valid_email));
                                dispatch({
                                    type: "send_info",
                                    payload: {
                                        send: valid_bool
                                    }
                                })
                            }}
                        >
                            Send message!
                        </button> 

                    </div>

                </form>

            </div>
        </div>
    )
}