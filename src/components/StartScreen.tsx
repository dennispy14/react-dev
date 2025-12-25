import "./StartScreen.css"



interface StartScreenProps {
	startGame: () => void;
}

const StartScreen = ({ startGame }: StartScreenProps) => {

	return (
		<div className="start-screen">
			<img
				src="/src/assets/wordquest-logo.png"
				alt="WordQuest"
				className="logo-drop"
			/>
			<button className="btn" onClick={startGame}>Começar Jogo</button>
		</div>
	)
}

export default StartScreen;