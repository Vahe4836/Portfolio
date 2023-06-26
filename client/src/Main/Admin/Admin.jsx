import { useEffect, useState } from "react";
import MessageItem from "./MessageItem/MessageItem";
import MessageEmptyComp from "./MessageEmptyComp/MessageEmptyComp";
import "./Admin.scss";
import LoginComp from "./Login/LoginComp";



export default function Admin() {

    const [messageData, setMessageData] = useState([]);
    const [regBool, setRegBool] = useState(false);


    // const [msgDataBool, setMsgDataBool] = useState(true);


    const onDelete = function (id) {

        (async function () {

            await fetch("/db/contact/message/export", {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                body: JSON.stringify({
                    id: id
                })
            });


            await fetch("/db/contact/message/export")
                .then((stream) => stream.json())
                .then((data) => {
                    setMessageData(data);
                })

        })()

    }


    useEffect(() => {
        fetch("/db/contact/message/export")
            .then((stream) => stream.json())
            .then((data) => {
                setMessageData(data);
            })
    }, []);


    return (
        <article className="message_article">


            {regBool ?
                <>
                    {
                        <>
                            <h1 className="message_title">Messages</h1>
                            <div className="messages_div">
                                !(messageData.length === 0) ?
                                <MessageItem
                                    messageData={messageData}
                                    onDelete={onDelete}
                                />
                            </div>

                            : <MessageEmptyComp />
                        </>
                    }
                </>
                :
                <LoginComp
                    regBool={regBool}
                    setRegBool={setRegBool}
                />
            }

            {/* {!(messageData.length === 0) ?
                    <MessageItem
                        messageData={messageData}
                        onDelete={onDelete}
                    />
                    : <MessageEmptyComp />
                } */}

            {/* </div> */}
        </article>
    )
}