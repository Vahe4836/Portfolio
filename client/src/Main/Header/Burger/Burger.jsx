import { Link } from "react-router-dom";
import './Burger.scss';


// Burger header component


export default function Burger({burgerBool, setBurgerBool}) {

    const onChangeBurgerState = () => {
        setBurgerBool(!burgerBool);
    }

    return (

        <div className={burgerBool ? "burger_header" : "burger_header_hidden"}>

            {/* Burger main block div */}

            <div className='header_router_div_burger'>
                <Link to="/" className='link' onClick={onChangeBurgerState}>
                    <div className='header_router_element_burger'>Home</div>
                </Link>

                <Link to="/projects" className='link' onClick={onChangeBurgerState}>
                    <div className='header_router_element_burger'>Projects</div>
                </Link>

                <Link to="/skills" className='link' onClick={onChangeBurgerState}>
                    <div className='header_router_element_burger'>Skills</div>
                </Link>

                <Link to="/contact" className='link' onClick={onChangeBurgerState}>
                    <div className='header_router_element_burger'>Contact</div>
                </Link>
            </div>

        </div>

    )
}