import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import {
  FooterWrapper,
  ContactInfo,
  SocialFollow,
  SocialIcon
} from "../../styles/Styles";

function Footer() {
  return (
    <FooterWrapper>
      <ContactInfo>
        <h3>Contact Us</h3>
        <p>
          Email:
          <br />
          test
          <br />
          @gmail.com
        </p>
        <p>
          Location:
          <br />
          Chicago, IL
        </p>
      </ContactInfo>
      <SocialFollow>
        <h3>Follow us on social media!</h3>
        <div>
          <SocialIcon href="#">
            <FontAwesomeIcon icon={faGithub} size="3x" />
          </SocialIcon>
          <SocialIcon href="#">
            <FontAwesomeIcon icon={faTwitter} size="3x" />
          </SocialIcon>
          <SocialIcon href="#">
            <FontAwesomeIcon icon={faLinkedin} size="3x" />
          </SocialIcon>
        </div>
      </SocialFollow>
    </FooterWrapper>
  );
}

export default Footer;
