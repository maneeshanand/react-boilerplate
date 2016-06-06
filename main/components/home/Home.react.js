var React = require('react');

module.exports = React.createClass({
  getInitialState: function() { return {name: 'Guest'} },
  changeName: function() { this.setState({name: this.refs.userName.value}) },
  render: function() {
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
})
