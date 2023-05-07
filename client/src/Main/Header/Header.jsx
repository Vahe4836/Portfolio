import { Link } from "react-router-dom";
import github_icon from '../../images/home_icons/github_icon_header.png';
import "./Header.scss";


export default function Header() {
    return (
        <div className="header">
            <div className="header_block">
                <div className="github_link_block">
                    <img src={github_icon} alt="github_icon" className="github_icon" />
                    <a href="https://github.com/vahehovakimyan" className="github_link" target="_blank" rel="noreferrer">
                        My GitHub
                    </a>
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