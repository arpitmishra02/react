import React, {Component} from "react";

// class Welcome extends Component {
//     render() {
//        return <h1>Hello User form Class Component</h1>
//     }
// }

class Welcome extends Component {
    render() {
       return (
        <>
            <h1>Hello {this.props.name} a.k.a {this.props.heroName} form Class Component</h1>
            {this.props.children}
        </>
       )
    }
}


export default Welcome