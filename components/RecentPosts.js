import React from 'react';
// import BlogPost from './BlogPost';
import './RecentPosts.css';
import Card from './UI/Card';
// import blogData from '../data/blogPost.json';

const RecentPosts = (props) => {
    return (
        <div style={props.style} className='post__cont'>
        <Card>
            <div className="postImageWrapper">
                <img src={"https://2.bp.blogspot.com/-ZOY5OAvnKj0/V9_M3_TVTLI/AAAAAAAAD40/UQl4rIoqgi42zaeq0yR_y1gnnchZFxupQCLcB/s1600/3-3.jpg"} alt=""/>
            </div>

            <div className='post__text'>

                <span>Featured</span>
                <h2>Fitness Mantra To Live Fit Life</h2>
                <span>posted onJuly 21, 2016 bySora Blogging Tips</span>
                <p>Midst first it, you're multiply divided. There don't, second his one given the he one third rule fruit, very. Fill. Seed give firm... Extremity direction existence as Dashwood's do up. Securing Marianne led welcomed offended but offering six rapt...</p>

                <button>Read More</button>     

            </div>
        </Card>

        {/* {blogData.data.map((post) => (
                <BlogPost 
                  key = {post.slug}
                  id = {post.id}
                  blogCategory = {post.blogCategory}
                  blogTitle = {post.blogTitle}
                  blogImage = {post.blogImage}
                  author = {post.author}
                  postedOn = {post.postedOn}
                  slug = {post.slug}
                />             
            ))} */}
    </div>
    )
}

export default RecentPosts
