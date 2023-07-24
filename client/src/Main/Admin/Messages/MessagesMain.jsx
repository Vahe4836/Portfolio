import MessageItem from "./MessageItem/MessageItem";
import MessageEmptyComp from "./MessageEmptyComp/MessageEmptyComp";



export default function MessageMain({ messageData, onDelete }) {



    return (

        <article className="message_article">

            {
                !(messageData.length === 0) ?

                    <>
                        <h1 className="message_title">Messages</h1>
                        <div className="messages_div">

                            <MessageItem
                                messageData={messageData}
                                onDelete={onDelete}
                            />

                        </div>
                    </>

                    : <MessageEmptyComp />
            }


            {/* // :
            // <LoginComp
            //     regBool={regBool}
            //     setRegBool={setRegBool}
            // /> */}

        </article>
    )
}