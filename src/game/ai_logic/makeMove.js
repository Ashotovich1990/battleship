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

// arr = [[1,1,1,1,1],[1,1,1,2,1]]
// options = {'13'=>[1,3]};

const filterOptions = options => {
    // takes possible options and elminiates ships that are already completelty destroyed;
}