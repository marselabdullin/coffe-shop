import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../logo/Logo.svg';

function Header() {
    return(
        <div className="row">
            <div className="col-lg-6">
                <header>
                    <ul className="header">
                        <li className="header__item">
                        <Link to="/">
                            <img src={Logo} alt="logo"/>
                        </Link>
                        </li>
                        <li className="header__item">
                        <Link to="/coffee/">Our coffee</Link>
                        </li>
                        <li className="header__item">
                        <Link to="/goods/">For your pleasure</Link>
                        </li>
                    </ul>
                </header>
            </div>
        </div>
        
    )
}

export default Header;