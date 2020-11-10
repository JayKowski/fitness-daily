import React from 'react';

class SignUpForm extends React.Component {
    handleSubmit(e){
        e.preventDefault();
        console.log(e.target[0].value, e.target[1].value);
    }
    render() {
        return ( 
            <div> 
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username">Username: </label><br />
                    <input type="text" id="username" name="username" /><br />
                    <label htmlFor="password">Password: </label><br />
                    <input type="password" id="lname" name="password" /><br />
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default SignUpForm;