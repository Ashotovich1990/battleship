import React from "react";
import Square from "./square";
import {randomPlaceShips} from "./ai_logic/placeShips";
import {choosePos, hideBoard, findOptions} from "./ai_logic/makeMove";
import makeMove from "./player";

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = { board: this.generateBoard()};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(i,j) {
        if (!this.props.player && this.props.turn) {
            let new_board = makeMove(i,j,this.state.board);
            this.setState({board: new_board}, () => {
                this.props.handleTurn();
            });
        };
    };

    componentDidUpdate(prevProps) {
        if (this.props.player && this.props.turn  && this.props.turn !== prevProps.turn) {
            let board = hideBoard(this.state.board);
            let pos = choosePos(board);
            let new_board = makeMove(...pos,this.state.board);
            this.setState({board: new_board}, () => {
                this.props.handleTurn();
            });
        };
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
                    <div key={i} className="row"> {x.map((y, j) => <div className="cell" id={`${i-j}`} key={[i,j]} onClick={() => this.handleClick(i,j)}><Square value={y}/></div>)} </div>
                    );
                })}
            </div>
        )
    }
}

export default Board;