import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { API } from '../products/config'

export default function ProductItem() {
    // récupérer param url
    const { id } = useParams()
    const [ product, setProduct ] = useState(null)
    const navigate = useNavigate()
 
    // pour opérations asynchrones
    // useEffect équivalent de componentDidMount (class component)
    useEffect(() => {
        console.log('ok')
        fetch(`${API}/${id}`)
            .then(res => res.json())
            .then(product => setProduct(product))
    }, [])

    return (
        <>
            <h3>{product && product.name}</h3>
            <button onClick={() => navigate('/products')}>
                Back to list</button>
        </>
    )

}