import React from "react";
import Square from "./square";

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = { board: this.generateBoard()};
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
                    return <div className="row">{x.map((y, j) => <Square value={[i,j]}/>)} </div>;
                })}
            </div>
        )
    }
}

export default Board;