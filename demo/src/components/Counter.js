import React from 'react'

export default class Counter extends React.Component {

    state = { count: 0 }

    count = 0

    increment() {
        this.setState({ count: this.state.count + 1 })
        this.count += 1
        console.log(this.count)
    }

    decrement() {
        if (this.state.count > 0)
            this.setState({ count: this.state.count - 1 })
    }


    render() {
        console.log("*** render ***")
        return (
            <>
                <h3>Counter Component</h3>
                <button onClick={() => this.increment() }>Increment</button>
                <span>{this.state.count}</span>
                <span style={{ color: 'red' }}>{this.count}</span>
                <button onClick={() => this.decrement() }>Decrement</button>
            </>
        )
    }

}