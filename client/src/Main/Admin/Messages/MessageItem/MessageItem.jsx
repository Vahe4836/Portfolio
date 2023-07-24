import "./MessageItem.scss";




export default function MessageItem({ messageData, onDelete }) {


    return (
        <>
            {messageData.map((item) => {
                return (
                    <div className="message_item" key={item._id}>
                        <div className="message_item_elements">

                            <div className="div_info">
                                <p>Name: {item.name}</p>
                                <p>Email: {item.email}</p>
                                <p>Subject: {item.subject}</p>
                                <p>Message: {item.message}</p>
                            </div>

                            <div className="buttons_div">
                                <button className="button">Favorite</button>
                                <button className="button" onClick={(evt) => {
                                    evt.preventDefault();
                                    onDelete(item._id);
                                }}>Delete</button>
                            </div>
                            
                        </div>
                    </div>
                )
            })}
        </>
    )
}