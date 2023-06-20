import { useEffect, useState } from "react";
import MessageItem from "./MessageItem/MessageItem";
import MessageEmptyComp from "./MessageEmptyComp/MessageEmptyComp";
import "./Admin.scss";


export default function Admin() {

    const [messageData, setMessageData] = useState([]);
    // const [msgDataBool, setMsgDataBool] = useState(true);



    useEffect(() => {
        fetch("/db/contact/message/export")
            .then((stream) => stream.json())
            .then((data) => {
                setMessageData(data);
            })
    }, []);

    const onDelete = (messageData, id) => {

        // const key_obj = [
        //     {
        //         id: id
        //     }
        // ];

        // (async function () {
        fetch("/db/contact/message/export", {
            method: 'post',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({
                id: id
            })
        });

        // let result = await response.json();
        // alert(result.message);
        // })()
        // console.log("messageData", messageData);
        // console.log("id", id);
        // const data = messageData.filter((item) => item._id !== id);
        // console.log(data);

        // (async () => {
        //     let response = await fetch("/db/contact/message", {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify(data)
        //     });

        //     let result = await response.json();
        //     alert(result.message);
        // })()

        // console.log(messageData.filter((item) => item._id !== id));
        // console.log("messageData22222", messageData);
    }


    return (
        <article className="message_article">
            <h1 className="message_title">Messages</h1>
            <div className="messages_div">

                {!(messageData.length === 0) ?
                    <MessageItem
                        messageData={messageData}
                        onDelete={onDelete}
                    />
                    : <MessageEmptyComp />
                }

            </div>
        </article>
    )
}