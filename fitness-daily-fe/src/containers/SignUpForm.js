import React from 'react';
import '../stylesheets/SignUpForm.css';

class SignUpForm extends React.Component {
    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidUpdate(prevState) {
        const { username, password } = this.props.state.signUpReducer;
        const { userData } = this.props;
        if(prevState.state.userDataReducer.username !== username) {
            if(username && password) {
                fetch('http://localhost:4000/v1/signup', 
                {   
                    method: 'POST',
                    headers:  {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                    },
                    body: JSON.stringify(
                        {
                            user: {
                                username: `${username}`,
                                password: `${password}`
                            }
                        }
                    )
                })
                .then(response => {
                    return response.json();
                })
                .then(res => {
                    userData(res);
                    console.log(res);
                    this.props.history.push(`/fitdaily/user/${res.id}/categories`)
                });
            }
        }
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.userSignup({username: e.target[0].value, password: e.target[1].value});
    }

    render() {
        return (
            <div className="signup-form"> 
                <h2 className="signup-heading">Sign Up</h2>
                <form className="signup-form-data" onSubmit={this.handleSubmit}>
                    {/* <label htmlFor="signin-username">Username: </label><br /> */}
                    <input type="text" id="signin-username" name="username" placeholder="username" /><br />
                    {/* <label htmlFor="signup-password">Password: </label><br /> */}
                    <input type="password" id="signup-password" name="password" placeholder="password"/><br />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default SignUpForm;