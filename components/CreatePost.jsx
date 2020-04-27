import React, { useState } from 'react';
import { PageHeader, Input, Button } from 'antd';
import db from '../firebase'
import { navigate } from "@reach/router"

const { TextArea } = Input

const CreatePost = (props) => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const onTitleChange = (event) => { 
        setTitle (event.target.value)
    }

    const onContentChange = (event) => {
        setContent(event.target.value)
    }

    const onCreatePost = () => { 
        let postRef = db.collection('posts')      
        let payload = {title, content}
        
        postRef.add(payload)
            .then(function (doc) {
                console.log("Document successfully written!", doc.id);
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });
        
        setTitle('')
        setContent('')
        navigate(`/posts`)
    }

    return (
        <div className="create_post_container">
            <div className="page_header_container">
                <PageHeader
                    className="site-page-header"
                    title="Create Post"
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
                    <Button type="primary" size="large" onClick={onCreatePost}>Create Post</Button>
                </div>

            </div>


        </div>

    )
}


export default CreatePost;