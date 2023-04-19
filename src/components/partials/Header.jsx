import { useState } from 'react';

import Nav from './Nav';
import '../../assets/css/header.css';

import Logo from '../../assets/images/logo.png';
import NavButtonLine from '../../assets/images/icons/nav-button-line.png';

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);

    return(
        <header className="flex column nowrap gap-mid">
            <div className="header-top flex row nowrap align-center gap-lrg">
                <a href="/" className="header-logo">
                    <img src={Logo} alt="Web Panel Logo" />
                </a>
                <button className={"header-nav-toggle active " + (navOpen && "open")} type="button" onClick={() => setNavOpen(!navOpen)}>
                    <img src={NavButtonLine} alt="" />
                    <img src={NavButtonLine} alt="" />
                    <img src={NavButtonLine} alt="" />
                </button>
            </div>
            <Nav className="header-nav not-mobile" />
            {navOpen && <Nav className="header-nav" />}
        </header>
    )
};

export default Header;