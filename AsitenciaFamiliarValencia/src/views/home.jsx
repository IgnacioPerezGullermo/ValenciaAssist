import React from 'react';
import { NavBar } from '../components/NavBar/NavBar';
import Container from 'react-bootstrap/Container';
import '../css/home.scss';
import { HomeIntro } from '../components/HomeIntro/HomeIntro';
import { HomeAbout } from '../components/HomeAbout/HomeAbout';
import { HomeFooter } from '../components/HomeFooter/HomeFooter';
import '../index.css';
import { HomeStaff } from '../components/HomeStaff/HomeStaff';

export const Home = () => {
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
