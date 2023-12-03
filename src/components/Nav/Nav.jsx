import React from 'react'
import './Nav.css'
import IonIcon from '@reacticons/ionicons'

const Nav = () => {
    return (
            <nav className='nav'>
               <div className='logo'>
               <h1>CEDRIC</h1>
               <h2>FONSAT</h2>
               </div>

               <div className='desktop-menu'></div>
               <div className='mobile-menu'>
                <IonIcon name='menu-outline' size='large' ></IonIcon>
               </div>
            </nav>
    )
}

export default Nav
