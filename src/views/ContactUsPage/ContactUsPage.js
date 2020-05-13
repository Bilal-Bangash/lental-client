/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components used to create a google map
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import PinDrop from "@material-ui/icons/PinDrop";
import Send from "@material-ui/icons/Send";

import Phone from "@material-ui/icons/Phone";
import BusinessCenter from "@material-ui/icons/BusinessCenter";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Footer from "components/Footer/Footer.js";
import ContactUs from "views/ContactUsPage/ContactUs.js";

import contactUsStyle from "assets/jss/material-kit-pro-react/views/contactUsStyle.js";

import swal from "sweetalert";
import { sendEmail } from "../../service/email.service";

const CustomSkinMap = withScriptjs(
  withGoogleMap(() => (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: 44.43353, lng: 26.093928 }}
      defaultOptions={{
        scrollwheel: false,
        zoomControl: true,
        styles: [
          {
            featureType: "water",
            stylers: [
              { saturation: 43 },
              { lightness: -11 },
              { hue: "#0088ff" },
            ],
          },
          {
            featureType: "road",
            elementType: "geometry.fill",
            stylers: [
              { hue: "#ff0000" },
              { saturation: -100 },
              { lightness: 99 },
            ],
          },
          {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{ color: "#808080" }, { lightness: 54 }],
          },
          {
            featureType: "landscape.man_made",
            elementType: "geometry.fill",
            stylers: [{ color: "#ece2d9" }],
          },
          {
            featureType: "poi.park",
            elementType: "geometry.fill",
            stylers: [{ color: "#ccdca1" }],
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{ color: "#767676" }],
          },
          {
            featureType: "road",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#ffffff" }],
          },
          { featureType: "poi", stylers: [{ visibility: "off" }] },
          {
            featureType: "landscape.natural",
            elementType: "geometry.fill",
            stylers: [{ visibility: "on" }, { color: "#b8cb93" }],
          },
          { featureType: "poi.park", stylers: [{ visibility: "on" }] },
          {
            featureType: "poi.sports_complex",
            stylers: [{ visibility: "on" }],
          },
          { featureType: "poi.medical", stylers: [{ visibility: "on" }] },
          {
            featureType: "poi.business",
            stylers: [{ visibility: "simplified" }],
          },
        ],
      }}
    >
      <Marker position={{ lat: 44.43353, lng: 26.093928 }} />
    </GoogleMap>
  ))
);

const useStyles = makeStyles(contactUsStyle);

export default function ContactUsPage() {
  const [inputs, setInputs] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    pockerId: "",
    message: "",
    age: false,
  });

  const handleChange = (event) => {
    if (event.target.name === "age") {
      setInputs({
        ...inputs,
        age: event.target.checked,
      });
      return;
    }
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSend = async () => {
    const { status: isMailSend } = await sendEmail(inputs, "affiliate");
    if (isMailSend) {
      swal({
        title: "Success",
        text: "Your message has been successfully sent to Lethal Poker Club.",
        icon: "success",
        button: "OK",
      });
      setInputs({
        firstName: "",
        lastName: "",
        email: "",
        pockerId: "",
        message: "",
        age: false,
      });
    } else
      swal({
        title: "Server Error",
        text:
          "There is some problem in sending your message. Please try again after some time.",
        icon: "error",
        button: "OK",
      });
  };

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
          color: "primary",
        }}
      />
      <ContactUs />
      {/*} <div className={classes.bigMap}>
        <CustomSkinMap
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={
            <div
              style={{
                height: `100%`,
                borderRadius: "6px",
                overflow: "hidden"
              }}
            />
          }
          mapElement={<div style={{ height: `100%` }} />}
        />
        </div>*/}
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.contactContent}>
          <div className={classes.container}>
            <h2 className={classes.title}>Become our Affiliate</h2>
            <GridContainer>
              <GridItem md={6} sm={6}>
                <p>
                  Work with us as an affiliate
                  <br />
                  <br />
                </p>
                <form>
                  <CustomInput
                    labelText="Your Name"
                    id="float"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      name: "firstName",
                      value: inputs.firstName,
                    }}
                    onChange={handleChange}
                  />
                  <CustomInput
                    labelText="Email address"
                    id="float"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      name: "email",
                      value: inputs.email,
                    }}
                    onChange={handleChange}
                  />
                  <CustomInput
                    labelText="Poker Bros ID"
                    id="float"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      name: "pockerId",
                      value: inputs.pockerId,
                    }}
                    onChange={handleChange}
                  />
                  <CustomInput
                    labelText="Your message"
                    id="float"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 6,
                    }}
                    inputProps={{
                      name: "message",
                      value: inputs.message,
                    }}
                    onChange={handleChange}
                  />
                  <div className={classes.textCenter}>
                    <Button color="primary" round onClick={handleSend}>
                      Send
                    </Button>
                  </div>
                </form>
              </GridItem>
              <GridItem md={4} sm={4} className={classes.mlAuto}>
                <InfoArea
                  className={classes.infoArea}
                  title="Telegram"
                  description={
                    <a
                      href="https://t.me/joinchat/G55emxdeNjC4L_5DEbihNw"
                      target="_blank"
                    >
                      <span>@LethalPoker</span>
                    </a>
                  }
                  icon={Send}
                />
                <InfoArea
                  className={classes.infoArea}
                  title="WhatsApp"
                  description={
                    <a
                      href="https://chat.whatsapp.com/DUrQavZAOEL1bkTszZDosr"
                      target="_blank"
                    >
                      <span>+1(256)274-8756</span>
                    </a>
                  }
                  icon={Phone}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer
        content={
          <div>
            {/*<div className={classes.left}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/?ref=mkpr-contact-us"
                    target="_blank"
                    className={classes.block}
                  >
                    Cryptoanna
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/presentation?ref=mkpr-contact-us"
                    target="_blank"
                    className={classes.block}
                  >
                    About us
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a href="//blog.creative-tim.com/" className={classes.block}>
                    Blog
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/license?ref=mkpr-contact-us"
                    target="_blank"
                    className={classes.block}
                  >
                    Licenses
                  </a>
                </ListItem>
              </List>
        </div> */}
            <div className={classes.right}>
              &copy; {1900 + new Date().getYear()} , made with{" "}
              <Favorite className={classes.icon} /> by{" "}
              <a href="https://t.me/cryptoanna" target="_blank">
                Cryptoanna
              </a>{" "}
              for poker players
            </div>
          </div>
        }
      />
    </div>
  );
}
