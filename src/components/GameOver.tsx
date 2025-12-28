import "./GameOver.css";

interface GameOverProps {
  score: number;
  restartGame: () => void;
  goToStart: () => void;
}

const GameOver = ({ score, restartGame, goToStart }: GameOverProps) => {
  return (
    <div className="game-over">
      <div className="game-over-ui">
        <h1 className="game-over-title">Game Over</h1>

        <p className="game-over-score">
          Pontuação final
          <span>{score}</span>
        </p>

        <div className="game-over-actions">
          <button className="btn" onClick={restartGame}>
            Jogar novamente
          </button>

          <button className="btn btn--secondary" onClick={goToStart}>
            Voltar ao início
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameOver;
