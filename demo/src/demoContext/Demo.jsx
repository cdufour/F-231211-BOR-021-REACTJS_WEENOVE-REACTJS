import React, { useContext } from 'react'
import LangContext from './langContext'

const Demo = () => {

    const context = useContext(LangContext)

    return (
        <div>Selected language: {context.lang}</div>
    )
}

export default Demo