import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export default class ParentComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             greet: 'Morning'
        }

        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childname) {
        alert(`Good ${this.state.greet} from ${childname}`)
    }
    
    render() {
        return (
            <div>
                <ChildComponent greetParent={this.greetParent}></ChildComponent>
            </div>
        )
    }
}
