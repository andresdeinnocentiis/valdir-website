import React, {useContext} from "react";
import { LanguageContext } from "../context/LanguageContext";
import {NavLink} from "react-router-dom"
import { PATHS } from "../routes/routes";


const NavItem = (props) => {
    const { language } = useContext(LanguageContext)

    return(
        <>
        {PATHS.map((path) => {
            
            return(
                <li key={path.pathId} className="nav-li">
                    <NavLink style={props.styles} exact activeClassName="activeLink" className="nav-link" to={path.path}>{path.pathName[language]}</NavLink>
                </li>
            )
        })}
        </>
    )
}

export default NavItem