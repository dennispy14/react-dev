import { normalize } from "../utils/normalizer";
import "./Game.css";

interface GameProps {
  verifyLetter: (letter: string) => void;
  pickedWord: string;
  pickedCategory: string;
  letters: string[];
  guessedLetters: string[];
  wrongLetters: string[];
  guesses: number;
  score: number;
  isLoading?: boolean;
}

const Game = ({
  verifyLetter,
  pickedWord,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score,
  isLoading,
}: GameProps) => {
  return (
    <div className="game">
      <div className="points">
        Pontos: <span className="points-value">{score}</span>
      </div>

      <div className="game-ui">
        <h1 className="game-title">Adivinhe a palavra</h1>

        <p className="tip">
          Dica: <span>{pickedCategory}</span>
        </p>

        <div className="wordContainer">
          {letters.map((letter, i) =>
            guessedLetters.includes(normalize(letter)) ? (
              <span key={i} className="letter">{letter}</span>
            ) : (
              <span key={i} className="blank" />
            )
          )}
        </div>

        <div className="letterContainer">
          <p>Tente adivinhar uma letra</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const input = e.currentTarget.querySelector(
                "input"
              ) as HTMLInputElement;
              verifyLetter(input.value);
              input.value = "";
            }}
          >
            {!isLoading && (
              <div className="letter-action">
                <input type="text" maxLength={1} required />
                <button className="btn">Jogar</button>
              </div>
            )}
            {isLoading && (
              <div className="loading-inline">
                <div className="dots-loader">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <p>Carregando nova palavra...</p>
              </div>
            )}
          </form>
        </div>

        <div className="wrongLettersContainer">
          Letras usadas: <span>{wrongLetters.join(", ")}</span>
        </div>
      </div>
    </div>
  );
};

export default Game;
