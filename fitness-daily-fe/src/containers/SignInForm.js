import React from "react";
import * as Storage from '../localStorage/storage'
import "../stylesheets/SignInForm.css";
import { Link } from 'react-router-dom';

class SignInForm extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

//   componentDidUpdate(prevState) {
//     const { username, password } = this.props.state.signInReducer;
//     const { userData } = this.props;
//     if (username && password) {
//       if (prevState.state.signInReducer.username !== username) {
//         fetch("http://localhost:4000/v1/login", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json",
//           },
//           body: JSON.stringify({
//             username: `${username}`,
//             password: `${password}`,
//           }),
//         })
//           .then((response) => {
//             return response.json();
//           })
//           .then((res) => {
//             // console.log(res);
//             if (res.hasOwnProperty("id")) {
//               userData(res);
//               Storage.saveToken(res.token, res);
//               return res;
//             } else {
//                 alert(res.error);
//             }
//         })
//         .then( res => {
//             console.log(res)
//             // this.props.history.push(`/fitdaily/categories/user/${res.id}`);
//           })
//           .catch((err) => {
//             alert(err);
//           });
//       }
//     }
//   }

  handleSubmit(e) {
    e.preventDefault();
    // const { username, password } = this.props.state.signInReducer;
    const { userData } = this.props;
    // this.props.userSignin({
      const username = e.target[0].value;
      const password = e.target[1].value;
    // });
    fetch("http://localhost:4000/v1/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            username: `${username}`,
            password: `${password}`,
          }),
        })
          .then((response) => {
            return response.json();
          })
          .then(res => {
            console.log(res);
            if (res.hasOwnProperty("id")) {
              userData(res);
              Storage.saveToken(res.token, res);
            //   this.props.history.push(`/fitdaily/categories/user/${res.id}`);
              return res;
            } else {
                alert(res.error);
            }
        })
        .then( res => {
            console.log(res)
          })
          .catch(err => {
            alert(err);
          });
    return false;
  }
  render() {
    return (
      <div className="signin-form">
        <h2 className="signin-heading"> Sign In </h2>
        <form className="signin-form-data" onSubmit={this.handleSubmit}>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="username"
          />
          <br />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="passowrd"
          />
          <br />
          <button type="submit"> sign in </button>
        </form>
        <Link to={`/fitdaily/categories/user`}>start tracking</Link>
      </div>
    );
  }
}

export default SignInForm;
