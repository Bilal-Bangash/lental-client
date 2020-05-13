import React from "react";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// library used for cool animations
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

import contentStyle from "assets/jss/material-kit-pro-react/views/presentationSections/contentStyle.js";
// images
import presentationiPad from "assets/img/assets-for-demo/presentationViewSectionComponent/ipad12.png";
import presentationiPadComments from "assets/img/assets-for-demo/presentationViewSectionComponent/jackpot3.PNG";
import presentationiPadTable from "assets/img/assets-for-demo/presentationViewSectionComponent/jackpot5.jpg";

const useStyles = makeStyles(contentStyle);

export default function SectionContent() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
        <GridItem md={7} className={classes.mlAuto}>
            <div className={classes.imageContainer}>
              <div className={classes.animeAreaImg}>
                <ScrollAnimation animateIn="fadeInUp">
                  <img
                    src={presentationiPadComments}
                    alt="iPad comments"
                    className={classes.areaImg}
                  />
                </ScrollAnimation>
              </div>
              <div className={classes.animeInfoImg}>
                <ScrollAnimation animateIn="fadeInUp">
                  <img
                    src={presentationiPadTable}
                    alt="iPad table"
                    className={classes.infoImg}
                  />
                </ScrollAnimation>
              </div>
              <img
                className={classes.ipadImg}
                src={presentationiPad}
                alt="iPad"
              />
            </div>
          </GridItem>
          <GridItem md={4}>
            <div className={classes.sectionDescription}>
              <h3 className={classes.title}>Bad beat jackpots</h3>
              <h6 className={classes.description}>
                Win huge for bad beats
              </h6>
              <h5 className={classes.description}>
              We pride ourselves on offering the best Bad beat jackpot not just in Holde'm, but also in Pot Limit Omaha 4 & 5 cards. 
              </h5>
            </div>
          </GridItem>
          
        </GridContainer>
      </div>
    </div>
  );
}
