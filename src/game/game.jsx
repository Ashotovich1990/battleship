import React from 'react'; 
import Play from './play';

class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = { start: false};
        this.content = this.content.bind(this);
        this.startButton = this.startButton.bind(this);
        this.startGame = this.startGame.bind(this);
        this.restartGame = this.restartGame.bind(this);
    }

    content() {
        if (!this.state.start) {
            return this.startButton();
        } else {
            return <Play restart={this.restartGame}/>;
        }
    }

    startButton() {
        return (
            <div className="start" onClick={this.startGame}>
                <div className="pushButton"><i class="fas fa-ship"></i></div>
                <div id="startButton" className="pushButton">Start Game</div>
            </div>
            );
    }

    startGame() {
        this.setState( {start: !this.state.start});
    }

    restartGame() {
        this.setState({start: !this.state.start}, () => {
            let button = document.getElementById("startButton");
            button.click();
        }) 
    }

    render() {
        return this.content();
    }
}

export default Game;