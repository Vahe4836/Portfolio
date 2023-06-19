import "./MessageItem.scss";



export default function MessageItem({ messageData }) {



    return (
        <>
            {messageData.map((item) => {
                return (
                    <div className="message_item">
                        <div className="message_item_elements">
                            <div className="div_info">
                                <p>Name: {item.name}</p>
                                <p>Email: {item.email}</p>
                                <p>Subject: {item.subject}</p>
                                <p>Message: {item.message}</p>
                            </div>
                            <div className="buttons_div">
                                <button className="button">Favorite</button>
                                <button className="button">Delete</button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}