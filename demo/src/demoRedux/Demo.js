import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incrementBy } from './counterSlice'

export default function Demo() {

    const count = useSelector(state => state.counter.count)
    const dispatcher = useDispatch()


  return (
    <>
        <div>Demo Redux</div>
        <p>Count: {count}</p>
        <button 
            onClick={() => dispatcher(incrementBy(5))}>
            Increment by 5
        </button>
    </>
  )
}
