import React from 'react';
import logo from '../assets/rick_and_morty.png';
import './Header.css';

function Header({ brand }) {
  return (
    <header class='header'>
        <img class='header__logo' href='/' src={ logo }></img>
        <h1 class='header__title'>{ brand }</h1>
    </header>
  );
}

export { Header };