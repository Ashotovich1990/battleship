import React from "react";
import Square from "./square";
import {randomPlaceShips} from "./ai_logic/placeShips";
import {choosePos, hideBoard, countDestroyedShips} from "./ai_logic/makeMove";
import makeMove from "./player";
import {displayShips} from "./shipCount";

let SHIPS = {battleship: 0, crusier: 0, destroyer : 0, patrol: 0}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = { board: this.generateBoard()};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(i,j) {
        if (!this.props.player && this.props.turn) {
            if (this.state.board[i][j] === 2 || this.state.board[i][j] === 3) return;
            let new_board = makeMove(i,j,this.state.board);
            if (new_board[i][j] === 3) this.props.countStrike(!this.props.player);
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
            if (new_board[pos[0]][pos[1]] === 3) this.props.countStrike(!this.props.player);
            SHIPS = countDestroyedShips(new_board);
            console.log(SHIPS);
            window.setTimeout(() => {
                this.setState({board: new_board}, () => {
                    window.setTimeout(() => {
                    this.props.handleTurn();
                },50)});
            }, 50)
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
        let s ={};
        if (this.props.player) s = countDestroyedShips(this.state.board);
        return (
            <div>
                {displayShips(s)}
                <div className="board">
                    {this.state.board.map((x,i) => {
                        return (
                        <div key={i} id={i === 9 ? "last" : i} className="row"> {x.map((y, j) => <div className="cell" id={`${i-j}`} key={[i,j]} onClick={() => this.handleClick(i,j)}><Square player={this.props.player} value={y}/></div>)} </div>
                        )
                    })}
                </div>
            </div>
        );
    };
};

export default Board;