import React, {useContext} from "react";
import { LanguageContext } from "../context/LanguageContext";

const TogglerOpen = (props) => {

    const { language, langScripts  } = useContext(LanguageContext)

    const styles = {
        btn: {
            backgroundColor: langScripts.colorCombinations[language].textColor,
        },
    }

    return (
        <div  onClick={props.onClick} className={`nav__toggler ${props.toggleIcon}`}>
            <div style={styles.btn} className="line1"></div>
            <div style={styles.btn} className="line2"></div>
            <div style={styles.btn} className="line3"></div>
        </div>
    )
}

export { TogglerOpen }