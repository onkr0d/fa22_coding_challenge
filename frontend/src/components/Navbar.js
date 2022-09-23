import React from "react";
import {Link, useLocation} from "react-router-dom";
import Logo from "../images/h4i_logo.svg";

const Navbar = () => {
    const {pathname} = useLocation();

    return (<nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <Link to='/' className='navbar-brand px-2 mr-0'>
            <img
                src={Logo}
                alt='h4i_logo'
                style={{maxHeight: "60%", width: "80%"}}
            />
        </Link>
        <div className=''>
            <div className='navbar-nav'>
                <Link
                    className={`nav-item nav-link px-5 ${pathname === "/" ? "active" : ""}`}
                    to='/'
                >
                    Home
                </Link>
                <Link
                    className={`nav-item nav-link px-5 ${pathname === "/create" ? "active" : ""}`}
                    to='/create'
                >
                    Create Task
                </Link>
            </div>
        </div>
    </nav>);
};

export default Navbar;
