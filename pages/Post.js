import React from 'react';
import './Post.css';
import BlogPost from '../components/BlogPost';
import Layout from '../components/Layout';

const Post = (props) => {
    
    return (
        <div className='post__container'>
            <Layout>
                <BlogPost {...props}/>
            </Layout>
        </div>
    )
}

export default Post;
