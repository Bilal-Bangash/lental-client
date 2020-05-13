/* eslint-disable */
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import Apps from "@material-ui/icons/Apps";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import ViewDay from "@material-ui/icons/ViewDay";
import Dns from "@material-ui/icons/Dns";
import Build from "@material-ui/icons/Build";
import ListIcon from "@material-ui/icons/List";
import People from "@material-ui/icons/People";
import Assignment from "@material-ui/icons/Assignment";
import MonetizationOn from "@material-ui/icons/MonetizationOn";
import Chat from "@material-ui/icons/Chat";
import Call from "@material-ui/icons/Call";
import ViewCarousel from "@material-ui/icons/ViewCarousel";
import AccountBalance from "@material-ui/icons/AccountBalance";
import ArtTrack from "@material-ui/icons/ArtTrack";
import ViewQuilt from "@material-ui/icons/ViewQuilt";
import LocationOn from "@material-ui/icons/LocationOn";
import Fingerprint from "@material-ui/icons/Fingerprint";
import AttachMoney from "@material-ui/icons/AttachMoney";
import Store from "@material-ui/icons/Store";
import AccountCircle from "@material-ui/icons/AccountCircle";
import PersonAdd from "@material-ui/icons/PersonAdd";
import Layers from "@material-ui/icons/Layers";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import LineStyle from "@material-ui/icons/LineStyle";
import Error from "@material-ui/icons/Error";
import PhonelinkSetupOutlinedIcon from '@material-ui/icons/PhonelinkSetupOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';





// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-pro-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  const smoothScroll = (e, target) => {
    if (window.location.pathname === "/sections") {
      var isMobile = navigator.userAgent.match(
        /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
      );
      if (isMobile) {
        // if we are on mobile device the scroll into view will be managed by the browser
      } else {
        e.preventDefault();
        var targetScroll = document.getElementById(target);
        scrollGo(document.documentElement, targetScroll.offsetTop, 1250);
      }
    }
  };
  const scrollGo = (element, to, duration) => {
    var start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20;

    var animateScroll = function() {
      currentTime += increment;
      var val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  };
  var onClickSections = {};

  const { dropdownHoverColor } = props;
  const classes = useStyles();
  return (
    <List className={classes.list + " " + classes.mlAuto}>
    <Link to="/" className={classes.dropdownLink}>
              <HomeOutlinedIcon className={classes.dropdownIcons} /> Home
            </Link>
      
      <Link
              to="/how-it-works"
              className={classes.dropdownLink}
              onClick={e => smoothScroll(e, "headers")}
            >
              <PhonelinkSetupOutlinedIcon className={classes.dropdownIcons} /> How it works
            </Link>
      
      <Link to="/about-us" className={classes.dropdownLink}>
              <GroupOutlinedIcon className={classes.dropdownIcons} /> About Us
            </Link>
            <ListItem className={classes.listItem}>
        <Button
          href="/contact-us"
          color={window.innerWidth < 960 ? "info" : "white"}
         
          className={classes.navButton}
          round
        >
          <EmailOutlinedIcon className={classes.dropdownIcons} /> Contact us
        </Button>
      </ListItem>
            <Button
                href="https://bit.ly/3cVwEN3"
                target="_blank"
                color="facebook"
                justIcon
                simple
              >
                <i className="fab fa-facebook" />
              </Button>
           
              <Button
                href="https://bit.ly/3aPd7MS"
                target="_blank"
                color="instagram"
                justIcon
                simple
              >
                <i className="fab fa-instagram" />
              </Button>
     {/*<ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          hoverColor={dropdownHoverColor}
          buttonText="Examples"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={ViewCarousel}
          dropdownList={[
            <Link to="/about-us" className={classes.dropdownLink}>
              <AccountBalance className={classes.dropdownIcons} /> About Us
            </Link>,
            
            
            
            <Link to="/pricing" className={classes.dropdownLink}>
              <AttachMoney className={classes.dropdownIcons} /> Pricing Page
            </Link>
            
          ]}
        />
        </ListItem> 
         <div className={classes.rightLinks}>
              
             
           
              <Button
                href="https://bit.ly/3cVwEN3"
                target="_blank"
                color="facebook"
                justIcon
                simple
              >
                <i className="fab fa-facebook" />
              </Button>
           
              <Button
                href="https://bit.ly/3aPd7MS"
                target="_blank"
                color="instagram"
                justIcon
                simple
              >
                <i className="fab fa-instagram" />
              </Button>
              <Button
                href="https://bit.ly/35l85Xu"
                target="_blank"
                color="telegram"
                justIcon
                simple
              >
                <i className="fab fa-telegram" />
              </Button>
            
              <Button
                href="https://bit.ly/2Yg1OuG"
                target="_blank"
                color="discord"
                justIcon
                simple
              >
                <i className="fab fa-discord" />
              </Button>
            
        </div>*/}
     
     
    </List>
  );
}

HeaderLinks.defaultProps = {
  hoverColor: "primary"
};

HeaderLinks.propTypes = {
  dropdownHoverColor: PropTypes.oneOf([
    "dark",
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose"
  ])
};
