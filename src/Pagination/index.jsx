import React from 'react';
import './Pagination.css';

function Pagination({ prev, next, onPrevious, onNext }) {
    const clickPrevious = () => {
        onPrevious();
    };

    const clickNext = () => {
        onNext();
    };

  return (
    <nav class='navButtons'>
        <ul class='navButtons__list'>
            { prev ? (
                <li class='navButtons__item'>
                    <button class='navButtons__button' onClick={ clickPrevious }>Previous</button>
                </li>
            ) : null }
            { next ? (
                <li class='navButtons__item'>
                    <button class='navButtons__button' onClick={ clickNext }>Next</button>
                </li>
            ) : null }
        </ul>
    </nav>
  );
}

export { Pagination };