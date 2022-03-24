import React, {useContext} from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { FaReadme } from 'react-icons/fa'
import { GiTwoCoins } from 'react-icons/gi';
import { FaGraduationCap } from 'react-icons/fa';
import { BsTranslate } from 'react-icons/bs';
import { Link } from "react-router-dom";
import stylesObj from "../../styles/styles";





const FirstSection = () => {

    const { language, langScripts  } = useContext(LanguageContext)
    const styles = stylesObj(langScripts, language)
    /*
    const styles = {
        highColor: {
            color: langScripts.colorCombinations[language].detailColorA,
        },
        text: {
            color: langScripts.colorCombinations[language].light,
        }
    }*/

    return (
        <section className="section-first">
            <h1 className="section-first-title" style={styles.home.firstSection.text}>
                <span style={styles.home.firstSection.highColor}>{langScripts.firstSection.title.who[language]}</span> <span>{langScripts.firstSection.title.am[language]}</span> <span><span style={styles.home.firstSection.highColor}>{langScripts.firstSection.title.i[language]}</span> ?</span>
            </h1>
            <div className="paragraphs">
                <div className="parr parr1">
                    <FaReadme style={styles.home.firstSection.highColor} className="icon" />
                    <h3 className="section-first-subtitle" style={styles.home.firstSection.text}>{langScripts.firstSection.researcher[language]}</h3>
                    <p>{langScripts.firstSection.paragraphs.first[language]}</p>
                </div>
                <div className="parr parr2">
                    <GiTwoCoins style={styles.home.firstSection.highColor} className="icon" />
                    <h3 className="section-first-subtitle" style={styles.home.firstSection.text}>{langScripts.firstSection.analyst[language]}</h3>
                    <p></p>
                </div>
                <div className="parr parr3">
                    <FaGraduationCap style={styles.home.firstSection.highColor} className="icon icon-grad" />
                    <h3 className="section-first-subtitle" style={styles.home.firstSection.text}>{langScripts.firstSection.master[language]}</h3>
                    <p>{langScripts.firstSection.paragraphs.third[language]}</p>
                </div>
                <div className="parr parr4">
                    <BsTranslate style={styles.home.firstSection.highColor} className="icon" />
                    <h3 className="section-first-subtitle" style={styles.home.firstSection.text}>{langScripts.firstSection.polyglot[language]}</h3>
                    <p>{langScripts.firstSection.paragraphs.fourth[language]}</p>
                </div>
            </div>
            <div className="resume">
                <Link className="download" target="_blank" to="#" style={styles.home.firstSection.text}>{langScripts.firstSection.download[language]}</Link>
            </div>
        </section>
    )
}

export default FirstSection