import React, { useState, Component } from 'react'
import './Header.css'
import logo from '../images/Logo.jpg';
import MenuList from './Menu'
import { Link } from 'react-router-dom';

export default class Header extends Component {
  
  state = { clicked: false }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked})
  }  
    render() {
        return (
              <div className="header active">
                  {/** Logo */}
                  <div className="header__logo">
                    <Link to="/">
                    <img src={logo} alt='logo' className='img' onClick={this.handleClick} />
                    </Link>
                  </div>
        
                    {/** Menus */}
                  <div className={this.state.clicked ? 'menu__container active' : 'menu__container'}>
                    {MenuList.map ((item, index) => {
                        return(
                          <Link to={item.path} >
                            <div key={index} className={item.cName} onClick={this.handleClick}>
                                <p>{item.title}</p>
                            </div>
                            </Link>
                        )
                      })}
                      <Link to="about"><p className="menu1" onClick={this.handleClick}>Hello</p></Link>
                      <Link><p className="menu1" onClick={this.handleClick}>Hello</p></Link>
                  </div>

                    <div className='header__right__container'>
                      <div className="header__right">
                        <Link to="about">
                        <p>Lorem ipsum</p>
                        </Link>
                        <Link to="/#">
                        <p>Lorem ipsum</p>
                        </Link>
                        
                      </div>
                    </div>
                    <div className="icon" onClick={this.handleClick}> 
                        <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                   </div>
               </div>
        )
    }
}
