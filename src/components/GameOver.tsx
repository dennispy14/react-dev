import "./GameOver.css"

const GameOver = ( ) => {
    return (
        <div className="gameover">
            <h1>Fim de Jogo!</h1>           
            <p>Sua pontuação foi: </p>
            <button>Reiniciar Jogo</button>
        </div>
    )
}   
export default GameOver