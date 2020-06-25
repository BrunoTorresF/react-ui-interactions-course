import React from 'react';
import './Navigation.css';

const Navigation = (props) => (
  <div id="myNav" className="overlay">
    <button className="closebtn" onClick={() => props.closeNav()}>
      &times;
    </button>
    <div className="overlay-content">
      <a href="">Vitamin Juice</a>
      <a href="">Clothing</a>
      <a href="">Supplements</a>
      <a href="">Contact</a>
    </div>
  </div>
);

export default Navigation;
