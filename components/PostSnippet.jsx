import React from 'react';
import { Card } from 'antd';

function PostSnippet(props) {
    return (
        <div className="article_container">
            <Card
                style={{ marginTop: 16 }}
                type="inner"
                title={props.title}
                extra={<a href="#">More</a>}
            >
                <p className="article_content">
                    {props.content}}
                </p>
            </Card>
        </div>

    )


}


export default PostSnippet;