import React, { useState } from 'react';
import SideNavbar from './SideNavbar';
import MainContent from './MainContent';
import './SocialMediaPage.scss';

const SocialMediaPage = () => {

  return (
    <div className="social-media-page">
      <SideNavbar  />
      <MainContent  />
      
    </div>
  );
};

export default SocialMediaPage;
