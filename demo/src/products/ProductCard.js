import './ProductCard.css'
import { useState } from 'react'

export default function ProductCard({ product }) {
    const { name, price, online, stock } = product
    const onlineTxt = online 
        ? 'disponible en ligne uniquement'
        : 'uniquement en magasin'
    const style = { fontSize: '7pt' } 
    //let className = 'onlineTxt'
    let [className, setClassName] = useState('onlineTxt')

    setTimeout(() => { 
        console.log('timeout')
        //className =  'onlineTxt2'
        setClassName('onlineTxt2')
    }, 5000)

    return (
        <article>
            <h3>{name}</h3>
            <p>Prix: {price} EUR</p>
            <p>Stock: {stock} unités - 
                <span className={className}>{onlineTxt}</span>
            </p>
        </article>
    )
}