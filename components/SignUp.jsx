import React, { useState } from 'react';
import { PageHeader, Input, Button } from 'antd';
import { auth } from '../firebase';

const SignUp = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onEmailChange = (event) => setEmail(event.target.value)
    const onPasswordChange = (event) => setPassword(event.target.value)

    const onSignUp = (event) => { 
        auth.createUserWithEmailAndPassword(email, password)
            .catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log('error:' + errorCode)
            console.log(errorMessage)
        });

        setEmail('')
        setPassword('')
    }
        
    return (
        <div className="sign_up_container">
            <div className="page_header_container">
                <PageHeader
                  className="site-page-header"
                  title="Sign Up"
                />
            </div>

            <div className="sign_up_container_inputs" style={{ marginTop: "20px" }}>
                <div className="post_input_container_inputs"></div>
                <div className="post_input_title">
                    <h2>Email</h2>
                </div>
                <div className="post_input">
                    <Input placeholder="Email" onChange={onEmailChange}></Input>
                </div>
                
                <div className="post_input_container_inputs"></div>
                <div className="post_input_title">
                    <h2>Password</h2>
                </div>
                <div className="post_input">
                    <Input.Password placeholder="Password" onChange={onPasswordChange} />
                </div>

                <div style={{ width: '100%' }}>
                    <div style={{ float: 'left'}}>
                        <a href="#" className="">Already have an account? Sign In</a>
                    </div>

                    <div className="post_input_button" style={{ marginTop: "10px" }}>
                        <Button type="primary" size="large" onClick={onSignUp}>Sign Up</Button>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default SignUp;