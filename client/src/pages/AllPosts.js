import React, { useEffect } from "react";
import "./AllPosts.css";
// import blogData from "../data/blogPost.json";
import Layout from "../components/Layout";
import BlogPost from "../components/BlogPost";

const AllPosts = (props) => {

    useEffect(() => {
        
    }, [])

  return (
    <div>
      <Layout>
        <div className="allPosts__container">
          <BlogPost {...props} />
        </div>
      </Layout>
    </div>
  );
};

export default AllPosts;
