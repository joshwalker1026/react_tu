import React, { useState, useEffect } from 'react';
import { PageHeader } from 'antd';
import PostSnippet from './PostSnippet';
import _ from 'lodash';
import db from '../firebase';

const Posts = (props) => { 
    const [posts, setPosts] = useState([])
    
    useEffect(() => {
        let userId = props?.user.uid ? props?.user.uid : props.uid

        db.collectionGroup('posts').orderBy('timestamp', 'desc')
            .onSnapshot(async posts => { 
                let postData = await posts.docs.map(post => {
                    let data = post.data();
                    let { id } = post

                    let payload = {
                        id,
                        ...data
                    }
                    return payload
                });

                setPosts(postData)
            })
    }, [])
    
    return (
        <div className="post_snippet_container">
            <div className="page_header_container">
                <PageHeader
                    className="site-page-header"
                    title="Posts"
                    />
            </div>

            <div className="articles_container">
                {
                    _.map(posts, (article, idx) => (
                        <PostSnippet
                            key={idx}
                            id={article.id}
                            title={_.capitalize(article.title)}
                            timestamp={article.timestamp}
                            content={
                                article.content.substring(0, 1000)
                            }
                            artuhr={article.arthur}
                            user={props.user}
                            articleUid={article.uid}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Posts;