import { Link } from "react-router-dom";
import "./Header.scss";


export default function Header() {
    return (
        <div className="header">
            <div className="header_block">
                <div className="github_link_block">
                    <div className="github_icon"></div><a href="https://github.com/Vahe4836" className="github_link">My GitHub</a>
                </div>
                <nav>

                    <div className="router_div">
                        <Link to="/" className="router_text">
                            <p>Home</p>
                        </Link>
                        <Link to="/projects" className="router_text">
                            <p>Projects</p>
                        </Link>
                        <Link to="/skills" className="router_text">
                            <p>Skills</p>
                        </Link>
                        <Link to="/contact" className="router_text">
                            <p>Contact</p>
                        </Link>


                    </div>
                </nav>
            </div>
        </div>
    )
}