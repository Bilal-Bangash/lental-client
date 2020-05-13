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

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui icons
// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import imagesStyles from "assets/jss/material-kit-pro-react/imagesStyles.js";
import step1 from "assets/img/how-it-works/1.png";

const style = {
  ...imagesStyles
};

const useStyles = makeStyles(style);

export default function CardExampleImages() {
  const classes = useStyles();
  return (
    <Card style={{ width: "15rem" }}>
      <img
        style={{ height: "480px", width: "100%", display: "block" }}
        className={classes.imgCardTop}
        src={step1}
        alt="Card-img-cap"
      />
      <CardBody>
        <p>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </CardBody>
    </Card>
  );
}