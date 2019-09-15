import React from 'react';
import Board from './board';

class Play extends React.Component {
    constructor(props) {
        super(props);
        this.state = { turn: true , playerShips: 0, enemyShips: 0};
        this.handleTurn = this.handleTurn.bind(this);
        this.countStrike = this.countStrike.bind(this);
    };

    handleTurn() {
        this.setState({ turn: !this.state.turn});
    }; 

    countStrike(player) {
        if (player) this.setState({enemyShips: this.state.enemyShips + 1});
        if (!player) this.setState({playerShips: this.state.playerShips + 1});
    };

    
    render() {
        if (this.state.enemyShips === 20 || this.state.playerShips === 20) {
            return <div>GAME OVER</div>
        }
        return (
            <div className="game">
                <div>player = {this.state.playerShips} --- comp = {this.state.enemyShips}</div>
                <Board player={false} turn={this.state.turn} handleTurn={this.handleTurn} countStrike={this.countStrike}/>
                <Board player={true} turn={!this.state.turn} handleTurn={this.handleTurn} countStrike={this.countStrike}/>
            </div>
        );
    }
};

export default Play;