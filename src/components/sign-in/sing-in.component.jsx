import React, { Component } from 'react';

import FormInput from '../form-input/form-input.component';

import CustomButton from '../custom-button/custom-button.component';

import {auth, signInWithGoogle} from '../../firebase/firebase.utils.js';

import './sign-in.styles.scss';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: '',
            password: ''
         }
    }

    handleSubmit = async e => {
        e.preventDefault();

        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState(
                {
                email: '',
                password: ''
                }
            )
        }catch (error) {
            console.log(error);
        }

        this.setState({email: '', password: ''})
    }

    handleChange = (e) => {
        const {value, name} = e.target;

        this.setState({[name]: value})
    }

    render() { 
        return ( 
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput handleChange={this.handleChange} name='email' type="email" value={this.state.email}  label="email" required/>
                   
                    <FormInput handleChange={this.handleChange} name='password' type="password" label="password" value={this.state.password} required/>
                    <div className="buttons">
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
         );
    }
}
 
export default SignIn;