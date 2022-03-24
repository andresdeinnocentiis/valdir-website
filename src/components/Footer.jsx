import React, {useContext} from "react";
import { LanguageContext } from "../context/LanguageContext";
import stylesObj from "../styles/styles";
import { Link } from "react-router-dom";
import ButtonMailto from "./ButtonMailto";

const Footer = () => {

    const { language, langScripts  } = useContext(LanguageContext)
    const styles = stylesObj(langScripts, language)

    return (
        <footer className="footer">
            <p>{langScripts.footer.developed[language]} <Link style={styles.footer.link1} target="_blank" to="https://www.linkedin.com/in/andresdeinnocentiis-pythondeveloper-webdeveloper/?locale=en_US">{langScripts.footer.name[language]}</Link></p>
            <ButtonMailto style={styles.footer.link2} label={langScripts.footer.contactText[language]} mailto="mailto:andresdeinnocentiis@gmail.com" />
        </footer>
    )
}

export default Footer