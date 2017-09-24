import React, { Component } from  'react';
import { Link } from 'react-router';

import { Accounts } from 'meteor/accounts-base';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: ''
        };
    }
    onSubmit(e) {
        e.preventDefault();
        
        let email = this.refs.email.value.trim();
        let password = this.refs.password.value.trim();

        if (password.length < 6) {
            return this.setState({ error: 'password must be at least 8 characters'});
        }

        Accounts.createUser({ email, password }, (err) => {
            if (err) {
                this.setState({error: err.reason});
            } else {
                this.setState({error: ''});
            }
        });
    }
    render() {
    return (
    <div>
        <h1>Join Us</h1>

        {this.state.error ? <p>{this.state.error}</p> : undefined}

        <form onSubmit={this.onSubmit.bind(this)} noValidate>
           <input type="email" ref="email" name="email" placeholder="Email" /> 
           <input type="password" ref="password" name="password" placeholder="Password" /> 
           <button>Create Account</button>
        </form>
        <Link to="/">Allready have an account?</Link>
    </div>
    );
    }
}

export default Signup;
