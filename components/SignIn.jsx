import React, { useState } from 'react';
import { PageHeader, Input, Button } from 'antd';
import { auth } from '../firebase';
import { navigate } from "@reach/router"

const SignIn = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onEmailChange = (event) => setEmail(event.target.value)
    const onPasswordChange = (event) => setPassword(event.target.value)

    const onSignIn = (event) => {
        auth.signInWithEmailAndPassword(email, password)
            .then(function (result) {
                console.log('user signed in!')
                navigate(`/blogs/posts`)
            })
            .catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log('error sign in:' + errorCode)
                console.log(errorMessage)
            });
        
        setEmail('')
        setPassword('')
    }

    return (
        <div className="sign_in_container">
            <div className="page_header_container">
                <PageHeader
                  className="site-page-header"
                  title="Sign In"
                />
            </div>

            <div className="sign_in_container_inputs" style={{ marginTop: "20px" }}>
                <div className="post_input_container_inputs"></div>
                <div className="post_input_title">
                    <h2>Email</h2>
                </div>
                <div className="post_input">
                    <Input placeholder="Email" onChange={onEmailChange} />
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
                        <a href="/sign_up" className="">Don't have an account? Sign Up</a>
                    </div>

                    <div className="post_input_button" style={{ marginTop: "10px" }}>
                        <Button type="primary" size="large" onClick={onSignIn}>Sign In</Button>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default SignIn;