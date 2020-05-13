import React, { useState } from 'react';
import { Card, Descriptions, Modal, Button } from 'antd';
import { Link } from "@reach/router";
import db from '../firebase';

'use strict';

function PostSnippet(props) {

    const [modalVisible, setModalVisible] = useState(false)
    const [confirmLoading, setConfirmLoading] = useState(false)

    const handleOk = () => {
        setConfirmLoading(true)
        onDeletePost()
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setModalVisible(false)
    };

    const showConfirmModal = () => {
        setModalVisible(true)
    };

    const onDeletePost = () => { 
        console.log('post been deleted')

        let postRef = db
            .collection('users')
            .doc(props.articleUid)
            .collection('posts')
            .doc(props.id)
        
        postRef.delete()
        setConfirmLoading(false)
    };

    let displayedTitle = ""
    
    if (props.title.length > 100) 
        displayedTitle = props.title.substring(0, 100) +"..."
    else
        displayedTitle = props.title
    
    return (                   
        <div className="article_container">
            <Card
                style={{ marginTop: 16 }}
                type="inner"
                title={displayedTitle}
                extra={
                    <div className="post_snippet_links">
                        <Descriptions title={displayedTitle} layout="vertical">
                        <Descriptions.Item label="Arthur">{`${props.artuhr}`}</Descriptions.Item>
                        <Descriptions.Item label="Time">{new Date(props.timestamp).toString()}</Descriptions.Item>
                        </Descriptions>
                        <Link to={`/blogs/${props.articleUid}/post/${props.id}`} style={{marginRight: '15px', float: 'left'}} >
                            Read Full Article
                        </Link>          
                        {(props.user.uid == props.articleUid) &&
                            <div className="post_edit_links" style={{float: 'right'}}>
                                <Link to={`/update_post/${props.id}`} style={{marginRight: '15px'}}>
                                    Edit 
                                </Link>
                                
                                <a onClick={showConfirmModal}>
                                    Delete
                                </a>
                            </div>
                        }
                    </div>
                }
            >
                <p className="article_content wordwrap">
                    {props.content.split('\n').map((paragraph, idx) => {
                        return <p key={idx}>{paragraph}</p>;
                    })}
                </p>
            </Card>
            <Modal
                title="Confirm delete?"
                visible={modalVisible}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <p>Are you sure you want to delete this article?</p>
            </Modal>
        </div>

    )
}

export default PostSnippet;