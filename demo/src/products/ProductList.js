import { Component } from 'react'
import ProductCard from './ProductCard'
import ProductSearch from './ProductSearch'
import ProductForm from './ProductForm'
import { API } from './config'

export default class ProductList extends Component {

    products = []

    constructor(props) {
        super(props)
        this.state = { 
            filteredProducts: []
        }

        // hard binding. Verrouillage du contexte de this
        this.onSearch = this.onSearch.bind(this)
        this.onCreate = this.onCreate.bind(this)
    }

    componentDidMount() {
        // requête ajax
        fetch(API)
            .then(res => res.json())
            .then(products => {
                this.setState({ filteredProducts: [...products] })
                this.products = products
            })

    }

    onSearch(value) {
        //console.log(value)
        if (value.length > 2) {
            let filteredProducts = this.products
                .filter(product => product.name.indexOf(value) !== -1)
            //console.log(filteredProducts)
            this.setState({ filteredProducts })
         } else {
            // ES6 spread operator
            this.setState({ filteredProducts: [...this.products] })
         }
    }

    onCreate(product) {
        this.products.push(product)
        this.setState({filteredProducts: [...this.products]})
    }

    onDelete(id) {
        console.log(id)

        // ajax
        fetch(API + '/' + id, {
            method: 'delete'
        }).then(res => {
            console.log(res)
        })
    }

    render() {
        return (
            <>
                <ProductForm onCreate={this.onCreate}/>

                <h2>Product List ({ this.state.filteredProducts.length })</h2>
                {/*<ProductSearch onSearch={(value) => { this.onSearch(value) }} />*/}
                <ProductSearch onSearch={this.onSearch} />
                {
                    this.state.filteredProducts
                        .map(product => <ProductCard 
                            key={product.id} 
                            product={product} 
                            onDelete={this.onDelete}
                            />)
                }
            </>
        )
    }

}