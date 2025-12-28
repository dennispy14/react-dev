import { useState, useEffect, useCallback } from 'react'
import './App.css'
import StartScreen from './components/StartScreen';

import Game from './components/Game';
import GameOver from './components/GameOver';
import { wordsList } from './data/words';
import { normalize } from '../src/utils/normalizer';

const stages = [
  { id: 1, name: 'start' },
  { id: 2, name: 'game' },
  { id: 3, name: 'end' },
];

const guessesQty = 3;


function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);
  const [pickedWord, setPickedWord] = useState("");
  const [normalizedWord, setNormalizedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState<string[]>([]);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [wrongLetters, setWrongLetters] = useState<string[]>([]);
  const [guesses, setGuesses] = useState(guessesQty);
  const [score, setScore] = useState(0);

  const pickWordAndCategory = useCallback(() => {
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];
    const word = words[category as keyof typeof words][Math.floor(Math.random() * words[category as keyof typeof words].length)];

    return { word, category };
  }, [words]);

  const startGame = useCallback(() => {
    clearLetterStates();
    const { word, category } = pickWordAndCategory();
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((l) => l.toLowerCase());
    setPickedWord(word);
    setNormalizedWord(normalize(word));
    setPickedCategory(category);
    setLetters(wordLetters);
    setGameStage(stages[1].name);
  }, [pickWordAndCategory]);

  const verifyLetter = (letter: string) => {
    const normalizedLetter = normalize(letter);

    if (
      guessedLetters.includes(normalizedLetter) ||
      wrongLetters.includes(normalizedLetter)
    ) {
      return;
    }

    if (normalizedWord.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter,
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter,
      ]);
      setGuesses((actualGuesses) => actualGuesses - 1);
    }
  }

  const clearLetterStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
    setGuesses(guessesQty);
  };

  //check if guesses ended
  useEffect(() => {
    if (guesses <= 0) {
      //reset all states
      clearLetterStates();

      setGameStage(stages[2].name);
    }
  }, [guesses]);

  //check win condition
  useEffect(() => {
    const uniqueLetters = [...new Set(letters)];

    //win condition
    if (guessedLetters.length > 0) {
      console.log("guessedLetters.length: " + guessedLetters.length);
      console.log("uniqueLetters.length: " + uniqueLetters.length);
      if (guessedLetters.length === uniqueLetters.length) {
        //add score
        setScore((actualScore) => (actualScore += 100));
        //restart game with new word
        startGame();
      }
    }
  }, [guessedLetters, letters, startGame]);

  const restartGame = () => {
    startGame();
  };


  return (
    <div className="game-wrapper">
      <div className="game-container">
        {gameStage === 'start' && <StartScreen startGame={startGame} />}
        {gameStage === 'game' && <Game
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />}
        {gameStage === "end" && (
          <GameOver
            score={score}
            restartGame={restartGame}
            goToStart={() => setGameStage("start")}
          />
        )}

      </div>
    </div>
  );
}

export default App

