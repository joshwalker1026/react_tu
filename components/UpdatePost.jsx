import React, { useState, useEffect } from 'react';
import { PageHeader, Input, Button } from 'antd';
import db from '../firebase'
import { navigate } from "@reach/router"

const { TextArea } = Input

const UpdatePost = (props) => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    useEffect(() => {
        let postsRef = db
            .collection('users')
            .doc(props.user.uid)
            .collection('posts')
            .doc(props.id)

        postsRef
            .get()
            .then(doc => {
                let { title, content } = doc.data();
                setTitle(title)
                setContent(content)
            })
    }, [])

    const onTitleChange = (event) => {
        setTitle(event.target.value)
    }

    const onContentChange = (event) => {
        setContent(event.target.value)
    }

    const onEditPost = () => {
        let postRef = db
            .collection('users')
            .doc(props.user.uid)
            .collection('posts')
            .doc(props.id)
        let payload = { title, content }

        postRef.update(payload)
            .then(function () {
                console.log("Document successfully updated!");
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });

        navigate(`/blogs/posts`)
    }

    return (
        <div className="update_post_container">
            <div className="page_header_container">
                <PageHeader
                    className="site-page-header"
                    title="Update Post"
                />

            </div>
            <div className="post_inputs_container">
                <div className="post_input_container">
                    <div className="post_input_title">
                        <h2>Post Title</h2>
                    </div>
                    <div className="post_input">
                        <Input placeholder="Post Title" value={title} onChange={onTitleChange}></Input>
                    </div>
                </div>

                <div className="post_input_container">
                    <div className="post_input_content">
                        <h2>Post Contnet</h2>
                    </div>
                    <div className="post_input">
                        <TextArea rows={10} value={content} onChange={onContentChange}></TextArea>
                    </div>
                </div>
                <div className="post_input_button">
                    <Button type="primary" size="large" onClick={onEditPost}>Edit Post</Button>
                </div>

            </div>


        </div>

    )
}


export default UpdatePost;