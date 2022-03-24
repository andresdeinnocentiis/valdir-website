

const stylesObj = (langScripts,language) => {
    const styles = {

        home: {
            global: {
                backgroundColor: langScripts.colorCombinations[language].backgroundColor,
                color: langScripts.colorCombinations[language].textColor,
            },
            homeMain: {
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
            },
            firstSection: {
                highColor: {
                    color: langScripts.colorCombinations[language].detailColorA,
                },
                text: {
                    color: langScripts.colorCombinations[language].light,
                }
            }
        },
        footer: {
            link1: {
                color: langScripts.colorCombinations[language].detailColorA,
                
            },
            link2: {
                color: langScripts.colorCombinations[language].detailColorB,
            }
        }
    }


    return(
        styles
    )
}



export default stylesObj