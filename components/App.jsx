import React from 'react';
import Posts from './Posts';
import Post from "./Post";
import CreatePost from "./CreatePost";
import { Router, Link } from "@reach/router";
import { Menu } from 'antd';
import { ReadOutlined, HighlightOutlined } from '@ant-design/icons';

function App(props) {
    return (
        <div className="app_container">
            <div className="app_main_navigation">
                <Menu mode="horizontal">

                    <Menu.Item key="mail">
                        <ReadOutlined />
                            <Link to="/posts">
                                Posts
                            </Link>
                    </Menu.Item>

                    <Menu.Item key="app"> 
                        <HighlightOutlined />
                            <Link to="/create_post">
                                Create Post
                            </Link>
                    </Menu.Item>

                </Menu>
            </div>

            <Router>
                <Posts path="posts" default/>
                <Post path="post/:id"></Post>
                <CreatePost path="create_post"></CreatePost>
            </Router> 

        </div >
    )
}

export default App;