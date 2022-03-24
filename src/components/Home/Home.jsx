import React, {useContext} from "react";
import { LanguageContext } from "../../context/LanguageContext";
import Main from "./HomeMainSection";
import FirstSection from "./FirstSection"
import stylesObj from "../../styles/styles";


const Home = () => {
    const { language, langScripts  } = useContext(LanguageContext)
    const styles = stylesObj(langScripts, language)
    /*
    const { language, langScripts  } = useContext(LanguageContext)
    */
    /*
    const styles = {
        home: {
            backgroundColor: langScripts.colorCombinations[language].backgroundColor,
            color: langScripts.colorCombinations[language].textColor,
        },
    }*/

    return (
        <div style={styles.home.global} className="home">
            <Main />
            <FirstSection/>
        </div>
    )
}

export default Home;