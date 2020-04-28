import React, { useState, useEffect } from 'react';
import { PageHeader, Card } from 'antd';
import db from '../firebase';

const Post = (props) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    useEffect(() => { 
        let postsRef = db
            .collection('users')
            .doc(props.uid)
            .collection('posts')
            .doc(props.id)

        postsRef
            .get()
            .then(doc => { 
                let { title, content} = doc.data();
                setTitle(title)
                setContent(content)
            })
    }, [])

    return (
        <div className="post_container">
            <div className="page_header_container">
                <PageHeader
                    className="site-page-header"
                    title={title}
                />

            </div>

            <div className="post_content_container wordwrap">
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