import React from 'react';
import Board from './board';

class Play extends React.Component {
    constructor(props) {
        super(props);
        this.state = { turn: true};
        this.handleTurn = this.handleTurn.bind(this);
    };

    handleTurn() {
        this.setState({ turn: !this.state.turn});
    }

    render() {
        return (
            <div className="game">
                <Board player={true} turn={this.state.turn} handleTurn={this.handleTurn}/>
                <Board player={true} turn={!this.state.turn} handleTurn={this.handleTurn}/>
            </div>
        );
    }
};

export default Play;