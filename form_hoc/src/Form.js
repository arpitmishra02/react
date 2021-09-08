import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userName : '',
             comment: '',
             skills: 'angular'
        }
    }

    handleUserName = (event) => {
        this.setState({
            userName: event.target.value
        })
    }

    handleComment = (event) => {
        this.setState({
            comment: event.target.value
        })
    }

    handleSkills = (event) => {
        this.setState({
            skills: event.target.value
        })
    }

    handleFormSubmit = (event) => {
        alert(`${this.state.userName} ${this.state.comment} ${this.state.skills}`)
        console.log('Submit Event:', event)
        event.preventDefault()
    }
    
    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <div>
                    <label>Username: </label>
                    <input type='text' value={this.state.userName} onChange={this.handleUserName}></input>
                </div>
                <div>
                    <label>Comment: </label>
                    <textarea type='text' value={this.state.comment} onChange={this.handleComment}></textarea>
                </div>
                <div>
                    <label>Skill: </label>
                    <select value={this.state.skills} onChange={this.handleSkills}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        )
    }
}
export default Form