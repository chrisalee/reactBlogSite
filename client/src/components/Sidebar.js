import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import Card from "./UI/Card";
import blogPost from "../data/blogPost.json";

const Sidebar = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const posts = blogPost.data;
    setPosts(posts);
  }, [posts]);

  return (
    <div
      className="sidebar__container"
      style={{
        width: props.width,
      }}
    >
      <div className="card__spacing">
        <Card>
          <div className="card__header">
            <span>About Us</span>
          </div>
          <div className="profileImage__container">
            <Link to="/about-us">
              <img
                src="https://th.bing.com/th/id/R.bc79b967c5001315c2e26b0c95fc3cf6?rik=eT%2fNug1iOR5GQA&riu=http%3a%2f%2fi1.wp.com%2fwww.soccercleats101.com%2fwp-content%2fuploads%2f2016%2f05%2fSummer-2016-Soccer-Balls.jpg&ehk=%2brKm429pxCEgJXYKn46vzpKSI2cNO5O5RkVd13sY2aM%3d&risl=&pid=ImgRaw"
                alt=""
              />
            </Link>
          </div>
          <div className="card__body">
            <p className="personalBio">
              My name is Chris Lee. I am a software developer specializating in
              Front end development...
            </p>
          </div>
        </Card>
      </div>

      <div className="card__spacing">
        <Card>
          <div className="card__header">
            <span>Social Network</span>
          </div>
          <div className="header__social social__icons">
            <ul className="header__social--list social__icons">
              <li className="header__social--list__item">
                <a
                  href="https://www.linkedin.com/in/christopheralee22/"
                  className="header__social--list__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li className="header__social--list__item">
                <a
                  href="https://twitter.com/chrisl222"
                  className="header__social--list__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="header__social--list__item">
                <a
                  href="https://www.instagram.com/chrisalee222/"
                  className="header__social--list__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li className="header__social--list__item">
                <a
                  href="https://www.facebook.com/chrisalee222/"
                  className="header__social--list__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-square"></i>
                </a>
              </li>
              <li className="header__social--list__item">
                <a
                  href="https://github.com/chrisalee"
                  className="header__social--list__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </Card>
      </div>

      <div className="card__spacing">
        <Card>
          <div className="card__header">
            <span>Recent Posts</span>
          </div>
          <div className="recentPosts">
            {posts.map((post) => {
              return (
                <Link key={post.id} to={`/post/${post.slug}`}>
                  <div className="recentPost">
                    <h3>{post.blogTitle}</h3>
                    <span>{post.postedOn}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Sidebar;
