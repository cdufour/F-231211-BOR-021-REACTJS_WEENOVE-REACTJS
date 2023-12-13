import React from 'react'
import LangContext from './langContext'

const LANGUAGES = ['en', 'fr', 'it', 'es', 'ru'];

export default class LangSwitcher extends React.Component {

    // permet de "brancher" le composant au contexte auquel il souhaite accéder
    static contextType = LangContext;

    componentDidMount() {
        //console.log(this.context)
    }

    onChange(event) {
        //console.log(event.target.value)
        this.context.setLang(event.target.value);
    }

    render() {

        const options = LANGUAGES
            .map(lang => <option key={lang}>{lang}</option>)

        return (
            <>
                <p>Current language: {this.context.lang}</p>
                <span className={'lang-'+ this.context.lang}>Select language</span>
                <select onChange={(event) => this.onChange(event) }>{options}</select>
            </>
        )
    }

}