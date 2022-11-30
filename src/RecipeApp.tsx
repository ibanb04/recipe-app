import React from 'react';
import Footer from './components/Footer/Footer';
import MainContent from './components/MainContent/MainContent';
import MainTitle from './components/MainTitle/MainTitle';
import { MenuMobile } from './components/MenuMobile/MenuMobile';
import NavBar from './components/NavBar/NavBar';

const RecipeApp = () => {
  return (
    <div className="RecipeApp">
      <NavBar />
      <MainTitle />
      <MenuMobile />
      <MainContent />
      <Footer />
    </div>
  );
}

export default RecipeApp;
