import React, {useContext, useState} from "react";
import { LanguageContext } from "../context/LanguageContext";
import {NavLink} from "react-router-dom"
import NavItem from "./NavItem";
import LangSwitcher from "./LangSwitcher";
import { TogglerOpen } from "./Toggler";

const Navbar = () => {
    const { language, langScripts  } = useContext(LanguageContext)

    const [navbarOpen, setNavbarOpen] = useState("")
    const [toggleIcon, setTogglerIcon] = useState("")


    const handleToggle = () => {
        navbarOpen ? setNavbarOpen("") : setNavbarOpen("nav__active")
        navbarOpen ? setTogglerIcon("") : setTogglerIcon("toggle")
        

    }

    const styles = {
        nav: {
            backgroundColor: langScripts.colorCombinations[language].backgroundColor,
            color: langScripts.colorCombinations[language].textColor,
        },
        navMenu: {
            backgroundColor: langScripts.colorCombinations[language].detailColorA,
            color: langScripts.colorCombinations[language].textColor,
        },
        link: {
            color: langScripts.colorCombinations[language].textColor,
        }
    }

    
    window.addEventListener("resize", () => {
        if(window.innerWidth > 500) {
            setNavbarOpen("")
            styles.navMenu.backgroundColor = langScripts.colorCombinations[language].backgroundColor
        } 
    })

    
    
    return(
        <nav id="navbar" className="sticky" style={styles.nav} >
            <div className="nav-collapsed">
                <div className="nav-logo"><NavLink style={styles.link} className='logoLink' to={"/"}>Valdir <br /><span>Bezerra.</span></NavLink></div>
                <TogglerOpen onClick={handleToggle} toggleIcon={toggleIcon}/>
                {/*<div onClick={handleToggle} className="hamb-menu">
                    /*navbarOpen ? <i className="fa fa-close"></i> : <i className="fa fa-bars"></i> 
                    </div>*/}
            </div>
            <div style={styles.navMenu} className={`nav-container ${navbarOpen}`}>          
                <div className="nav-menu">
                    <ul className="nav-ul">
                        <NavItem styles={styles.link} />
                        <LangSwitcher />
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar