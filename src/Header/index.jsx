import React from 'react';
import logo from '../assets/rick_and_morty.png';
import './Header.css';

function Header({ brand }) {
  return (
    <header class='header'>
        <a href='/'><img class='header__logo' src={ logo } alt='Logo in the form of a drawing the animated series Rick and Morty, does not follow grammatical conventions, the characters have different sizes and seem to hang in space, the inner part of the title is painted in blue and the outer part is surrounded by green.'></img></a>
        <h1 class='header__title'>{ brand }</h1>
    </header>
  );
}

export { Header };