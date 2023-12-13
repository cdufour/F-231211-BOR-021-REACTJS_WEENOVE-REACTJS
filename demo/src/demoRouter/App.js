import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } 
    from 'react-router-dom'

import ProductList from '../products/ProductList'
import ProductItem from '../products/ProductItem'
import ProductForm from '../products/ProductForm'

// https://www.robinwieruch.de/react-router-lazy-loading/
const Lazy = React.lazy(() => import('./Lazy'));

export default function App() {

    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                    <li>
                        <Link to="/product/add">Add Product</Link>
                    </li>
                    <li>
                        <Link to="/lazy">Lazy</Link>
                    </li>
                </ul>
            </nav>

            {/* Configuration des routes */}

            <Routes>
                <Route path='/about' element={<p>About</p>} />
                <Route path='/users' element={<Users />} />
                <Route path='/products' element={<ProductList />} />
                <Route path='/products/:id' element={<ProductItem />} />
                
                <Route 
                    path='/lazy'
                    element={
                        <React.Suspense fallback={<>...</>}>
                          <Lazy />
                        </React.Suspense>
                    }
                 />
            </Routes>
        </Router>
    )

}

function Users(props) {
    return <h3>Users</h3>
}