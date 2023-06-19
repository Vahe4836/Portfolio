import { useEffect, useState } from "react";
import MessageItem from "./MessageItem/MessageItem";
import "./Admin.scss";
import MessageEmptyComp from "./MessageEmptyComp/MessageEmptyComp";



export default function Admin() {

    const [messageData, setMessageData] = useState([]);
    // const [msgDataBool, setMsgDataBool] = useState(true);

    useEffect(() => {
        fetch("/db/contact/message")
            .then((stream) => stream.json())
            .then((data) => {
                setMessageData(data);
                // if (data.length === 0) {
                //     setMsgDataBool(false);
                // }
                // setMsgDataBool(data.length !== 0);
            })
    }, []);

    console.log("Message Data", messageData);
    // console.log("Message Bool", msgDataBool);

    return (
        <article className="message_article">
            <h1 className="message_title">Messages</h1>
            <div className="messages_div">

                {!(messageData.length === 0) ?
                    <MessageItem
                        messageData={messageData}
                    />
                    : <MessageEmptyComp />
                }

            </div>
        </article>
    )
}