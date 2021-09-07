import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    increament = () => {
        // this.state.count = this.state.count + 1
        // console.log("Synchronous log: ", this.state.count)

        // this.setState({
        //     count: this.state.count + 1
        // },
        // () => {
        //         console.log("A-Synchronous log: ", this.state.count)
        // })
        // console.log("Synchronous log: ", this.state.count)


        this.setState( (prevState, props) => ({  // =>() 
            count: prevState.count + 1
        }),
        () => {
                console.log("A-Synchronous log: ", this.state.count)
        })
        console.log("Synchronous log: ", this.state.count)
    }
    
    increamentBy5 = () => {
        this.increament()
        this.increament()
        this.increament()
        this.increament()
        this.increament()
    }
    
    render() {
        return (
            <div>
                <div>Count : {this.state.count}</div>
                <button onClick={()=> this.increament()}>Increase Count</button>
                <button onClick={()=> this.increamentBy5()}>Increase Count By 5</button>
            </div>
        )
    }
}

export default Counter