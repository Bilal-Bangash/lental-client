/*!

=========================================================
* Material Kit PRO React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";

import "assets/scss/material-kit-pro-react.scss?v=1.8.0";

// pages for this product
import AboutUsPage from "views/AboutUsPage/AboutUsPage.js";
/*import BlogPostPage from "views/BlogPostPage/BlogPostPage.js";
import BlogPostsPage from "views/BlogPostsPage/BlogPostsPage.js";
import ComponentsPage from "views/ComponentsPage/ComponentsPage.js";*/
import ContactUsPage from "views/ContactUsPage/ContactUsPage.js";

import PresentationPage from "views/PresentationPage/PresentationPage.js";

import SectionsPage from "views/SectionsPage/SectionsPage.js";

import ErrorPage from "views/ErrorPage/ErrorPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/about-us" component={AboutUsPage} />
     {/* <Route path="/blog-post" component={BlogPostPage} />
      <Route path="/blog-posts" component={BlogPostsPage} />
<Route path="/components" component={ComponentsPage} />*/}
      <Route path="/contact-us" component={ContactUsPage} />
   
    
      <Route path="/how-it-works" component={SectionsPage} />
     
      <Route path="/error-page" component={ErrorPage} />
      <Route path="/" component={PresentationPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
