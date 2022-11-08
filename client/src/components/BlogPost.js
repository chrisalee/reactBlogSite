import React, { useEffect, useState } from "react";
import "./BlogPost.css";
import Card from "./UI/Card";
import blogPost from "../data/blogPost.json";

const BlogPost = (props) => {
  const [post, setPost] = useState({
    id: "",
    blogCategory: "",
    blogTitle: "",
    slug: "",
    postedOn: "",
    author: "",
    blogImage: "",
    blogText: "",
  });
  const [slug, setSlug] = useState("");

  useEffect(() => {
    const slug = props.match.params.slug;
    const post = blogPost.data.find((post) => post.slug === slug);
    setPost(post);
    setSlug(slug);
  }, [post, props.match.params.slug]);

  if (post.blogImage === "") return null;

  return (
    <div key={post.id} className="blogPost__container">
      <Card>
        <div className="blog__card">
          <div className="blogPost__header">
            <span className="blogPost__category">{post.blogCategory}</span>
            <h1 className="blogPost__title">{post.blogTitle}</h1>
            <span className="postedBy">
              posted on {post.postedOn} by {post.author}
            </span>
          </div>

          <div className="blogPost__imageContainer">
            <img src={window.location.origin + post.blogImage} alt="blogImage" />
          </div>

          <div className="blogPost__content">
            <h3>{post.blogTitle}</h3>
            <p>{post.blogText}</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default BlogPost;
