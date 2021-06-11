import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaWhatsapp, FaArrowLeft } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

const Header = () => {

    const [sideMenuState, setSideMenu] = useState(false)

    const closeOpenSideMenu = () => {
        setSideMenu(!sideMenuState)
    }

    return (
        <div>
            <div className='header-grid-container'>
                {sideMenuState && <div className='side-menu'>
                    <FaArrowLeft onClick={() => closeOpenSideMenu()} />
                    <NavLink to='/' exact activeClassName='active-sidebar' className='header-navlink header-navlink-sidebar'>HOME</NavLink>
                    <NavLink to='/about' activeClassName='active-sidebar' className='header-navlink header-navlink-sidebar'>ABOUT</NavLink>
                    <NavLink to='/services' activeClassName='active-sidebar' className='header-navlink header-navlink-sidebar'>SERVICES</NavLink>
                    <NavLink to='/blog' activeClassName='active-sidebar' className='header-navlink header-navlink-sidebar'>PACKAGES</NavLink>
                    <NavLink to='/contact' activeClassName='active-sidebar' className='header-navlink header-navlink-sidebar'>CONTACT</NavLink>
                </div>}
                <NavLink to='/' exact activeClassName='title-active' className='header-title'>
                    <img src='http://www.learnquran.com.au/vendor/local/imgs/logo/learn-quran-logo.svg' />
                </NavLink>
                <div className='header-left-side'>
                    <NavLink to='/' exact activeClassName='active' className='header-navlink'>HOME</NavLink>
                    <NavLink to='/about' activeClassName='active' className='header-navlink'>ABOUT</NavLink>
                    <NavLink to='/services' activeClassName='active' className='header-navlink'>SERVICES</NavLink>
                    <NavLink to='/packages' activeClassName='active' className='header-navlink'>PACKAGES</NavLink>
                    <NavLink to='/contact' activeClassName='active' className='header-navlink'>CONTACT</NavLink>
                </div>
                <div className='header-right-side'>
                    <a href='#' className='header-right-side-link'>
                        <FaWhatsapp className='header-right-side-icon' />
                        <p className='header-right-side-title'>WHATSAPP</p>
                    </a>
                    <a href='#' className='header-right-side-link'>
                        <FiMail className='header-right-side-icon' />
                        <p className='header-right-side-title'>EMAIL-US!</p>
                    </a>
                </div>
                <FaBars className='side-menu-icon' onClick={() => closeOpenSideMenu()} />
            </div>
        </div>
    );
}

export default Header

// <NavLink to='/' exact activeClassName='title-active' className='header-title-md'>
// <img src='http://www.learnquran.com.au/vendor/local/imgs/logo/learn-quran-logo.svg' />
// </NavLink>


