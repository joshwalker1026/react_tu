import React from 'react';
import { Card } from 'antd';

function Post(parms) {
    return (
        <div className="article_container">
            <Card
                style={{ marginTop: 16 }}
                type="inner"
                title="Article title"
                extra={<a href="#">More</a>}
            >
                <p>
                    testeedkajfkadjshfkjds
                        </p>
                <p>
                    testeedkajfewqewqewqewqewqewqkadjshfkjds
                        </p>
            </Card>
        </div>

    )


}


export default Post;