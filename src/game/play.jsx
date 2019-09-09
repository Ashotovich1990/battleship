import React from 'react';
import Board from './board';

class Play extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className="game">
                <Board/>
                <Board/>
            </div>
        );
    }
};

export default Play;