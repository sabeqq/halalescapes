
import React from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa' 
import { MdFingerprint } from 'react-icons/md'
import ReactTags from 'react-tag-autocomplete'
import {MenuItems} from "./MenuItems"
import './Nav.css'
import logo from '../images/helogo.png';

class Nav extends React.Component{
    

    render() {
        return(
            <nav className="NavBarItems">
                <h1 className="navbar-logo"></h1>
                <div className="logo-image">
                 <img src={logo} alt="Logo" className="helogo"/>
                </div>
                <ul className="nav-menu">
                    {MenuItems.map((item,index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                                </li>
                             )
                    })}

                    
                </ul>
            </nav>



        )

    }


}

export default Nav
