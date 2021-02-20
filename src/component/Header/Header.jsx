import React from 'react';
import {Link} from "react-router-dom";
import './header.scss'

const Header = () =>{

    return(
        <header className="header">
            <div className="container">
                <div className="header__wrap">
                    <Link to="/">Home</Link>
                    <Link to="/history">History</Link>
                </div>
            </div>
        </header>
    )
}

export default Header