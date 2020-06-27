import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../styles/register.scss';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      name: '',
      home: '',
      type: 'Traveler',
      email: '',
      password: '',
      confirmPassword: '',
      error: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSelect(e) {
    this.setState({ type: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.password === this.state.confirmPassword) {
      fetch('http://localhost:8080/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: this.state.username,
          email: this.state.email,
          password: this.state.password,
          home: this.state.home,
          name: this.state.name,
          type: this.state.type,
        }),
      })
        .then(res => res.json())
        .then(data => {
          if (data.err) {
            this.setState({ error: data.err }, () => console.log(this.state))
          } else {
            this.props.addCurrentUser(data);
            this.props.history.push('/');
          }
        })
        .catch(err => console.warn(err));
    } else {
      this.setState({ error: 'Please check password again' });
    }
  }

  render() {
    return (
      <div className='register'>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit} className='registrationform'>
          <select onChange={this.handleSelect}>
            <option value='Traveler'>Traveler</option>
            <option value='Local'>Local</option>
          </select>
          <input
            type='text'
            value={this.state.username}
            name='username'
            placeholder='Enter Username'
            onChange={this.handleChange}
          />
          <input
            type='text'
            value={this.state.name}
            name='name'
            placeholder='Enter Name'
            onChange={this.handleChange}
          />
          <input
            type='text'
            value={this.state.home}
            name='home'
            placeholder='Enter Home'
            onChange={this.handleChange}
          />
          <input
            type='text'
            value={this.state.email}
            name='email'
            placeholder='Enter Email'
            onChange={this.handleChange}
          />
          <input
            type='password'
            value={this.state.password}
            name='password'
            placeholder='Enter Password'
            onChange={this.handleChange}
          />
          <input
            type='password'
            value={this.state.confirmPassword}
            name='confirmPassword'
            placeholder='Confirm Password'
            onChange={this.handleChange}
          />
          <button type='submit'>Register</button>
        </form>
        <span className='errormessage'>
          {this.state.error ? 'Username or email already taken. Please try again' : ' '}
        </span>
        <span>
          Have an account?{' '}
          <Link className='registerLoginLink' to='/'>
            Login
          </Link>
        </span>
      </div>
    );
  }
}

export default withRouter(Register);
