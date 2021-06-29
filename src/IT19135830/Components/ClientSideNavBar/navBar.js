import React, { Component } from 'react'
import navbarCss from'../../Stylesheets/navbar.css'

class navBar extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>

                <nav className="navbar navbar-expand-lg navbar-light " style={{background: 'transparent',color: '#FFFFFF'}}>
                    <div className=" container-fluid">
                        <div className="collapse navbar-collapse d-flex justify-content-around">
                            <ul className="navbar-nav navTitles">
                            <li className="nav-item">
                                <a className="nav-link navbar-brand active" href="/home-page" >
                                        Home
                                    </a>
                                </li>
                            </ul>
                            <ul className="navbar-nav navTitles">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle navbar-brand" href="/home" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Key Speakers
                                    </a>
                                    <ul className="dropdown-menu navTitles" aria-labelledby="navbarDarkDropdownMenuLink" style={{background:'white',outlineColor:'transparent' }}>
                                        <li><a className="dropdown-item navbar-brand"  href="/researchers">Researchers</a></li>
                                        <li><a className="dropdown-item navbar-brand" href="/presenters">Workshop Presenters</a></li>
                                    </ul>
                                </li>
                            </ul>

                            <ul className="navbar-nav navTitles">
                                <li className="nav-item">
                                    <a className="nav-link navbar-brand active" href="/user-login" >
                                        Agenda
                                    </a>
                                </li>
                            </ul>

                            <ul className="navbar-nav navTitles">
                                <li className="nav-item">
                                    <a className="nav-link navbar-brand active" href="/user-login" >
                                        Workshops
                                    </a>
                                </li>
                            </ul>

                            <ul className="navbar-nav navTitles">
                                <li className="nav-item">
                                    <a className="nav-link navbar-brand active" href="/user-login" >
                                        Research Titles
                                    </a>
                                </li>
                            </ul>


                            <ul className="navbar-nav navTitles">
                                <li className="nav-item">
                                    <a className="nav-link navbar-brand active" href="/user-login" >
                                        Login
                                    </a>
                                </li>
                            </ul>

                        <ul className="navbar-nav navTitles">
                            <li className="nav-item">
                                <a className="nav-link navbar-brand active" href="/register" >
                                        Register
                                    </a>
                                </li>
                            </ul>


                        </div>
                    </div>
                    <hr/>
                </nav>
            </div>
        )
    }
}

export default navBar