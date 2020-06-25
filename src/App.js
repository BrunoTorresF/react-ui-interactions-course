import React, { useState, useEffect } from 'react';
import logo from './logo.png';
import './App.css';
import cardData from './data.json';
import Card from './components/Card';
import Loading from './components/Loading';
import Navigation from './components/Navigation';

function App() {
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState(cardData);
  const [toggleLogo, setToggleLogo] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading((prevLoad) => !prevLoad);
    }, 4000);
  }, []);

  const handleLogoClick = (e) => {
    e.preventDefault();
    setToggleLogo((prevToggle) => !prevToggle);
  };

  const showBack = (card) => {
    let cardsCopy = cards;
    cardsCopy[card.id].animation = 'card card-flip';

    setCards([...cardsCopy]);
  };

  const showFront = (card) => {
    let cardsCopy = cards;
    cardsCopy[card.id].animation = 'card ';

    setCards([...cardsCopy]);
  };

  const openNav = () => {
    document.getElementById('myNav').style.width = '100%';
  };

  const closeNav = () => {
    document.getElementById('myNav').style.width = '0%';
  };

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          onMouseEnter={handleLogoClick}
          onMouseLeave={handleLogoClick}
          onClick={openNav}
          className={
            toggleLogo
              ? 'static-logo'
              : 'static-logo animate__animated animate__jello'
          }
          alt="logo"
        />
        <h1
          className={
            toggleLogo
              ? 'menu-hidden'
              : 'menu animate__animated animate__bounceInDown'
          }>
          Menu
        </h1>
        <Navigation closeNav={closeNav} />
      </header>
      {loading ? (
        <Loading />
      ) : (
        <div className="Grid animate__animated animate__bounceInUp">
          {cards.map((card) => (
            <Card
              duration={150}
              key={card.id}
              card={card}
              showFront={showFront}
              showBack={showBack}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
