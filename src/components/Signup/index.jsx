import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import Firebase from "../Firebase/firebase";
import { Wrapper, Form } from "./style";

class Signup extends Component {
  state = {
    username: "",
    email: "",
    passwordOne: "",
    passwordTwo: "",
    isAuth: false,
    error: null
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleFormSubmit = async e => {
    const { email, passwordOne } = this.state;
    e.preventDefault();
    try {
      const { user } = await Firebase.doCreateUserWithEmailAndPassword(
        email,
        passwordOne
      );
      await Firebase.database
        .collection("users")
        .doc(user.uid)
        .set({
          username: this.state.username,
          email: this.state.email
        });
      this.setState({ isAuth: true });
      setTimeout(() => {
        this.setState({
          error: null
        });
      }, 1500);
      this.props.history.push("/");
    } catch (error) {
      this.setState({
        error
      });
    }
  };

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      isAuth,
      error
    } = this.state;
    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === "";

    if (isAuth) {
      return <Redirect to="/" />;
    }

    return (
      <Wrapper>
        <h1>Sign Up</h1>
        <Form onSubmit={this.handleFormSubmit}>
          <input
            placeholder="Username"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
          <input
            placeholder="Email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <input
            placeholder="Password"
            type="password"
            name="passwordOne"
            value={passwordOne}
            onChange={this.handleChange}
          />
          <input
            placeholder="Confirm Password"
            type="password"
            name="passwordTwo"
            value={passwordTwo}
            onChange={this.handleChange}
          />
          <button disabled={isInvalid} type="submit">
            Submit
          </button>
        </Form>
        {error && <div style={{ color: "black" }}> {error.message}</div>}
      </Wrapper>
    );
  }
}

export default withRouter(Signup);
