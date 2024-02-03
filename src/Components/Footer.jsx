import React from 'react'
import '../style/Footer.css'
import footer__logo from '../img/footer__logo.png'
function Footer() {
  return (
    <footer>
        <div className='container'>
            <div className='footer__wrapper'>
                <div className='footer__logo'>
                    <img src={footer__logo} alt="" />
                </div>
                <nav className='footer__list'>
                    <ul>
                        <li>Main</li>
                        <li>About</li>
                        <li>Game features</li>
                        <li>System requirements</li>
                        <li>Quotes</li>
                    </ul>
                </nav>
            </div>
            <div className='footer__line'>

            </div>
            <div className='footer__grid'>
                <h2>
                © 2018 Outpost Games, Inc. All Rights Reserved
                </h2>
                <h3>
                Privacy Policy | Terms of Services | Code of Conduct 
                </h3>
            </div>
        </div>
    </footer>
  )
}

export default Footer