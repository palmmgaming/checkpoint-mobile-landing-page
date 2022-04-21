import React from 'react'
import './Header.css'
import checkpoint_logo from './images/Dark Checkpoint logo with text.png'

function Header() {
  return (
    <div className="header">
        <div className='container'>
            <div className='header-con'>
                <div className='logo-container'>
                <img width="150px" height="auto" className="img-responsive" src={checkpoint_logo}  alt="logo" />
                </div>
                <ul className='menu'>
                    <li className='menu-link'>
                        <a href="#">EN</a>
                    </li>
                </ul>
                <div className='mobile-menu'>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Header