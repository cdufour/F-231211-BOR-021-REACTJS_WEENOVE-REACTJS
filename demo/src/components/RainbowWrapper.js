import Rainbow from "./Rainbow"
import { useState } from 'react'

// utilisation du hook useState pour faire du rerendu dans un composant fonctionnel


function Demo() {
    return <p>Demo</p>
}

export default function RainbowWrapper() {
   
    let visible = false // hors state
    let [ checked, setChecked ] = useState(false)

    return (
        <>
        <input 
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)} 
        />
        <label>{checked ? 'Masquer' : 'Afficher'}</label>
        { checked ? <Rainbow initColor="black" speed={2000} /> : null }
        </>
    )

}