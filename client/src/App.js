import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import Post from "./pages/Post";
import AllPosts from "./pages/AllPosts";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Hero />

        <Switch>
          <Route path='/' exact     component={Home} />
          <Route path='/contact-us' component={Contact} />
          <Route path='/about-us'   component={AboutUs} />
          <Route path='/post/:slug' component={Post} />
          <Route path='/posts'      component={AllPosts} />
          <Route path="*" component={PageNotFound} />
        </Switch>

      </div>
    </BrowserRouter>
  );
};

export default App;
