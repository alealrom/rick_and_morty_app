import React from "react";
import "./Pagination.css";

function Pagination({ prev, next, onPrevious, onNext }) {
  const clickPrevious = () => {
    onPrevious();
  };

  const clickNext = () => {
    onNext();
  };

  return (
    <nav className="navButtons">
      <ul className="navButtons__list">
        {prev ? (
          <li className="navButtons__item">
            <button className="navButtons__button" onClick={clickPrevious}>
              Previous
            </button>
          </li>
        ) : null}
        {next ? (
          <li className="navButtons__item">
            <button className="navButtons__button" onClick={clickNext}>
              Next
            </button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
}

export { Pagination };
