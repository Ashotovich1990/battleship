import {randomStart} from "./placeShips";

export const choosePos = (board)=> {
    let options = findOptions(board);
    for(let key in options) {
        let f_idx;
        let s_idx;
        const checkValid = () => {
            if (board[f_idx] && board[f_idx][s_idx] === 1) {
                return true;
            };
        }

        if (options[key].dir !== "vertical") {
            f_idx = options[key].pos[0]-1;
            s_idx = options[key].pos[1];
            if (checkValid()) return [f_idx,s_idx];

            f_idx = options[key].pos[0]+1;
            s_idx = options[key].pos[1];
            if (checkValid()) return [f_idx,s_idx];
        };

        if (options[key].dir !== "horizontal") {
            f_idx = options[key].pos[0];
            s_idx = options[key].pos[1]-1;
            if (checkValid()) return [f_idx,s_idx];
    
            f_idx = options[key].pos[0];
            s_idx = options[key].pos[1]+1;
            if (checkValid()) return [f_idx,s_idx];
        };
    };

    return randomStart(board);
};

export const hideBoard = board => {
    let new_board = board.map(el => {
        return el.map(spot => spot === 5 ? 1 : spot);
    });
    return new_board;
}

export const findOptions = board => {
    let res = {};
    board.forEach((row,i) => {
        row.forEach((cell,j) => {
            if (cell === 3) {
                res[`${i}-${j}`] = {pos : [i,j], dir : ""};
                if (board[i-1] && board[i-1][j] === 3 || board[i+1] && board[i+1][j] === 3 ) {
                    res[`${i}-${j}`].dir = "horizontal";
                } else if (board[i][j-1] === 3 || board[i][j+1] === 3 ) {
                    res[`${i}-${j}`].dir = "vertical";
                };
            };
        })
    })
    return res;
}
