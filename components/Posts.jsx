import React from 'react';
import { PageHeader } from 'antd';
import PostSnippet from './PostSnippet';
import api from '../mock_api';
import _ from 'lodash';


function Posts(parms) { 
    return (
        <div className="post_snippet_container">
            <div className="page_header_container">
                <PageHeader
                    className="site-page-header"
                    title="Posts"
                    subTitle="This is a subtitle"
                    />
            </div>

            <div className="articles_container">
                {
                    _.map(api, (article, idx) => (
                        <PostSnippet key={idx} id={idx} title={article.title} content={article.content} />
                    ))
                }
            </div>
        </div>

    )
}


export default Posts;