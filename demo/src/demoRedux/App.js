import React from 'react'
import Demo from './Demo'
import Demo2 from './Demo2'
import Products from './Products'
import { Provider } from 'react-redux'
import store from './store'

export default function App() {
  return (
    <>
        <Provider store={store}>
            <div>App</div>
            <Demo />
            <Demo2 />
            <Products />
        </Provider>
    </>
    
  )
}
