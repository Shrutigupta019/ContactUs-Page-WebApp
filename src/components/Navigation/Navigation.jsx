import React from 'react'
import style from './Navigation.module.css'

function Navigation() {
  return (
        <nav className={`${style.navigation} container`}>
        <div className='logo'>
          <img src="./images/logo.png" alt="doSomething"/>
        </div>
        <ul>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
      </nav>
  )
}

export default Navigation
