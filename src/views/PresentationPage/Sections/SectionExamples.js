import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import examplesStyle from "assets/jss/material-kit-pro-react/views/presentationSections/examplesStyle.js";
import imagesStyles from "assets/jss/material-kit-pro-react/imagesStyles.js";

import mtt from "assets/img/games/lp-mtt.jpg";
import nlh from "assets/img/games/lp-nlh.jpg";
import plo from "assets/img/games/lp-plo.jpg";
import plo5 from "assets/img/games/lp-plo5.jpg";
import plo6 from "assets/img/games/lp-plo6.jpg";
import jackpot from "assets/img/games/lp-jackpot.jpg";

import exLanding from "assets/img/assets-for-demo/example-pages/ex-landing.jpg";
import exContact from "assets/img/assets-for-demo/example-pages/ex-contact.jpg";
import exBlogPost from "assets/img/assets-for-demo/example-pages/ex-blog-post.jpg";
import exProductPage from "assets/img/assets-for-demo/example-pages/ex-product.jpg";
import exLoginPage from "assets/img/assets-for-demo/example-pages/ex-login.jpg";
import exPricing from "assets/img/assets-for-demo/example-pages/ex-pricing.jpg";
import exSignup from "assets/img/assets-for-demo/example-pages/ex-register.jpg";
import exProfile from "assets/img/assets-for-demo/example-pages/ex-profile.jpg";
import exBlog from "assets/img/assets-for-demo/example-pages/ex-blog-posts.jpg";

const styles = {
  ...examplesStyle,
  ...imagesStyles
};

const useStyles = makeStyles(styles);

export default function SectionExamples() {
  const classes = useStyles();
  return (
    <div className={classNames(classes.section, classes.sectionDark)}>
      <div className={classes.container}>
        <GridItem md={8} className={classNames(classes.mrAuto, classes.mlAuto)}>
          <div className={classes.sectionDescription}>
            <h2 className={classes.title}>Join games 24/7</h2>
            <h5 className={classes.description}>
              You can join your favorite games instantly from anywhere, ANYTIME
            </h5>
          </div>
        </GridItem>
        <GridContainer>
        
          <GridItem md={4} sm={4} xs={4}>
            <h4 className={classes.title}>Daily Tournaments</h4>
            <Card className={classes.imgCardExtended}>
              <Link to={"/contact-us"}>
                <img
                  src={mtt}
                  alt="MTT"
                  className={classes.imgCard}
                />
              </Link>
            </Card>
            <h4 className={classes.title}>Texas Holdem</h4>
            <Card className={classes.imgCardExtended}>
              <Link to={"/contact-us"}>
                <img
                  src={nlh}
                  alt="nlh"
                  className={classes.imgCard}
                />
              </Link>
            </Card>
            
          </GridItem>
          <GridItem md={4} sm={4} xs={4}>
            <h4 className={classes.title}>Omaha 5 cards</h4>
            <Card className={classes.imgCardExtended}>
              <Link to={"/contact-us"}>
                <img
                  src={plo5}
                  alt="Blog Post"
                  className={classes.imgCard}
                />
              </Link>
            </Card>
            <h4 className={classes.title}>Omaha 6 cards</h4>
            <Card className={classes.imgCardExtended}>
              <Link to={"/contact-us"}>
                <img
                  src={plo6}
                  alt="plo6"
                  className={classes.imgCard}
                />
              </Link>
            </Card>
            
          </GridItem>
          <GridItem md={4} sm={4} xs={4}>
            <h4 className={classes.title}>Omaha 4 cards</h4>
            <Card className={classes.imgCardExtended}>
              <Link to={"/contact-us"}>
                <img
                  src={plo}
                  alt="plo"
                  className={classes.imgCard}
                />
              </Link>
            </Card>
            <h4 className={classes.title}>Jackpot</h4>
            <Card className={classes.imgCardExtended}>
              <Link to={"/contact-us"}>
                <img
                  src={jackpot}
                  alt="Jackpot"
                  className={classes.imgCard}
                />
              </Link>
            </Card>
            
            
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
