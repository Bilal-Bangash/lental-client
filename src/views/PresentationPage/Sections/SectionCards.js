import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import cardsStyle from "assets/jss/material-kit-pro-react/views/presentationSections/cardsStyle.js";

import cardsTest from "assets/img/assets-for-demo/iphone_x_pokerbros.png";

const useStyles = makeStyles(cardsStyle);

export default function SectionCards() {
  const classes = useStyles();
  return (
    <div className={classNames(classes.section, classes.sectionDark)}>
      <div className={classes.container}>
        <GridContainer justify="center">
          
          <GridItem md={9} sm={9} className={classes.mlAuto}>
            <div className={classes.sectionDescription}>
              <h3 className={classes.title}>Start playing instantly</h3>
              <h6 className={classes.description}>
                See you at the tables
              </h6>
              <h5 className={classes.description}>
              Join thousands of players in tournaments, at cash tables, or playing just for fun on your mobile device. Lethal Poker Club hosts private online poker games using the Poker Bros App on your mobile device. Join the club, and we'll see you at the tables!
              </h5>
            </div>
          </GridItem>
          <GridItem md={4} sm={4}>
            <div className={classes.imageContainer}>
              <img src={cardsTest} alt="views" />
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
