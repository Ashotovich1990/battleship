import React from 'react';
import Board from './board';
import {turnPointer} from "./turnPointer";

class Play extends React.Component {
    constructor(props) {
        super(props);
        this.state = { turn: true , playerShips: 0, enemyShips: 0};
        this.handleTurn = this.handleTurn.bind(this);
        this.countStrike = this.countStrike.bind(this);
        this.gameOver = this.gameOver.bind(this);
    };

    handleTurn() {
        this.setState({ turn: !this.state.turn});
    }; 

    countStrike(player) {
        if (player) this.setState({enemyShips: this.state.enemyShips + 1});
        if (!player) this.setState({playerShips: this.state.playerShips + 1});
    };

    gameOver() {
        let msg = this.state.enemyShips === 20 ? "You Won! You destroyed all enemy ships" : "You Lost...All your ships are destroyed";
        
        return (
            <div className="gameover">
                <div className="gameoverMsg">{msg}</div>
                <div className="restart" onClick={this.props.restart}><i className="fas fa-ship"/> Play Again</div>
            </div>
        );
    };

    render() {
        let gameOver;
        let turnMSG = this.state.turn ? "Choose target on the left board and click" : "Enemy shooting";
        if (this.state.enemyShips === 20 || this.state.playerShips === 20) gameOver = this.gameOver();
        
        return (
            <div className="game">
                {gameOver}
                <div className="count">
                    <div>Enemy Lost</div>
                    <div>You Lost</div>
                </div>
                <div className="turnMSG">{turnMSG}</div>
                <div className="boards">
                    <Board player={false} turn={this.state.turn} handleTurn={this.handleTurn} countStrike={this.countStrike}/>
                    {turnPointer(this.state.turn)}
                    <Board player={true} turn={!this.state.turn} handleTurn={this.handleTurn} countStrike={this.countStrike}/>
                </div>
                <div className="github-link">
                    <a id="github" href="https://github.com/Ashotovich1990"><i className="fab fa-github"></i></a>
                    <a id="linkedin" href="https://www.linkedin.com/in/aram-sargsyan-63035b177/"><i className="fab fa-linkedin"></i></a>
                </div>
            </div>
        );
    };
        
};

export default Play;