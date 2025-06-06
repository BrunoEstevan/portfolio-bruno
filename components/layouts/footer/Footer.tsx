"use client";

import React from "react";
import FooterContainer from "./FooterContainer";
import CopyRight from "./CopyRight";
import SocialLinks from "./SocialLinks";
import Version from "./Version";

const Footer = () => {
  return (
    <FooterContainer>
      <SocialLinks />
      <CopyRight />
      <Version text="1.2.0" />
    </FooterContainer>
  );
};

export default Footer;
