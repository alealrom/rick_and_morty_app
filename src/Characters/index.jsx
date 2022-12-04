import React from "react";
import "./Characters.css";

function Characters({ characters }) {
  return (
    <main class="card">
      {characters.map((item, index) => (
        <section key={ index } className="card__character">
          <figure className="card__figure">
            <img cclassName="card__image" src={ item.image } alt=""></img>
          </figure>
          <article className="card__body">
            <h2 className="card__nameCharacter">{ item.name }</h2>
            <p className="card__speciesCharacter">Species: { item.species }</p>
            <p className="card__locationCharacter">
              Location: { item.location.name }
            </p>
            <p className="card__originCharacter">Origin: { item.origin.name }</p>
          </article>
        </section>
      ))}
    </main>
  );
}

export { Characters };
