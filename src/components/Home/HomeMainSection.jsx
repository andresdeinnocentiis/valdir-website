import React, {useContext} from "react";
import { LanguageContext } from "../../context/LanguageContext";
import profImg from "../../assets/images/img1-b.png"
/*import profImg from "../assets/images/img5-b.png"*/
import stylesObj from "../../styles/styles";



const Main = () => {

    const { language, langScripts  } = useContext(LanguageContext)

    const styles = stylesObj(langScripts, language)
    /*
    const styles = {
        span: {
            color: langScripts.colorCombinations[language].detailColorA,
        },
        title: {
            color: langScripts.colorCombinations[language].extra
        },
        russian: {
            color: langScripts.colorCombinations[language].extra,
            fontSize: "3.5em",
            marginTop: ".5em"
        },
        spanRussian: {
            color: langScripts.colorCombinations[language].detailColorB
        }

    }*/

    return (
        <main  className="home-main">
            <h1 style={language === "russian" ? styles.home.homeMain.russian : styles.home.homeMain.title} className="home-title"><span style={language === "russian" ? styles.home.homeMain.spanRussian : styles.home.homeMain.span} className="span-title">{langScripts.mainText.hello[language]},</span><br/> {langScripts.mainText.im[language]}<br/> <span className="name1">{langScripts.mainText.valdir[language]}</span> <span className="name2">{langScripts.mainText.bezerra[language]}</span></h1>
            <div className="progImg-container">  
                <img className="profImg" src={profImg} alt="Profile" />
            </div>
        </main>
    )
}

export default Main