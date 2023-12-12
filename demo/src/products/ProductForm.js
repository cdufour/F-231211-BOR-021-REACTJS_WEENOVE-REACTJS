import React from 'react'
import { API } from './config'
import './ProductForm.css'

export default class ProductForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            price: 0,
            stock: 0,
            online: false,
            message: ''
        }

        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(event) {
        event.preventDefault()

        let body = { ...this.state };
        body.price = parseFloat(body.price)
        body.stock = parseInt(body.stock)
        delete body.message

        // ajax
        fetch(API, {
            method: 'post',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(product => {
            this.setState({
                message: `Produit ${product.id} ajouté`
            })
            this.clearMessage(2000)
            this.props.onCreate(product)
            this.setState({ name: '', price:0, stock: 0, online: false })
        })
    }

    clearMessage(timemout) {
        setTimeout(
            () => this.setState({message: ''}),
            timemout
        )
    }

    render() {
        return(
        <>
            <h3>Product Form</h3>
            { this.state.message &&
                <div className="alert">{ this.state.message }</div>
            }
            <form onSubmit={this.onSubmit}>
                <div>
                Name 
                <input 
                    value={this.state.name} 
                    onChange={(event) => this.setState({name: event.target.value})}
                    type="text" 
                />
                </div>
                <div>
                Price 
                <input 
                    type="number" 
                    value={this.state.price} 
                    onChange={(event) => this.setState({price: event.target.value})}
                />
                </div>
                <div>
                Stock 
                <input 
                    type="number" 
                    value={this.state.stock} 
                    onChange={(event) => this.setState({stock: event.target.value})}
                />
                </div>
                <div>
                Online 
                <input 
                    type="checkbox" 
                    checked={this.state.online} 
                    onChange={(event) => this.setState({online: event.target.checked})}
                />
                </div>
                <div>
                <input type="submit" value="Send" />
                </div>
                
            </form>
            <pre>
                { JSON.stringify(this.state) }
            </pre>
        </>
        )

    }

}