import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }
    handleSubmit = event => {
        event.preventDefault();

        this.setState({email: '', password: ''});
    }

    handeChange = event => {
        const { name, value } = event.target;

        this.setState({[name]: value});
    }

    render(){
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="email" 
                        name="email" 
                        label="email"
                        required 
                        value={this.state.email} 
                        handleChange={this.handeChange}
                    />
                    <FormInput 
                        type="password" 
                        name="password" 
                        label="password"
                        required
                        value={this.state.password} 
                        handleChange={this.handeChange}
                    />

                    <CustomButton type="submit">
                        Sign in
                    </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;