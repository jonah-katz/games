import React from "react";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = props.handleSubmit;
    this.handleLoginClick = props.handleLoginClick;
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  onSubmit(event){
    event.preventDefault();
    this.handleSubmit({user: {username: this.state.username, password: this.state.password, email: this.state.email}});
  }
  onLoginClick(event){
  	event.preventDefault();
  	this.handleLoginClick();
  }

  render() {
    return (
    	<div>
      <form onSubmit={this.onSubmit.bind(this)}>
      <h1>Signup</h1>
      <label>
      username:
      <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
      </label>
      <label>
      email:
      <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
      </label>
      <label>
      password:
      <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
      </label>
      <input type="submit" value="Submit" />
      </form>
      already have an account?<a href="" onClick={this.onLoginClick.bind(this)}>login</a>
      </div>
      );
  }
}

export default SignupForm;