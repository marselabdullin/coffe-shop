import React from 'react';
import {Link} from 'react-router-dom';
import LogoBlack from '../../logo/Logo_black.svg';
import BeansLogoDark from '../../logo/Beans_logo_dark.svg';

function Footer() {
    return(
        <footer>
        <div className="container">
            <div className="row">
                <div className="col-lg-5 offset-lg-4">
                    <ul className="footer">
                        <li className="footer__item">
                            <Link to="/">
                                <img src={LogoBlack} alt="logo"/>
                            </Link>
                        </li>
                        <li className="footer__item">
                            <Link to="/coffee/">Our coffee</Link>
                        </li>
                        <li className="footer__item">
                            <Link to="/goods/">For your pleasure</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <img className="beanslogo" src={BeansLogoDark} alt="Beans logo"/>
        </div>
    </footer>
    )
}

export default Footer;