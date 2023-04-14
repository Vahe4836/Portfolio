import "./Header.scss";


export default function Header() {
    return (
        <div className="header">
            <div className="header_block">
            <div className="github_link_block">
                <div className="github_link">My GitHub</div>
            </div>
            <div className="router_div">
                <p className="router_text">Home</p>
                <p className="router_text">Projects</p>
                <p className="router_text">Skills</p>
                <p className="router_text">Contact</p>
            </div>
        </div>
        </div>
    )
}