import React from 'react';
import './Characters.css';

function Characters({ characters }) {
  return (
    <main class='card'>
        {characters.map((item, index) => (
            <section key={ index } class='card__character'>
              <figure class='card__figure'>
                <img class='card__image' src={ item.image } alt=''></img>
              </figure>
              <article class='card__body'>
                <h2 class='card__nameCharacter'>{ item.name }</h2>
                <p class='card__speciesCharacter'>Species: { item.species }</p>
                <p class='card__locationCharacter'>Location: { item.location.name }</p>
                <p class='card__originCharacter'>Origin: { item.origin.name}</p>
              </article>
            </section>
        ))}            
    </main>
  );
}

export { Characters };