import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import TrendingUp from "@material-ui/icons/TrendingUp";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Info from "components/Typography/Info.js";
import Danger from "components/Typography/Danger.js";
import Success from "components/Typography/Success.js";
import Button from "components/CustomButtons/Button.js";

import blogsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.js";

import step1 from "assets/img/how-it-works/1.png";
import step2 from "assets/img/how-it-works/2.png";
import step3 from "assets/img/how-it-works/3.png";
import step4 from "assets/img/how-it-works/4.png";
import step5 from "assets/img/how-it-works/5.png";
import step6 from "assets/img/how-it-works/6.png";
import step7 from "assets/img/how-it-works/7.png";
import step8 from "assets/img/how-it-works/8.png";
const useStyles = makeStyles(blogsStyle);

export default function SectionBlogs({ ...rest }) {
  const classes = useStyles();
  return (
    <div className="cd-section" {...rest}>
      {/* Blogs 1 START */}
      <div className={classes.blog}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={10}
              md={10}
              className={classes.mlAuto + " " + classes.mrAuto}
            >
              <h2 className={classes.title}>How to join the club</h2>
              <br />
              <Card plain blog className={classes.card}>
                <GridContainer>
                  <GridItem xs={12} sm={5} md={5}>
                    <CardHeader image plain>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img src={step1} alt="..." width="150" height="600"/>
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${step1})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    
                    <h3 className={classes.cardTitle}>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                      DOWNLOAD THE POKER BROS APP
                      </a>
                    </h3>
                    <p className={classes.description1}>
                    The Poker Bros App is available from the Google Play or Apple App Store, and is used to host our private games. 
                    </p>
                    
                  </GridItem>
                </GridContainer>
              </Card>
              <Card plain blog className={classes.card}>
                <GridContainer>
                  <GridItem xs={12} sm={7} md={7}>
                    
                    <h3 className={classes.cardTitle}>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                      CREATE AN ACCOUNT ON THE POKER BROS APP
                      </a>
                    </h3>
                    <p className={classes.description1}>
                    Select "Register" then choose a Username & Password for your new account. Write down your Player ID #.
                     
                    </p>
                    
                  </GridItem>
                  <GridItem xs={12} sm={5} md={5}>
                    <CardHeader image plain>
                      <a href="#pablito" onClick={e => e.preventDefault()}>
                        <img src={step2} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${step2})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Blogs 1 END */}
      {/* Blogs 2 START */}
      <div className={classes.blog}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={12}
              md={10}
              className={classes.mlAuto + " " + classes.mrAuto}
            >
              <h2 className={classes.title}>Join Lethal Poker Club on Poker Bros</h2>
              <br />
              <GridContainer>
                <GridItem xs={12} sm={4} md={4}>
                  <Card plain blog>
                    <CardHeader plain image>
                      <a href="#pablito" onClick={e => e.preventDefault()}>
                        <img src={step3} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${step3})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                    <CardBody plain>
                     
                      <h4 className={classes.cardTitle}>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          Click on Join club
                        </a>
                      </h4>
                      
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={4} md={4}>
                  <Card plain blog>
                    <CardHeader plain image>
                      <a href="#pablito" onClick={e => e.preventDefault()}>
                        <img src={step4} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${step4})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                    <CardBody plain>
                      
                      <h4 className={classes.cardTitle}>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          It will you to enter Club Id and referral ID
                        </a>
                      </h4>
                      
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={4} md={4}>
                  <Card plain blog>
                    <CardHeader plain image>
                      <a href="#pablito" onClick={e => e.preventDefault()}>
                        <img src={step5} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${step5})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                    <CardBody plain>
                     <h4 className={classes.cardTitle}>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          Enter the Club ID 21830. If you have a referral ID then you can eneter it here.
                        </a>
                      </h4>
                    </CardBody>
                  </Card>
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Blogs 2 END */}
      {/* Blogs 3 START */}
      <div className={classes.blog}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={10}
              md={10}
              className={classes.mlAuto + " " + classes.mrAuto}
            >
              <Card plain blog className={classes.card}>
                <GridContainer>
                  <GridItem xs={12} sm={4} md={4}>
                    <CardHeader image plain>
                      <a href="#pablito" onClick={e => e.preventDefault()}>
                        <img src={step6} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${step6})`,
                          opacity: "1"
                        }}
                      />
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${step6})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={8} md={8}>
                    
                    <h3 className={classes.cardTitle}>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        Once you send the application, contact us with your PokerBros ID
                      </a>
                    </h3>
                    <p className={classes.description}>
                    Once we’ve reviewed and approved your membership to Lethal Poker Club, you’ll receive an email with instructions on how to deposit funds into your player account. Funds are NOT required to play in Free Roll games, but are required for regular cash games.
                      
                    </p>
                    
                  </GridItem>
                </GridContainer>
              </Card>
              <Card plain blog className={classes.card}>
                <GridContainer>
                  <GridItem xs={12} sm={4} md={4}>
                    <CardHeader image plain>
                      <a href="#pablito" onClick={e => e.preventDefault()}>
                        <img src={step7} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${step7})`,
                          opacity: "1"
                        }}
                      />
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${step7})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={8} md={8}>
         
                    <h3 className={classes.cardTitle}>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        After your application is accepted you can enter the Lethal poker club
                      </a>
                    </h3>
                    <p className={classes.description}>
                      You will be able to see all the tournaments and cash tables that are running 24/7 in our club. 
                      You do not need to deposit any money for playing the freerolls. However, if you chose the play the cash tables, you can contact us or your Agent to make a deposit. 
                    
                      
                    </p>
                    
                  </GridItem>
                </GridContainer>
              </Card>
              <Card plain blog className={classes.card}>
                <GridContainer>
                  <GridItem xs={12} sm={4} md={4}>
                    <CardHeader image plain>
                      <a href="#pablito" onClick={e => e.preventDefault()}>
                        <img src={step8} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${step8})`,
                          opacity: "1"
                        }}
                      />
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${step8})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={8} md={8}>
                   
                    <h3 className={classes.cardTitle}>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        Start playing instantly
                      </a>
                    </h3>
                    <p className={classes.description}>
                      Once you have made the deposit, chips would be credited in your account instantly and you can join any of the running games of your choice.  
                    
                    </p>
                   
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Blogs 3 END */}
      {/* Blogs 4 START */}
      {/*<div className={classes.blog}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={classes.mlAuto + " " + classes.mrAuto}
            >
              <h2 className={classes.title}>Latest Blogposts 4</h2>
              <br />
              <Card plain blog className={classes.card4}>
                <CardHeader image plain>
                  <a href="#pablito" onClick={e => e.preventDefault()}>
                    <img src={bg5} alt="..." />
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{ backgroundImage: `url(${bg5})`, opacity: "1" }}
                  />
                </CardHeader>
                <CardBody plain>
                  <Info>
                    <h6 className={classes.cardCategory}>FASHION</h6>
                  </Info>
                  <h3 className={classes.cardTitle}>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      Autodesk looks to future of 3D
                    </a>
                  </h3>
                  <h5 className={classes.description}>
                    Don{"'"}t be scared of the truth because we need to restart
                    the human foundation in truth And I love you like Kanye
                    loves Kanye I love Rick Owens’ bed design but the back is
                    too high for the beams and angle of the ceiling I also
                    wanted to point out that it’s the first album to go number 1
                    off of streaming...
                  </h5>
                  <Button round color="primary">
                    Read More
                  </Button>
                </CardBody>
              </Card>
              <Card plain blog className={classes.card4}>
                <CardHeader image plain>
                  <a href="#pablito" onClick={e => e.preventDefault()}>
                    <img src={blog6} alt="..." />
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{ backgroundImage: `url(${blog6})`, opacity: "1" }}
                  />
                </CardHeader>
                <CardBody plain>
                  <Success>
                    <h6 className={classes.cardCategory}>LIFESTYLE</h6>
                  </Success>
                  <h3 className={classes.cardTitle}>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      We will breathe clean air and exercise
                    </a>
                  </h3>
                  <h5 className={classes.description}>
                    Don{"'"}t be scared of the truth because we need to restart
                    the human foundation in truth And I love you like Kanye
                    loves Kanye I love Rick Owens’ bed design but the back is
                    too high for the beams and angle of the ceiling I also
                    wanted to point out that it’s the first album to go number 1
                    off of streaming...
                  </h5>
                  <Button round color="primary">
                    Read More
                  </Button>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
                      </div>*/}
      {/* Blogs 4 END */}
    </div>
  );
}
