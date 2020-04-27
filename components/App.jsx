import React, { useState } from 'react';
import Posts from './Posts';
import Post from "./Post";
import CreatePost from "./CreatePost";
import UpdatePost from "./UpdatePost";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { auth } from '../firebase';
import { Router, Link } from "@reach/router";
import { Menu } from 'antd';
import { ReadOutlined, HighlightOutlined } from '@ant-design/icons';

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
            <div className="app_main_navigation">
                <Menu mode="horizontal">

                    <Menu.Item key="posts">
                        <ReadOutlined />
                        <Link to="/posts" style={{ float: 'right' }}>
                                Posts
                            </Link>
                    </Menu.Item>

                    {user &&
                        <Menu.Item key="create_post"> 
                            <HighlightOutlined />
                            <Link to="/create_post" style={{ float: 'right' }}>
                                    Create Post
                                </Link>
                        </Menu.Item>
                    }
                    
                    {!user
                        ?
                        <Link to="/sign_in" style={{ float: 'right' }}>Sign In</Link>
                        :
                        <a onClick={onSignOut} style={{ float: 'right' }}>Sign Out</a>
                    }
                </Menu>
            </div>

            <Router>
                <SignUp path="sign_up"></SignUp>
                <SignIn path="sign_in" default></SignIn>
                <Posts path="posts" user={user}/>
                <Post path="post/:id"></Post>
                <UpdatePost path="update_post/:id"></UpdatePost>
                <CreatePost path="create_post"></CreatePost>
            </Router> 

        </div >
    )
}

export default App;