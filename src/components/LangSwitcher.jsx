import React, {useContext, useEffect, useState} from "react";
import { LanguageContext } from "../context/LanguageContext";


const LangSwitcher = () => {
    const { language, langScripts, setLanguage } = useContext(LanguageContext)
    const {langs} = langScripts
    const [ showLangs, setShowLangs ] = useState(false)

    const changeLanguage = (newLanguage) => {

        switch(newLanguage) {
            case "EN":
                setLanguage("english")
                break;
            case "ES":
                console.log("ES")
                setLanguage("spanish")
                break;
            case "RU":
                console.log("RU")
                setLanguage("russian")
                break;
            case "PT":
                console.log("PT")
                setLanguage("portuguese")
                break;
        }
        
    }

    const openLangMenu = () => {
        setShowLangs(prev => !prev)
    }

    return (
        <li onClick={openLangMenu} className="nav-li nav-langSwitcher dropdown-toggle">
            {langScripts.langs[language]}
            {showLangs && <ul className="dropdown-menu">
                {Object.values(langs).map((lang) => {
                    return(
                        <li onClick={({target}) => changeLanguage(target.innerHTML)} key={lang}>{lang}</li>
                    )
                })}
                
            </ul>}
        </li>
    )
}

export default LangSwitcher