import React from 'react'
import { LangProvider } from './langContext'
import Demo from './Demo'
import LangSwitcher from './LangSwitcher'

export default function App() {
  
    return (
        <LangProvider>
            <h1>Demo Context</h1>
            <LangSwitcher />
            <Demo />
        </LangProvider>
    )

}
