import React from 'react'
import { LangProvider } from './langContext'
import Demo from './Demo'

export default function App() {
  
    return (
        <LangProvider>
            <h1>Demo Context</h1>
            <Demo />
        </LangProvider>
    )

}
