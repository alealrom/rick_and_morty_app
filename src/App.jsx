import React, { useEffect, useState } from 'react';
import { Header } from './Header';
import { Characters } from './Characters';
import { Pagination } from './Pagination';
import { Footer } from './Footer';
import './App.css';

function App() {
  const [ characters, setCharacters ] = useState([]);
  const [ info, setInfo ] = useState({});

  const URL_ALL_CHARACTERS = 'https://rickandmortyapi.com/api/character';

  const fetchCharacters = (URL_ALL_CHARACTERS) => {
    fetch(URL_ALL_CHARACTERS)
      .then(response => response.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch(error => console.log(error))
  };

  const onPrevious = () => {
    fetchCharacters(info.prev);
  };
  
  const onNext = () => {
    fetchCharacters(info.next);
  };

  useEffect(() => {
    fetchCharacters(URL_ALL_CHARACTERS);
  }, [])

  return (
    <React.Fragment>
      <Header brand='Rick and Morty | APP'/>
      <section>
        <Pagination 
          prev={ info.prev }
          next={ info.next }
          onPrevious={ onPrevious }
          onNext={ onNext }
          />
        <article class='allCharacters'>
          <Characters characters={ characters }/>
        </article>
      </section>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
