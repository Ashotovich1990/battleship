import React from "react";
import Square from "./square";

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = { board: this.generateBoard()};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(i,j) {
        let new_board = this.state.board.slice();
        new_board[i][j] = 1; 
        this.setState({board: new_board});
    }

    generateBoard() {
        let res = []; 
        for (let i = 0; i < 10; i++) {
            let row = Array(10).fill(0)
            res.push(row);
        };
        return res;
    }

    render() {
        return (
            <div>
                {this.state.board.map((x,i) => {
                    return <div key={i} className="row"> {x.map((y, j) => <div key={[i,j]} onClick={() => this.handleClick(i,j)}><Square value={y}/></div>)} </div>;
                })}
            </div>
        )
    }
}

export default Board;