import React from "react";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

// @material-ui icons
import Apps from "@material-ui/icons/Apps";
import ViewDay from "@material-ui/icons/ViewDay";
import AttachMoney from "@material-ui/icons/AttachMoney";
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import descriptionStyle from "assets/jss/material-kit-pro-react/views/presentationSections/descriptionStyle.js";

const useStyles = makeStyles(descriptionStyle);

export default function SectionDescription() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem md={8} sm={8}>
            <h1 className={classes.description}>
            Poker at your fingertips
            </h1>
            <br>
            </br>
            <h4 className={classes.description}>
            Tables are available whenever you are!!!
            </h4>
          </GridItem>
        </GridContainer>
        <div className={classes.features}>
          <GridContainer>
            <GridItem md={4} sm={4}>
              <InfoArea
                title="Fast Payouts"
                description="Make quick and easy cash outs/deposits via various payment methods. You do not need to deposit money to play in Free Roll games hosted by the club."
                icon={AttachMoney}
                iconColor="success"
                vertical={true}
              />
            </GridItem>
            <GridItem md={4} sm={4}>
              <InfoArea
                title="Secure & Reliable"
                description="You can remain anonymous. You don’t have to submit any personal information or upload any documents, although we do collect some basic information from our players."
                icon={Fingerprint}
                iconColor="danger"
                vertical={true}
              />
            </GridItem>
            <GridItem md={4} sm={4}>
              <InfoArea
                title="24/7 Support"
                description="We offer quick and reliable support. You can text us at WhatsApp or Telegram. You can also contact us through the Chat feature through facebook messenger, or via emai"
                icon={Chat}
                iconColor="primary"
                vertical={true}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
