import HomeProjects from "./HomeProjects/HomeProjects";
import HomeSkills from "./HomeSkills/HomeSkills";
import HomeWelcome from "./HomeWelcome/HomeWelcome";
import Works from "./Works/Works";



export default function Home() {
    return (
        <>
            <HomeWelcome />
            <Works />
            <HomeProjects />
            <HomeSkills />
        </>
    )
}