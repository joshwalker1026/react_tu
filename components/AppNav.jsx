import React from 'react';
import { Link } from "@reach/router";
import { Menu } from 'antd';
import { ReadOutlined, HighlightOutlined } from '@ant-design/icons';

const AppNav = (props) => { 
    return (
        <div className="app_main_navigation">
            <Menu mode="horizontal">

                <Menu.Item key="posts">
                    <ReadOutlined />
                    <Link to={`/blogs/posts`} style={{ float: 'right' }}>
                        Posts
                        </Link>
                </Menu.Item>

                {props.user &&
                    <Menu.Item key="create_post">
                        <HighlightOutlined />
                        <Link to="/create_post" style={{ float: 'right' }}>
                            Create Post
                            </Link>
                    </Menu.Item>
                }

                {!props.user
                    ?
                    <Link to="/sign_in" style={{ float: 'right' }}>Sign In</Link>
                    :
                    <div style={{ float: 'right' }}>
                        Hello <strong> {props.user.email} </strong>
                        <a onClick={props.onSignOut} style={{ marginLeft: '10px' }} >Sign Out</a>
                    </div>
                }
            </Menu>
        </div>
    )
}

export default AppNav;