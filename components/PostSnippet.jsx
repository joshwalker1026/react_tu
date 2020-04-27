import React from 'react';
import { Card } from 'antd';
import { Link } from "@reach/router";

function PostSnippet(props) {
    return (
        <div className="article_container">
            <Card
                style={{ marginTop: 16 }}
                type="inner"
                title={props.title}
                extra={
                    <div className="post_snippet_links">
                        <Link to={`/post/${props.id}`} style={{marginRight: '15px'}} >
                            Read Full Article
                        </Link>
                        {props.user &&
                            <Link to={`/update_post/${props.id}`}>
                                Edit
                            </Link>
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