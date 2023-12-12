import { Component } from 'react'
import ProductCard from './ProductCard'

const API = 'http://localhost:4000/products'

export default class ProductList extends Component {

    constructor(props) {
        super(props)
        this.state = { products: [] }
    }

    componentDidMount() {
        // requête ajax
        fetch(API)
            .then(res => res.json())
            .then(products => this.setState({ products }))

    }

    render() {
        return (
            <>
                <h2>Product List ({ this.state.products.length })</h2>
                {
                    this.state.products
                        .map(product => <ProductCard key={product.id} product={product} />)
                }
            </>
        )
    }

}