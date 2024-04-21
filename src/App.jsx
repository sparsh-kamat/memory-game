import { useState, useEffect } from "react";
import "./App.scss";

function useCharacters() {
  const [characters, setCharacters] = useState([]);
  const [visitedCharacters, setVisitedCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character") // [1,2,3,4,5,6,7,8,9,10
      .then((response) => response.json())
      .then((data) => setCharacters(data.results.slice(0, 15)));
  }, []);

  return { characters, visitedCharacters, setVisitedCharacters };
}

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Memory Card Game</h1>
      <a href="https://github.com/sparsh-kamat/">Click here for My Github</a>
    </nav>
  );
}

function Score({ currentScore, highScore }) {
  return (
    //currentScore and highScore are props
    <div className="score">
      <p className="current-score">Current Score: <span>{currentScore}</span></p>
      <p className="high-score">High Score: <span>{highScore}</span></p>
    </div>
  );
}

function CardGrid( { currentScore, setCurrentScore, highScore, setHighScore }) {
  const { characters, visitedCharacters, setVisitedCharacters } =
    useCharacters();

  const unvisitedCharacters = characters.filter(
    (character) => !visitedCharacters.includes(character.id)
  );

  const shuffledCharacters = characters.sort(() => Math.random() - 0.5);

  const selectedCharacters = shuffledCharacters.slice(0, 9);




  const handleClick = (id) => {
    if (visitedCharacters.includes(id)) {
      setVisitedCharacters([]);
      setCurrentScore(0);


    } else {
      setVisitedCharacters([...visitedCharacters, id]);
      const newScore = currentScore + 1;
      setCurrentScore(newScore);
      if (newScore > highScore) {
        setHighScore(newScore);
      }

    }
  };

  return (
    <div className="card-grid">
      {selectedCharacters.map((character) => (
        <div className="card" key={character.id}>
        <img src={character.image} alt={character.name} onClick={() => handleClick(character.id)} />
        <p>{character.name}</p>
        </div>
      ))}
    </div>
  );
}




function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <>
      <Navbar />
      <Score currentScore={currentScore} highScore={highScore} />
      <CardGrid
        currentScore={currentScore}
        setCurrentScore={setCurrentScore}
        highScore={highScore}
        setHighScore={setHighScore}
      />

      {/*
      <Results /> */}
    </>
  );
}

export default App;
