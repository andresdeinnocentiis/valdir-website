import React, {useContext, useState} from "react";
import { LanguageContext } from "../context/LanguageContext";


const LangSwitcher = () => {
    const { language, langScripts, setLanguage } = useContext(LanguageContext)
    const {langs} = langScripts
    const [ showLangs, setShowLangs ] = useState("")

    const styles = {
        p: {border: `2px solid ${langScripts.colorCombinations[language].textColor}`},
        lang: {color: langScripts.colorCombinations[language].textColor},
        ul: {borderBottom: `2px solid ${langScripts.colorCombinations[language].textColor}`}

    }

    const changeLanguage = (newLanguage) => {

        switch(newLanguage) {
            case "EN":
                setLanguage("english")
                break;
            case "ES":
                setLanguage("spanish")
                break;
            case "RU":
                setLanguage("russian")
                break;
            case "PT":
                setLanguage("portuguese")
                break;
        }
        
    }

    const openLangMenu = () => {
        /*setShowLangs(prev => !prev)*/
        !showLangs? setShowLangs("visible") : setShowLangs("")
    }

    return (
        <li onClick={openLangMenu} className="nav-langSwitcher dropdown-toggle">
            <p style={styles.p}>{langScripts.langs[language]}</p>
            
            <ul style={styles.ul} className={`dropdown-menu ${showLangs}`}>
                {Object.values(langs).map((lang) => {
                    return(
                        <li style={styles.lang} className="nav-li-lang" onClick={({target}) => changeLanguage(target.innerHTML)} key={lang}>{lang}</li>
                    )
                })}
                
            </ul>
        </li>
    )
}

export default LangSwitcher