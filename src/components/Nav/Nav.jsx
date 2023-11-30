import React from 'react'
import './Nav.css'
import IonIcon from '@reacticons/ionicons'

const Nav = () => {
    return (
            <nav className='nav'>
               <h1 className='logo'>Logo</h1>

               <div className='desktop-menu'></div>
               <div className='mobile-menu'>
                <IonIcon name='menu-outline' size='large' ></IonIcon>
               </div>
            </nav>
    )
}

export default Nav
