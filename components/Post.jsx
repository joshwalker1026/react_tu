import React, { useState, useEffect } from 'react';
import { PageHeader, Card } from 'antd';
import api from '../mock_api';

const Post = (props) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    useEffect (() => { 
        let post = api[props.id]
        setTitle(post.title)
        setContent(post.content)
    }, [])

    return (
        <div className="post_container">
            <div className="page_header_container">
                <PageHeader
                    className="site-page-header"
                    title={title}
                    // title="ssss"
                    subTitle="This is a subtitle for Post"
                />

            </div>

            <div className="post_content_container">
                <Card style={{ marginTop: '20px' }}>
                    {
                        content.split('\n').map((paragraph, idx) => {
                            return <p key={idx}>{paragraph}</p>;
                        })
                    }
                </Card>
            </div>
        </div>

    )
}


export default Post;