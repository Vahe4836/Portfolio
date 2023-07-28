import { useEffect, useState } from "react";
import SkillsEditMain from "./SkillsEdit/SkillsEdit";
import MessageMain from "./Messages/MessagesMain";
// import LoginComp from "./Login/LoginComp";
import "./Admin.scss";



export default function Admin() {

    // const [messageData, setMessageData] = useState([]);

    const [projectsData, setProjectsData] = useState([]);
    // const [regBool, setRegBool] = useState(false);

    // const [msgDataBool, setMsgDataBool] = useState(true);


    // const onDelete = function (id) {

    //     (async function () {

    //         await fetch("/db/contact/message/export", {
    //             method: 'post',
    //             headers: {
    //                 'Content-Type': 'application/json; charset=UTF-8'
    //             },
    //             body: JSON.stringify({
    //                 id: id
    //             })
    //         });


    //         await fetch("/db/contact/message/export")
    //             .then((stream) => stream.json())
    //             .then((data) => {
    //                 setMessageData(data);
    //             })

    //     })()

    // }


    // useEffect(() => {

    //     fetch("/db/contact/message/export")
    //         .then((stream) => stream.json())
    //         .then((data) => {
    //             setMessageData(data);
    //         })

    // }, []);



    return (
        <>

            <SkillsEditMain />

            <MessageMain />

        </>
    )
}