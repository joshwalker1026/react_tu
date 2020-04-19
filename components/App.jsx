import React from 'react';
import Posts from './Posts';
import Post from "./Post";
import CreatePost from "./CreatePost";
import { Router, Link } from "@reach/router";

function App(props) {
    return (
        <div className="app_container">
            
            <Router>
                <CreatePost default></CreatePost>
                <Posts path="post"/>
                <Post path="post/:id"></Post>

            </Router> 

        </div >
    )
}

export default App;