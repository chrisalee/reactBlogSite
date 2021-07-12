import React from 'react';
import './Post.css';
// import Card from '../components/UI/Card';
import BlogPost from '../components/BlogPost';
import Layout from '../components/Layout';

const Post = (props) => {
    
    return (
        <div>
            {/* <Card> */}
            <Layout>
                <BlogPost {...props}/>
            </Layout>
            {/* </Card> */}
        </div>
    )
}

export default Post;
