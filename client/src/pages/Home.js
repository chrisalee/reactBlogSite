import React from "react";
import "./Home.css";
import Card from "../components/UI/Card";
import Layout from "../components/Layout";
import RecentPosts from "../components/RecentPosts";
import blogData from '../data/blogPost.json';
// import BlogPost from "../components/BlogPost";

const SideImage = (props) => {
    return (
        <div style={{ height: `${props.height}px`  }}>
            <img src={props.src} alt="" />
        </div>
    );
};

const ImageGallary = (props) => (
        <div className="gallaryPost" style={props.gallaryStyle}>
                <section style={{ width: props.largeWidth }}>
                    <div className="mainImageWrapper">
                        <img src={`https://chrisalee.github.io/reactBlogSite${props.imagesArray[1]}`} alt="" />
                    </div>
                </section>
                <section className={"sideImageWrapper"} style={{ width: props.smallWidth }}>
                    {/* {
                        props.imagesArray.map(image => 
                            <SideImage 
                              height = {props.sideImageHeight}
                              src = {props.image}
                              alt = "" />
                        )
                    } */}
                    <SideImage
                      height= {props.sideImageHeight}
                      src={`https://chrisalee.github.io/reactBlogSite${props.imagesArray[2]}`}
                    />
                    <SideImage
                      height= {props.sideImageHeight}
                      src={`https://chrisalee.github.io/reactBlogSite${props.imagesArray[3]}`}
                    />
                    <SideImage
                      height= {props.sideImageHeight}
                      src={`https://chrisalee.github.io/reactBlogSite${props.imagesArray[4]}`}
                    />
                </section>
        </div>
);

const Home = (props) => {

  const gallaryHeight = 450;
  const gallaryStyle = {
    height: gallaryHeight + 'px',
    overflow: 'hidden'
  };
  const sideImageHeight = gallaryHeight / 3;
  const imgAr = blogData.data.map(post => post.blogImage);

  return (
    <div className='home__container'>
      <div className="home__gallary">
      <Card>
        <ImageGallary
          largeWidth = "70%"
          smallWidth = "30%"
          sideImageHeight = {sideImageHeight}
          gallaryStyle = {gallaryStyle}
          imagesArray = {imgAr}
        />
      </Card>
      </div>
      
      <Layout>
          <RecentPosts style={{ width: "70%" }} />

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

      </Layout>
    </div>
  );
};

export default Home;
