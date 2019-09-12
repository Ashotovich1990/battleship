const makeMove = (i,j,board) => {
    let new_board = board.slice();
        if (new_board[i][j] !== 2 || new_board[i][j] !== 3) {
            if (new_board[i][j] === 1) {
                new_board[i][j] = 2; 
            } else if (new_board[i][j] === 5) {
                new_board[i][j] = 3;
            };
        };
    return new_board;
};

export default makeMove;