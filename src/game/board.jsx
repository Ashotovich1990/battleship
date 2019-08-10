import React from "react";

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = { board: this.generateBoard()};
    }

    generateBoard() {
        let res = []; 
        for (let i = 0; i < 10; i++) {
            let row = [].fill(0, 0, 9);
            res.push(row);
        };
        return res;
    }

    render() {
        return (
            <div>
                {this.state.board.map((x,i) => <li>{i}</li>)}
            </div>
        )
    }
}

export default Board;