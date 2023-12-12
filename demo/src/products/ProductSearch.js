import { useRef } from 'react'

export default function ProductSearch(props) {

    const onKeyUp = (event) => {
        //console.log('keyup', event.target.value)
        props.onSearch(event.target.value)
    }

    const onClick = () => {
        ref.current.value = ''
        spanRef.current.innerText = 'ok'
        props.onSearch('')
    }

    // références au DOM réel
    const ref = useRef()
    const spanRef = useRef()

    return (
        <div>
            <input ref={ref} type="text" onKeyUp={ onKeyUp } />
            <button onClick={onClick}>X</button>
            <span ref={spanRef}></span>
        </div>
    )

}