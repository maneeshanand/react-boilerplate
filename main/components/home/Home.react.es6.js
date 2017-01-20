import React from 'react'

export default class Home extends React.Component {
  constructor(props){
    super(props)
    this.state = {name: 'Guest'}
    this.changeName = this.changeName.bind(this)
  }
  changeName() { this.setState({name: this.refs.userName.value}) }
  render() {
    return (
      <div>
        <h3>Home</h3>
        <p>Welcome to react-boilerplate, {this.state.name}  </p>
        <p>What is your name?</p>
        <input ref='userName' className='name' />
        <button className='button' onClick={this.changeName}>Submit</button>
      </div>
    )
  }
}
