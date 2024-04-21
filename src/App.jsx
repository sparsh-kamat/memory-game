import { useState, useEffect } from "react";
import "./App.scss";


function useCharacters() {
  const [characters, setCharacters] = useState([]); 

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character") // [1,2,3,4,5,6,7,8,9,10
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  console.log(characters);

  return characters;
}

function onCardClick() {
  console.log("Card Clicked");
  //update visited characters

  //update current score
  //update high score

  //shuffle the characters

  //return the first 9 characters

  //if current score is 9, show results

  //if current score is 9, reset current score

  //if current score is 9, shuffle the characters

  //if current score is 9, return the first 9 characters

  //if current score is 9, update high score

  //if current score is 9, update visited characters

  
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
      <p>Current Score: {currentScore}</p>
      <p>High Score: {highScore}</p>
    </div>
  );
}

function CardGrid() {
  const characters = useCharacters();
  //take random 9 characters but atleast 1 unique character
  //shuffle the characters
  //return the first 9 characters

  const shuffledCharacters = characters.sort(() => Math.random() - 0.5);
  const selectedCharacters = shuffledCharacters.slice(0, 9);


  return (  
    <div className="card-grid">
      {selectedCharacters.map((character) => (
        <Card key={character.id} character={character} />
      ))}
    </div>
  );

  //return <div className="card-grid"></div>;

}

function Card({ character }) {
  return (
    <div className="card">
      <img src={character.image} alt={character.name} />
      <p>{character.name}</p>
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
      <CardGrid />


      {/*
      <Results /> */}
    </>
  );
}

export default App;
