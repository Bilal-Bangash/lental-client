import React from "react";
// react components used to create a google map
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// @material-ui/icons
import Send from "@material-ui/icons/Send";
import Phone from "@material-ui/icons/Phone";
import Check from "@material-ui/icons/Check";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import contactsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/contactsStyle.js";

import city from "assets/img/heart.jpg";

import swal from "sweetalert";
import { sendEmail } from "../../service/email.service";

const useStyles = makeStyles(contactsStyle);

const RegularMap = withScriptjs(
  withGoogleMap(() => (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: 44.43353, lng: 26.093928 - 0.025 }}
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

export default function SectionContacts({ ...rest }) {
  const [checked, setChecked] = React.useState([]);
  const [inputs, setInputs] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    pockerId: "",
    message: "",
    age: false,
  });

  const handleToggle = (value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

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
    const { status: isMailSend } = await sendEmail(inputs, "club");
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
    <div className="cd-section" {...rest}>
      {/* Contact us 1 START */}
      <div
        className={classes.contacts + " " + classes.section}
        style={{ backgroundImage: `url(${city})` }}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={5} md={5}>
              <h2 className={classes.title}>Become a Club member</h2>
              <h5 className={classes.description}>
                Send your application along with your PokerBros user ID for
                getting your application approved.
              </h5>
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
            <GridItem xs={12} sm={5} md={5} className={classes.mlAuto}>
              <Card className={classes.card1}>
                <form>
                  <CardHeader
                    contact
                    color="primary"
                    className={classes.textCenter}
                  >
                    <h4 className={classes.cardTitle}>Join our club</h4>
                  </CardHeader>
                  <CardBody>
                    <GridContainer>
                      <GridItem xs={12} sm={6} md={6}>
                        <CustomInput
                          labelText="First Name"
                          id="first"
                          formControlProps={{
                            fullWidth: true,
                          }}
                          inputProps={{
                            name: "firstName",
                            value: inputs.firstName,
                          }}
                          onChange={handleChange}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={6} md={6}>
                        <CustomInput
                          labelText="Last Name"
                          id="last"
                          formControlProps={{
                            fullWidth: true,
                          }}
                          inputProps={{
                            name: "lastName",
                            value: inputs.lastName,
                          }}
                          onChange={handleChange}
                        />
                      </GridItem>
                    </GridContainer>
                    <CustomInput
                      labelText="Email Address"
                      id="email-address"
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
                      id="pokerbros-id"
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
                      labelText="Your Message"
                      id="message"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        multiline: true,
                        rows: 5,
                        name: "message",
                        value: inputs.message,
                      }}
                      onChange={handleChange}
                    />
                  </CardBody>
                  <CardFooter className={classes.justifyContentBetween}>
                    {/*<FormControlLabel
                      control={
                        <Checkbox
                          name="age"
                          tabIndex={-1}
                          onClick={() => handleToggle(1)}
                          checkedIcon={
                            <Check className={classes.checkedIcon} />
                          }
                          icon={<Check className={classes.uncheckedIcon} />}
                          classes={{
                            checked: classes.checked,
                            root: classes.checkRoot,
                          }}
                        />
                      }
                      classes={{ label: classes.label }}
                      label="I'm older than 21 years"
                      onChange={handleChange}
                    />*/}
                    <Button
                      color="primary"
                      className={classes.pullRight}
                      onClick={handleSend}
                    >
                      Send
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Contact us 1 END */}
    </div>
  );
}
