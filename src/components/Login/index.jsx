import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Firebase from "../Firebase/firebase";
import { Wrapper, Form } from "./style";
import { PasswordForgetLink } from "../PasswordForget";

class Login extends Component {
  state = {
    email: "",
    password: "",
    isAuth: false
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleFormSubmit = async e => {
    const { email, password } = this.state;
    e.preventDefault();
    try {
      await Firebase.doSignInWithEmailAndPassword(email, password);
      this.setState({
        isAuth: true
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { email, password, isAuth } = this.state;
    if (isAuth) {
      return <Redirect to="/" />;
    }
    return (
      <Wrapper>
        <div>
          <h1>Login</h1>
          <Form onSubmit={this.handleFormSubmit}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <input
                className="loginInput"
                placeholder="Email"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
              <input
                className="loginInput"
                placeholder="Password"
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
              <button className="loginBtn" type="submit">
                Login
              </button>
            </div>
          </Form>
          <PasswordForgetLink />
        </div>
      </Wrapper>
    );
  }
}

export default Login;
