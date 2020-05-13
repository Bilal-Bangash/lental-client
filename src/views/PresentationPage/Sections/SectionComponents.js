import React from "react";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import componentsStyle from "assets/jss/material-kit-pro-react/views/presentationSections/componentsStyle.js";

import macbookImage from "assets/img/assets-for-demo/presentationViewSectionComponent/pb1.png";
import shoppingCartImage from "assets/img/assets-for-demo/presentationViewSectionComponent/table.jpg";
import shareButtonImage from "assets/img/assets-for-demo/presentationViewSectionComponent/share-btn.jpg";
import freeroll from "assets/img/assets-for-demo/presentationViewSectionComponent/freeroll.jpg";
import twitterImage from "assets/img/assets-for-demo/presentationViewSectionComponent/coloured-card.jpg";
import iconsImage from "assets/img/assets-for-demo/presentationViewSectionComponent/social-row.jpg";
import repostImage from "assets/img/assets-for-demo/presentationViewSectionComponent/pin-btn.jpg";

const useStyles = makeStyles(componentsStyle);

export default function SectionComponents() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.container}>
        <GridContainer justify="center">
       
          <GridItem md={5} lg={5} sm={12} xs={12}>
            <h3 className={classes.title}>Daily freerolls</h3>
            <h6 className={classes.description}>
            No-Limit Hold'em and Pot Limit Omaha 
            </h6>
            <h5 className={classes.description}>
            We offer Freeroll games daily for club members. Take your shot at winning cash prizes with no deposit or funds required. You can play for free at tables in the Global Lobby, or join us for cash games and tournaments in the Club Lobby. Tables start at .30/.60 for No-Limit Hold'em and Pot Limit Omaha games. 
            </h5>
          </GridItem>

          <GridItem xs={12} sm={12} md={6} lg={6} className={classes.mlAuto}>
            <div className={classes.imageContainer}>
              <img
                src={macbookImage}
                alt="macbook"
                className={classes.componentsMacbook}
              />
              
             
              
            </div>
          </GridItem>
          
        </GridContainer>
      </div>
    </div>
  );
}
