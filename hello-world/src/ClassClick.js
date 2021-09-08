import React, { Component } from 'react'

class ClassClick extends Component {

    clickHandler(){
        console.log("Click from class Component")
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click from class Component</button>
            </div>
        )
    }
}
export default ClassClick
