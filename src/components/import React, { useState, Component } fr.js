import React, { useState, Component } from 'react'
import './Header.css'
import logo from '../images/Logo.jpg';
import MenuList from './Menu'

{/** export default class Header extends Component {
  
  
    render() {
     }
} */}

function Header() {
  
  const   state = { clicked: false }
  const handleClick = () => {
    this.setState({ clicked: !this.state.clicked})
  }
  return (
    <div className="header active">
        {/** Logo */}
        <div className="header__logo">
          <img src={logo} alt='logo' className='img' />
        </div>

          {/** Menus */}
        <div className='menu__container active'>
          {MenuList.map ((item, index) => {
              return(
                  <div key={index} className={item.cName}>
                      <p>{item.title}</p>
                  </div>
              )
          })}
        </div>

          <div className='header__right__container'>
          <div className="header__right">
            <p>About US</p>
            <p>contact US</p>
          </div>
          </div>
          <div className="icon" onClick={() => handleClick()}>  
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
         </div>
     </div>
)  
}

export default Header