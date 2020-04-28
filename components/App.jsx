import React, { useState } from 'react';
import Posts from './Posts';
import Post from "./Post";
import CreatePost from "./CreatePost";
import UpdatePost from "./UpdatePost";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import AppNav from "./AppNav";
import { auth } from '../firebase';
import { Router } from "@reach/router";

function App(props) {
    const [user, setUser] = useState(false)

    auth.onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            setUser(user)
        } else {
            // No user is signed in.
            console.log('no user')
        }
    });

    const onSignOut = () => {
        auth.signOut()
            .then(function (result) {
                console.log('user signed out!')
                setUser(false)
            })
            .catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log('error sign out:' + errorCode)
                console.log(errorMessage)
            });
    }

    return (
        <div className="app_container">
            <AppNav user={user}/>

            <Router>
                <SignUp path="sign_up" />
                <SignIn path="sign_in" default />
                <Posts path="blogs/:uid/posts" user={user}/>
                <Post path="blogs/:uid/post/:id" user={user}/>
                <UpdatePost path="update_post/:id" user={user} />
                <CreatePost path="create_post" user={user} />
            </Router> 

        </div >
    )
}

export default App;