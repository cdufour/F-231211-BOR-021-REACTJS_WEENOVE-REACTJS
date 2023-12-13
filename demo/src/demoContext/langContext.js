import { Component, createContext } from 'react'

const LangContext = createContext()

class LangProvider extends Component {
  
    state = {
        lang: 'fr',
        title: 'Formation React'
    }

    setLang = lang => {
        this.setState({ lang })
    }
  
    render() {

        const { children } = this.props
        const { lang } = this.state
        const { setLang } = this

        return (
            <LangContext.Provider value={{ lang, setLang }}>
                { children }
            </LangContext.Provider>
        )
  }
}

export default LangContext
export { LangProvider }
