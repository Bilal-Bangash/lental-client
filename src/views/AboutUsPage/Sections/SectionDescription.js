import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import descriptionStyle from "assets/jss/material-kit-pro-react/views/aboutUsSections/descriptionStyle.js";

const useStyles = makeStyles(descriptionStyle);

export default function SectionDescription() {
  const classes = useStyles();
  return (
    <div className={classNames(classes.aboutDescription, classes.textCenter)}>
      <GridContainer>
        <GridItem
          md={8}
          sm={8}
          className={classNames(classes.mrAuto, classes.mlAuto)}
        >
          <h5 className={classes.description}>
          Lethal Poker Club uses the Poker Bros App to play private online poker games. The Poker Bros App is certified by Gaming Labs, which ensures that the randomness of the dealing sequence is legitimate. We also feel it offers hands down the best interface and functionality of any of the available poker apps. Must be 18 years or older to play.
          


          </h5>
        </GridItem>
      </GridContainer>
    </div>
  );
}
