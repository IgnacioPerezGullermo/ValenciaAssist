import React from 'react';
import { NavBar } from '../components/NavBar/NavBar';
import { HomeIntro } from '../components/HomeIntro/HomeIntro';
import { HomeAbout } from '../components/HomeAbout/HomeAbout';
import { HomeFooter } from '../components/HomeFooter/HomeFooter';
import { HomeStaff } from '../components/HomeStaff/HomeStaff';

export const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <HomeIntro />
      <HomeAbout />
      <HomeStaff />
      <HomeFooter />
    </div>
  );
};
