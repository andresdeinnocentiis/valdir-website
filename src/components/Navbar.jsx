import React, {useContext, useEffect, useState} from "react";
import { LanguageContext } from "../context/LanguageContext";
import {NavLink} from "react-router-dom"
import NavItem from "./NavItem";
import LangSwitcher from "./LangSwitcher";

const Navbar = () => {
    const { language, langScripts  } = useContext(LanguageContext)

    const [navbarOpen, setNavbarOpen] = useState(false)

    const handleToggle = () => {
        setNavbarOpen(prev => !prev)

    }

    const styles = {
        nav: {
            backgroundColor: langScripts.colorCombinations[language].backgroundColor,
            color: langScripts.colorCombinations[language].textColor,
        },
        link: {
            color: langScripts.colorCombinations[language].textColor,
        }
    }

    
    window.addEventListener("resize", () => {
        if(window.innerWidth > 500) {
            setNavbarOpen(false)
        }
    })
    
    return(
        <nav style={styles.nav} className="nav">
            <div className="nav-collapsed">
                {!navbarOpen && <div className="nav-logo"><NavLink style={styles.link} className='logoLink' to={"/"}>VB.</NavLink></div>}

                <div onClick={handleToggle} className="hamb-menu">
                    {navbarOpen ? <i className="fa fa-close"></i> : <i className="fa fa-bars"></i>}
                </div>
            </div>
            <div className='nav-container'>

                {navbarOpen && 
                <div className="nav-menu">
                    <ul className="nav-ul">
                        <NavItem styles={styles.link} />
                        <LangSwitcher />
                    </ul>
                </div>}
            </div>
        </nav>
    )
}

export default Navbar