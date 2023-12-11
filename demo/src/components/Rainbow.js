import React from 'react'

const MAXCOLORS = 16777215

export default class Rainbow extends React.Component {

    //intervalId = 0

    constructor(props) {
        console.log("*** constructor ***")
        super(props)
        
        this.state = {
            backgroundColor: 'black',
            width: 100,
            intervalId: 0
        }
        //this.startAnim(props.speed)
    }

    componentDidMount() {
        console.log("*** componentDidMount ***")
    }

    componentWillUnmount() {
        console.log("*** componentWillUnmount ***")

        // nettoyage
        this.stopAnim()
    }

    change() {
        console.log('change')
        const newColor = '#'+Math.floor(Math.random()*MAXCOLORS).toString(16)
        // this.setState({ 
        //     backgroundColor: newColor,
        //     width: this.state.width += 10
        // })
    }

    stopAnim() {
        clearInterval(this.state.intervalId)
        this.setState({intervalId: 0})
    }

    startAnim(speed) {
        let intervalId = setInterval(() => this.change(), speed)
        this.setState({intervalId})
    }

    toggleAnim() {
        if (this.state.intervalId !== 0) {
            this.stopAnim()
        } else {
            this.startAnim()
        }
    }

    render() {
        console.log("*** render ***")

        const style = { 
            width: this.state.width, 
            height:100, 
            backgroundColor: this.state.backgroundColor 
        }

        let btnTxt = this.state.intervalId ? 'Off' : 'On'

        return (
            <>
                <div style={style}></div>
                <button onClick={() => this.toggleAnim()}>{btnTxt}</button>
            </>
            
        )

    }

}