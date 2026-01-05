import "./StartScreen.css"
import logo from "../assets/wordquest-logo.png";


interface StartScreenProps {
	startGame: () => void;
}

const StartScreen = ({ startGame }: StartScreenProps) => {

	return (
		<div className="start-screen">
			<img
				src={logo}
				alt="WordQuest"
				className="logo-drop"
			/>
			<button className="btn" onClick={startGame}>Começar Jogo</button>
		</div>
	)
}

export default StartScreen;