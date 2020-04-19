import React, { useState } from 'react';
import { PageHeader, Input, Button } from 'antd';
import db from '../firebase'


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

    const coCreatePost = (event) => { 
        console.log(title)
        console.log(content)

        

    }

    return (
        <div className="create_post_container">
            <div className="page_header_container">
                <PageHeader
                    className="site-page-header"
                    title="Create Post"
                    subTitle="This is a subtitle for Post"
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
                    <Button type="primary" size="large" onClick={coCreatePost}>Create Post</Button>>
                </div>

            </div>


        </div>

    )
}


export default CreatePost;