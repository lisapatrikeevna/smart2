import React, {useState} from 'react';
import cl from './header.module.scss'
import logo from './../img/logo.png'
import {NavLink} from "react-router-dom";
import {Link, animateScroll as scroll} from "react-scroll";
import "./forBars.css";
import menu from './../img/menu.png';
import style from "./commonStyle.module.css";
import {ExampleModal} from "./modalForm/exampleModal";
import {Form, FormIn} from "../components/Form/Form";

export const Header = () => {
    return (
        <div className={cl.header}>
            <div className={`${style.container} ${cl.container}`}>
                <NavLink to='https://lisapatrikeevna.github.io/tools-bar/'>
                    <img src={logo} alt="letLogo"  className={cl.logo}/></NavLink>
                <Nav/>
            </div>
        </div>
    )
}
export const Nav = () => {
    let [collaps, setCollaps] = useState(false)
    let [hidden, setHidden] = useState(false)
    let [popupId, setPopupId] = useState('')
    let onStyle = {}
    if (window.innerWidth <= 2000) {
        onStyle = {
            visibility: collaps ? "visible" : "collapse"
        }
    }
    const onClickHandler = () => {
        setCollaps(!collaps)
    }
    const regOnClick = () => {
        setHidden(!hidden)
        setPopupId("1")
    }
    const logOnClick = () => {
        setHidden(!hidden)
        setPopupId("2")
    }
    const cancel = () => {
        setHidden(!hidden)
    }
    return (
        <div className={cl.nav}>
            <ul className={cl.desktop}>
                <li><span onClick={logOnClick}  id='2'>LOG IN</span></li>
                <li><span onClick={regOnClick}  id='1'>SIGN UP</span></li>
                <img src={menu} className={cl.iconMenu} onClick={onClickHandler}/>
            </ul>
            <ul style={onStyle} className={cl.mobile}>
                <li><Link to='#' duration={500} spy={true} smooth={true}>some text</Link></li>
                <li><Link to='#' duration={500} spy={true} smooth={true}>some text</Link></li>
                <li><Link to='#' duration={500} spy={true} smooth={true}>some text</Link></li>
                <li><Link to='#' duration={500} spy={true} smooth={true}>some text</Link></li>
                <li><Link to='#' duration={500} spy={true} smooth={true}>LOG IN</Link></li>
                <li><Link to='#' duration={500} spy={true} smooth={true}>SIGN UP</Link></li>
            </ul>
            <ExampleModal collapse={hidden && popupId === '1'} closed={cancel}
                          children={<Form onCansel={cancel}/>}/>
            <ExampleModal collapse={hidden && popupId === '2'} closed={cancel}
                          children={<FormIn onCansel={cancel}/>}/>
        </div>
    )
}