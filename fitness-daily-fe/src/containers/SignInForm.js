import React from 'react';
import '../stylesheets/SignInForm.css';

class SignInForm extends React.Component {
    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidUpdate(prevState) {
        console.log("SignIn UPDATED ---- 1")
        const { username, password } = this.props.state.signInReducer;
        const { userData } = this.props;
        if (prevState.state.signInReducer.username !== username) {
        console.log("SignIn UPDATED ---- 1")
            if( username && password) {
                fetch('http://localhost:4000/v1/login', 
                {   
                    method: 'POST',
                    headers:  {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                    },
                    body: JSON.stringify(
                        {
                            username: `${username}`,
                            password: `${password}`
                        }
                    )
                })
                .then(response => {
                    return response.json();
                })
                .then(res => {
                    if(res.hasOwnProperty('username')){
                        userData(res);
                        console.log(res);
                        this.props.history.push(`/fitdaily/user/${res.id}/categories`);
                    } else {
                        alert(res.error)
                        console.log("error signing in");
                    }
                })
                .catch(err => {
                    console.log(err);
                })
            }
        }
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.userSignin({username: e.target[0].value, password: e.target[1].value});
    }
    render() {
        return ( 
            <div className="signin-form">
                <h2 className="signin-heading">Sign In</h2>
                <form className="signin-form-data" onSubmit={this.handleSubmit}>
                    <input type="text" id="username" name="username" placeholder="username" /><br />
                    <input type="password" id="password" name="password" placeholder="passowrd" /><br />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default SignInForm;