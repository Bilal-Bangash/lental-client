/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
// sections for this page
import SectionDescription from "views/PresentationPage/Sections/SectionDescription.js";
import SectionComponents from "views/PresentationPage/Sections/SectionComponents.js";
import SectionCards from "views/PresentationPage/Sections/SectionCards.js";
import SectionContent from "views/PresentationPage/Sections/SectionContent.js";
import SectionSections from "views/PresentationPage/Sections/SectionSections.js";
import SectionExamples from "views/PresentationPage/Sections/SectionExamples.js";
import SectionFreeDemo from "views/PresentationPage/Sections/SectionFreeDemo.js";
import SectionOverview from "views/PresentationPage/Sections/SectionOverview.js";
import SectionPricing from "views/PresentationPage/Sections/SectionPricing.js";
import SectionFeatures from "./Sections/SectionFeatures.js";

import presentationStyle from "assets/jss/material-kit-pro-react/views/presentationStyle.js";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(presentationStyle);

export default function PresentationPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Header
        brand="Lethal Poker"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "dark",
        }}
      />
      <Parallax
        image={require("assets/img/spade.jpg")}
        className={classes.parallax}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1>
                  <img
                    src={require("../../assets/img/lethal-poker-light-logo.png")}
                    alt="logo"
                    width={200}
                  />
                </h1>
                <h3 className={classes.title}>connect with us</h3>

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
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionDescription />
        {/*<SectionComponents />*/}
        <SectionFeatures />

        <SectionContent />

        <SectionExamples />

        {/*<SectionFreeDemo />
        <SectionOverview />*/}
      </div>
      {/*  <SectionPricing /> */}
      <Footer
        theme="white"
        content={
          <Grid container>
            <Grid item xs={12} sm={3}>
              <div className={classes.left}>
                <a href="/" className={classes.footerBrand}>
                  Lethal Poker
                </a>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className={classes.pullCenter}>
                <List className={classes.list}>
                  <ListItem className={classes.inlineBlock}>
                    <a href="/about-us" className={classes.block}>
                      About us
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a href="/contact-us" className={classes.block}>
                      Contact Us
                    </a>
                  </ListItem>
                </List>
              </div>
            </Grid>
            <Grid item xs={12} sm={3}>
              <div className={classes.rightLinks}>
                <ul>
                  <li>
                    <Button
                      href="https://bit.ly/35l85Xu"
                      target="_blank"
                      color="telegram"
                      justIcon
                      simple
                    >
                      <i className="fab fa-telegram" />
                    </Button>
                  </li>
                  {/*<li>
                  <Button
                    href="https://bit.ly/2Yg1OuG"
                    target="_blank"
                    color="discord"
                    justIcon
                    simple
                  >
                    <i className="fab fa-discord" />
                  </Button>
                </li>*/}
                  <li>
                    <Button
                      href="https://bit.ly/3cVwEN3"
                      target="_blank"
                      color="facebook"
                      justIcon
                      simple
                    >
                      <i className="fab fa-facebook" />
                    </Button>
                  </li>
                  <li>
                    <Button
                      href="https://bit.ly/3aPd7MS"
                      target="_blank"
                      color="instagram"
                      justIcon
                      simple
                    >
                      <i className="fab fa-instagram" />
                    </Button>
                  </li>
                </ul>
              </div>
            </Grid>
          </Grid>
        }
      />
    </div>
  );
}
