import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from './productSlice'

export default function Products() {
    const product = useSelector(state => state.product)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return (
        <>
            <div>Products ({product.products.length})</div>

            {product.loading && <div>Loading...</div>}
            {!product.loading && product.error ? <div>Error: {product.error}</div> : null}
            {!product.loading && product.products.length ? (

            <ul>
                {
                    product.products.map(
                        product => <li key={product.id}>{product.name}</li>)
                }
            </ul>
            ) : null}
        </>

    )
}
