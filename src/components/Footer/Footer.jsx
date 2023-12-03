import React from 'react'
import './Footer.css'
import instagram from '../../assets/insta.gif'
import animate from '../../assets/email.gif'

const Footer = () => {
    return (
        <footer>
            <div className='footer-top'>
                <div className='footer-logo'>
                    <p>CEDRIC</p>
                    <p>FONSAT</p>
                </div>

                <div className='footer-animate'>
                    <img src={animate} alt="animate email" srcset="" />
                </div>
            </div>

            <div className='footer-social-media'>
                {/* <div>
                    <img className='img' src={instagram} alt="loading..." />
                    <p>logoname</p>
                </div> */}
                <p>contact@fonsat.ovh</p>
            </div>

            <hr />
            <div className='footer-bottom'>
                <p>Copyright CEDRIC FONSAT 2023</p>
                <div className='footer-bottom-logo'>
                <p>CEDRIC</p>
                <p>FONSAT</p>
                </div>
                <p>Privacy policy</p>
            </div>
        </footer>
    )
}

export default Footer
