import React from 'react';
import { Card } from 'antd';
import { Link } from "@reach/router";
import db from '../firebase';

function PostSnippet(props) {

    const onDeletePost = () => { 
        console.log('post been deleted')
        let postRef = db
            .collection('users')
            .doc(props.user.uid)
            .collection('posts')
            .doc(props.id)
        
        postRef.delete()
    };

    return (
        <div className="article_container">
            <Card
                style={{ marginTop: 16 }}
                type="inner"
                title={props.title}
                extra={
                    <div className="post_snippet_links">
                        <Link to={`/blogs/${props.uid}/post/${props.id}`} style={{marginRight: '15px', float: 'left'}} >
                            Read Full Article
                        </Link>
                        {props.user &&
                            <div className="post_edit_links" style={{float: 'right'}}>
                                <Link to={`/update_post/${props.id}`} style={{marginRight: '15px'}}>
                                    Edit 
                                </Link>
                                
                                <a onClick={onDeletePost}>
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
        </div>

    )
}

export default PostSnippet;