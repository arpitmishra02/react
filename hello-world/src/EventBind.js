import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             click: 'Plz Subscribe' 
        }

        // this.clickHandler = this.clickHandler.bind(this)
    }
    
    // clickHandler(){
    //     this.setState({
    //         click: 'Thankyou for subscribing!'
    //     })
    //     console.log(this)
    // }

    clickHandler = () => {
        this.setState({
            click: 'Thankyou for subscribing!'
        })
        console.log(this)
    }

    render() {
        return (
            <div>
                <h1>{this.state.click}</h1>
                {/* <button onClick={this.clickHandler}>CLICK</button> // Error */}

                {/* <button onClick={this.clickHandler.bind(this)}>CLICK</button> */}
                {/* <button onClick={() => this.clickHandler()}>CLICK</button> */}
                <button onClick={this.clickHandler}>CLICK</button>


            </div>
        )
    }
}
export default EventBind