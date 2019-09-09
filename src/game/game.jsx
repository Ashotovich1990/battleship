import React from 'react'; 
import Play from './play';

class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = { start: false};
        this.content = this.content.bind(this);
        this.startButton = this.startButton.bind(this);
        this.startGame = this.startGame.bind(this);
    }

    content() {
        if (!this.state.start) {
            return this.startButton();
        } else {
            return <Play/>;
        }
    }

    startButton() {
        return <div onClick={this.startGame}>Start Game</div>
    }

    startGame() {
        this.setState( {start: !this.state.start});
    }

    render() {
        return this.content();
    }
}

export default Game;