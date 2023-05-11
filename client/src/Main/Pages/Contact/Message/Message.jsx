import { useReducer,useState } from 'react';
import './Message.scss';

function reducer(state,action) {
    if (action.type === "name") {
        return {
            ...state,
            name: action.payload.name
        }

    }
    // else if(){

    // }
    // else if(){

    // }
    // else if(){

    // }
    else {
        return state;
    }
}


export default function Message() {

    const initialData = {
        name: "",
        email: "",
        subject: "",
        message: ""
    }

    const [data,dispatch] = useReducer(reducer,initialData);


    // function setNameValue(evt) {
    //     setName(evt.target.value);
    // }

    // function setEmailValue(evt) {
    //     setEmail(evt.target.value);
    // }

    // function setSubjectValue(evt) {
    //     setSubject(evt.target.value);
    // }

    // function setMessageValue(evt) {
    //     setMessage(evt.target.value);
    // }


    function SendMessage(evt) {
        evt.preventDefault();
        // setName("");
        // setEmail("");
        // setSubject("");
        // setMessage("");
    }


    // const [name,setName] = useState("");
    // const [email,setEmail] = useState("");
    // const [subject,setSubject] = useState("");
    // const [message,setMessage] = useState("");


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
                            value={state.name}
                            onChange={(evt) => {
                                dispatch({
                                    type: "name",
                                    payload: {
                                        name: evt.target.value
                                    }
                                })
                            }}
                        />
                        {name}

                        <input
                            type="text"
                            placeholder='E-mail'
                            className='input_style'
                        // value={email}
                        // onChange={setEmailValue}
                        />

                    </div>

                    <input
                        type="text"
                        placeholder='Subject'
                        className='input_style_subject'
                    // value={subject}
                    // onChange={setSubjectValue}
                    />

                    <textarea
                        name="message"
                        cols="30"
                        rows="10"
                        placeholder='Message'
                        className='textarea_style'
                    // value={message}
                    // onChange={setMessageValue}
                    ></textarea>


                    <div className='send_button_div'>

                        <button
                            className='send_button'
                            onClick={SendMessage}
                        >
                            Send message!
                        </button>

                    </div>

                </form>

            </div>
        </div>
    )
}