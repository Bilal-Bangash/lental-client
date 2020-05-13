import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Share from "@material-ui/icons/Share";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
// core components
import Header from "components/Header/Header.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import headersStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/headersStyle.js";

import bg12 from "assets/img/bg12.jpg";
import office2 from "assets/img/examples/office2.jpg";
import dg1 from "assets/img/club.jpg";
import dg2 from "assets/img/diamond.jpg";
import dg3 from "assets/img/heart.jpg";
import GetAppOutlinedIcon from '@material-ui/icons/GetAppOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';


const useStyles = makeStyles(headersStyle);

export default function SectionHeaders({ ...rest }) {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };
  return (
    // we've set the className to cd-section so we can make smooth scroll to it
    <div className="cd-section" {...rest}>
      <div className={classes.sectionBlank} id="blanksection" />
      
      {/* HEADER 3 START */}
      <div>
        
        <Carousel {...settings}>
          {/* Carousel 1 START */}
          <div>
            <div
              className={classes.pageHeader}
              style={{ backgroundImage: `url("${dg1}")` }}
            >
              <div className={classes.container}>
                <GridContainer>
                  <GridItem xs={12} sm={6} md={6}>
                    <h1 className={classes.title}>Step 1 - Download</h1>
                    <h4>
                    Download and install Poker Bros App from the Google Play or Apple App Store, and is used to host our private games. Select the appropriate link below to download the App on your mobile device.
                    </h4>
                    <br />
                    <Button color="danger" size="lg" href="https://apple.co/2RDdTWB" target="_blank">
                    <GetAppOutlinedIcon className={classes.dropdownIcons} /> App Store
                    </Button>
                    <Button color="danger" size="lg" href="https://bit.ly/3bm9hw1" target="_blank">
                    <GetAppOutlinedIcon className={classes.dropdownIcons} /> Google PLay
                    </Button>
                    
                  </GridItem>
                </GridContainer>
              </div>
            </div>
          </div>
          {/* Carousel 1 END */}
          {/* Carousel 2 START */}
          <div>
            <div
              className={classes.pageHeader}
              style={{ backgroundImage: `url("${dg2}")` }}
            >
              <div className={classes.container}>
                <GridContainer>
                  <GridItem
                    xs={12}
                    sm={8}
                    md={8}
                    className={classNames(
                      classes.mlAuto,
                      classes.mrAuto,
                      classes.textCenter
                    )}
                  >
                    <h1 className={classes.title}>Step 2 - Apply</h1>
                    <h4>
                      Create an account on Poker Bros and send your application to join the Club ID 21830.
                    </h4>
                    <br />
                    <h6>Connect with us on:</h6>
                    <div>
                    <Button
                href="https://bit.ly/3cVwEN3"
                target="_blank"
                color="white"
                justIcon
                simple
                size="lg"
              >
                <i className="fab fa-facebook" />
              </Button>
           
              <Button
                href="https://bit.ly/3aPd7MS"
                target="_blank"
                color="white"
                justIcon
                simple
                size="lg"
              >
                <i className="fab fa-instagram" />
              </Button>
              <Button
                href="https://bit.ly/35l85Xu"
                target="_blank"
                color="white"
                justIcon
                simple
                size="lg"
              >
                <i className="fab fa-telegram" />
              </Button>
            
              <Button
                href="https://bit.ly/2Yg1OuG"
                target="_blank"
                color="white"
                justIcon
                simple
                size="lg"
              >
                <i className="fab fa-discord" />
              </Button>
                    {/*<Button color="white" simple size="lg" href="https://t.me/lethalpoker" justIcon>
                        <i className="fab fa-telegram" />
                      </Button>
                      <Button color="white" simple size="lg" justIcon>
                        <i className="fab fa-facebook-square" />
                      </Button>
                      
                      <Button color="white" simple size="lg" justIcon>
                        <i className="fab fa-instagram" />
                    </Button>*/}
                    </div>
                  </GridItem>
                </GridContainer>
              </div>
            </div>
          </div>
          {/* Carousel 2 END */}
          {/* Carousel 3 START */}
          <div>
            <div
              className={classes.pageHeader}
              style={{ backgroundImage: `url("${dg3}")` }}
            >
              <div className={classes.container}>
                <GridContainer>
                  <GridItem
                    xs={12}
                    sm={7}
                    md={7}
                    className={classNames(classes.mlAuto, classes.textRight)}
                  >
                    <h1 className={classes.title}>Step 3 - Deposit</h1>
                    <h4>
                    Once we’ve reviewed and approved your membership to Lethal Poker Club, connect with us to deposit funds into your player account throuch social media. Funds are NOT required to play in Free Roll games, but are required for regular cash games.
                    </h4>
                    <br />
                    <div>
                    <Button
                href="https://bit.ly/3cVwEN3"
                target="_blank"
                color="white"
                justIcon
                simple
                size="lg"
              >
                <i className="fab fa-facebook" />
              </Button>
           
              <Button
                href="https://bit.ly/3aPd7MS"
                target="_blank"
                color="white"
                justIcon
                simple
                size="lg"
              >
                <i className="fab fa-instagram" />
              </Button>
              <Button
                href="https://bit.ly/35l85Xu"
                target="_blank"
                color="white"
                justIcon
                simple
                size="lg"
              >
                <i className="fab fa-telegram" />
              </Button>
            
              <Button
                href="https://bit.ly/2Yg1OuG"
                target="_blank"
                color="white"
                justIcon
                simple
                size="lg"
              >
                <i className="fab fa-discord" />
              </Button>
                      <Button color="danger" size="lg" href="/contact-us">
                      <EmailOutlinedIcon className={classes.dropdownIcons} />Contact us
                      </Button>
                    </div>
                  </GridItem>
                </GridContainer>
              </div>
            </div>
          </div>
          {/* Carousel 3 END */}
        </Carousel>
      </div>
      {/* HEADER 3 END */}
    </div>
  );
}
