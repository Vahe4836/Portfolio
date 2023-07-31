import { useEffect, useState } from "react";
import SkillsEditMain from "./SkillsEdit/SkillsEdit";
import MessageMain from "./Messages/MessagesMain";
// import LoginComp from "./Login/LoginComp";
import "./Admin.scss";
import ProjectsEdit from "./ProjectsEdit/ProjectsEdit";



export default function Admin() {

    // const [messageData, setMessageData] = useState([]);

    const [projectsData, setProjectsData] = useState([]);
    // const [regBool, setRegBool] = useState(false);

    // const [msgDataBool, setMsgDataBool] = useState(true);


    return (
        <>

            <SkillsEditMain />

            <ProjectsEdit />

            <MessageMain />

        </>
    )
}