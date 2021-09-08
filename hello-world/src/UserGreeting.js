import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             loggedIn : true
        }
    }
    
    render() {

        // if(this.state.loggedIn) {
        //     return (
        //         <div>Hello LoggedIN User</div>
        //     )
        // }
        // else {
        //     return (
        //         <div>Hello Guest</div>
        //     )
        // }

        // let message
        // if(this.state.loggedIn) {
        //     // message = <div>Hello LoggedIN User</div>
        //     message = "Hello LoggedIn User"
        // }
        // else {
        //     // message = <div>Hello Guest</div>
        //     message = "Hello Guest"
        // }
        // // return message;
        // return <div>{message}</div>

        // return this.state.loggedIn ? <div>Hello LoggedIN User</div> : <div>Hello Guest</div>

        return this.state.loggedIn && <div>Hello LoggedIN User</div>
    }
}
export default UserGreeting