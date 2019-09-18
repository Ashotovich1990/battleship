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
        let msg = this.state.enemyShips === 20 ? "You Won" : "You Lost";
        
        return (
            <div className="gameover">
                <div className="gameoverMsg">{msg}</div>
                <div className="restart" onClick={this.props.restart}><i class="fas fa-ship"/> Play Again</div>
            </div>
        );
    }
    
    render() {
        if (this.state.enemyShips === 20 || this.state.playerShips === 20) return this.gameOver();
        
        return (
            <div className="game">
                <div className="count">
                    <div>Enemy Lost</div>
                    <div>You Lost</div>
                </div>
                <div className="boards">
                    <Board player={false} turn={this.state.turn} handleTurn={this.handleTurn} countStrike={this.countStrike}/>
                    {turnPointer(this.state.turn)}
                    <Board player={true} turn={!this.state.turn} handleTurn={this.handleTurn} countStrike={this.countStrike}/>
                </div>
            </div>
        );
    }
};

export default Play;