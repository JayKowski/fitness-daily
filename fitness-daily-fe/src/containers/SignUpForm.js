import React from "react";
import * as Storage from "../localStorage/storage";
import "../stylesheets/SignUpForm.css";

class SignUpForm extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevState) {
    const { username, password } = this.props.state.signUpReducer;
    const { userData } = this.props;
    // if(prevState.state.userDataReducer.username !== username) {
    //     console.log(prevState.state.userDataReducer.username + ' === ' + username);
    //     if(username && password) {
    //         fetch('http://localhost:4000/v1/signup',
    //         {
    //             method: 'POST',
    //             headers:  {
    //             "Content-Type": "application/json",
    //             "Accept": "application/json"
    //             },
    //             body: JSON.stringify(
    //                 {
    //                     user: {
    //                         username: `${username}`,
    //                         password: `${password}`
    //                     }
    //                 }
    //             )
    //         })
    //         .then(response => {
    //             return response.json();
    //         })
    //         .then(res => {
    //             userData(res);
    //             console.log(res);
    //             Storage.saveToken(res.token);
    //             this.props.history.push(`/fitdaily/categories/user/${res.id}`)
    //         });
    //     }
    // }
  }

  async handleSubmit(e) {
    e.preventDefault();
    const username = e.target[0].value;
    const password = e.target[1].value;
    const { userData } = this.props;
    this.props.userSignup({
      username: e.target[0].value,
      password: e.target[1].value,
    });
    if (username && password) {
      fetch("http://localhost:4000/v1/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          user: {
            username: `${username}`,
            password: `${password}`,
          },
        }),
      })
        .then((response) => {
          return response.json();
        })
        .then((res) => {
          userData(res);
          console.log(res);
          Storage.saveToken(res.token);
          this.props.history.push(`/fitdaily/categories/user/${res.id}`);
        });
    } else {
    }
    return false;
  }

  render() {
    return (
      <div className="signup-form">
        <h2 className="signup-heading">Sign Up</h2>
        <form className="signup-form-data" onSubmit={this.handleSubmit}>
          
          {/* <label htmlFor="signin-username">Username: </label><br /> */}
          <input
            type="text"
            id="signin-username"
            name="username"
            placeholder="username"
          />
          <br />
          {/* <label htmlFor="signup-password">Password: </label><br /> */}
          <input
            type="password"
            id="signup-password"
            name="password"
            placeholder="password"
          />
          <br />
          <button type="submit"> sign up </button>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
