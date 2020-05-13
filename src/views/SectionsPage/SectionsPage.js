import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
// sections of this Page
import SectionHeaders from "./Sections/SectionHeaders.js";
import SectionFeatures from "./Sections/SectionFeatures.js";
import SectionBlogs from "./Sections/SectionBlogs.js";
import SectionCards from "./Sections/SectionCards.js";
import SectionCarousel from "./Sections/SectionCarousel.js";

import SectionTeams from "./Sections/SectionTeams.js";
import sectionsPageStyle from "assets/jss/material-kit-pro-react/views/sectionsPageStyle.js";

const useStyles = makeStyles(sectionsPageStyle);

export default function SectionsPage() {
  React.useEffect(() => {
    var href = window.location.href.substring(
      window.location.href.lastIndexOf("#") + 1
    );
    if (window.location.href.lastIndexOf("#") > 0) {
      document.getElementById(href).scrollIntoView();
    }
    window.addEventListener("scroll", updateView);
    updateView();
    return function cleanup() {
      window.removeEventListener("scroll", updateView);
    };
  });
  const updateView = () => {
    var contentSections = document.getElementsByClassName("cd-section");
    var navigationItems = document
      .getElementById("cd-vertical-nav")
      .getElementsByTagName("a");

    for (let i = 0; i < contentSections.length; i++) {
      var activeSection =
        parseInt(navigationItems[i].getAttribute("data-number"), 10) - 1;
      if (
        contentSections[i].offsetTop - window.innerHeight / 2 <
          window.pageYOffset &&
        contentSections[i].offsetTop +
          contentSections[i].scrollHeight -
          window.innerHeight / 2 >
          window.pageYOffset
      ) {
        navigationItems[activeSection].classList.add("is-selected");
      } else {
        navigationItems[activeSection].classList.remove("is-selected");
      }
    }
  };
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };
  const smoothScroll = target => {
    var targetScroll = document.getElementById(target);
    scrollGo(document.documentElement, targetScroll.offsetTop, 1250);
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
  const classes = useStyles();
  return (
    <div>
      <Header
        color="info"
        brand="Lethal Poker"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
      />
      <div className={classes.main}>
        <SectionHeaders id="headers" />
        <SectionBlogs />
      
     
   
        
     {/*<SectionFeatures id="features" />
        
        <SectionPricing id="pricing" />
       
  <SectionContacts id="contacts" />*/}
      </div>
      <nav id="cd-vertical-nav">
        <ul>
          <li>
            <a
              href="#headers"
              data-number="1"
              className="is-selected"
              onClick={e => {
                var isMobile = navigator.userAgent.match(
                  /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
                );
                if (isMobile) {
                  // if we are on mobile device the scroll into view will be managed by the browser
                } else {
                  e.preventDefault();
                  smoothScroll("headers");
                }
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">TOP</span>
            </a>
          </li>
          
          <li>
            <a
              href="#blogs"
              data-number="3"
              className=""
              onClick={e => {
                var isMobile = navigator.userAgent.match(
                  /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
                );
                if (isMobile) {
                  // if we are on mobile device the scroll into view will be managed by the browser
                } else {
                  e.preventDefault();
                  smoothScroll("blogs");
                }
              }}
            >
              
            </a>
          </li>
          <li>
            <a
              href="#teams"
              data-number="4"
              className=""
              onClick={e => {
                var isMobile = navigator.userAgent.match(
                  /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
                );
                if (isMobile) {
                  // if we are on mobile device the scroll into view will be managed by the browser
                } else {
                  e.preventDefault();
                  smoothScroll("teams");
                }
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Teams</span>
            </a>
          </li>
          
          
          
          
        </ul>
      </nav>
    </div>
  );
}
