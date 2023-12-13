import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './counterSlice'

export default function Demo2() {

    // read op
    const count = useSelector(state => state.counter.count)

    const dispatcher = useDispatch()


  return (
    <>
        <div>Demo Redux</div>
        <p>Count: {count}</p>
        <button 
          onClick={ () => dispatcher(increment()) }>
          Increment
        </button>
        <button 
          onClick={ () => dispatcher(decrement()) }>
          Decrement
        </button>
    </>
  )
}
