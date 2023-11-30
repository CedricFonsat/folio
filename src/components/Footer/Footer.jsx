import React from 'react'
import './Footer.css'
import instagram from '../../assets/insta.gif'

const Footer = () => {
    return (
        <footer>
            <div className='footer-top'>
                <div className='footer-logo'>
                    <p>Logo&</p>
                    <p>logo</p>
                </div>

                <div className='footer-animate'></div>
            </div>

            <div className='footer-social-media'>
                <div>
                    <img className='img' src={instagram} alt="loading..." />
                    <p>logoname</p>
                </div>
                <p>bart@youngandhandsome.nl</p>
            </div>

            <hr />
            <div className='footer-bottom'>
                <p>Copyright Logo 2023</p>
                <p>LOGO</p>
                <p>Privacy policy</p>
            </div>
        </footer>
    )
}

export default Footer
