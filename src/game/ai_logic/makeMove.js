import {randomStart} from "./placeShips";

export const choosePos = (board, options)=> {
    for(let key in options) {
        let f_idx;
        let s_idx;
        const checkValid = () => {
            if (board[f_idx] && board[f_idx][s_idx] === 1) {
                return true;
            };
        }

        f_idx = options[key][0]-1;
        s_idx = options[key][1];
        if (checkValid()) return [f_idx,s_idx];

        f_idx = options[key][0]+1;
        s_idx = options[key][1];
        if (checkValid()) return [f_idx,s_idx];

        f_idx = options[key][0];
        s_idx = options[key][1]-1;
        if (checkValid()) return [f_idx,s_idx];

        f_idx = options[key][0];
        s_idx = options[key][1]-1;
        if (checkValid()) return [f_idx,s_idx];
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
            if (cell === 3) res[`${i}-${j}`] = [i,j];
        })
    })
    return res;
}