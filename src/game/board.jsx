import React from "react";
import Square from "./square";
import {randomPlaceShips} from "./ai_logic/placeShips";
import {choosePos} from "./ai_logic/makeMove";
import humanMakeMove from "./player";

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = { board: this.generateBoard()};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(i,j) {
        if (this.props.player && this.props.turn) {
            let new_board = humanMakeMove(i,j,this.state.board);
            this.setState({board: new_board});
        } else if (!this.props.player && this.props.turn) {
            let board = this.state.board.map(el => el.map(spot => spot === 5 ? 1 : spot ));
            let pos = choosePos(board,{});
            let new_board = this.state.board.slice();
            if (this.state.board[pos[0]][pos[1]] === 5) {
                new_board[pos[0]][pos[1]] = 3;
            } else {
                new_board[pos[0]][pos[1]] = 2;
            };

            this.setState({board: new_board});
        };
        this.props.handleTurn();
    }

    generateBoard() {
        let res = []; 
        for (let i = 0; i < 10; i++) {
            let row = Array(10).fill(1)
            res.push(row);
        };
        randomPlaceShips(res);
        return res;
    }

    render() {
        return (
            <div className="board">
                {this.state.board.map((x,i) => {
                    return (
                    <div key={i} className="row"> {x.map((y, j) => <div className="cell" key={[i,j]} onClick={() => this.handleClick(i,j)}><Square value={y}/></div>)} </div>
                    );
                })}
            </div>
        )
    }
}

export default Board;