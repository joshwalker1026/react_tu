import React from 'react';
import { PageHeader } from 'antd';
import Post from './Post';

function Posts(parms) { 
    return (
        <div className="post_container">
            <div className="page_header_container">
                <PageHeader
                    className="site-page-header"
                    title="Posts"
                    subTitle="This is a subtitle"
                    />
            </div>

            <div className="particles_container">
                <Post></Post>
            </div>
        </div>

    )


}


export default Posts;