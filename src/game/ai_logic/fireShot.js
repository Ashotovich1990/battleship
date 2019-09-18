import {randomStart} from "./placeShips";

export const choosePos = (board, ships)=> {
    let options = findOptions(board);
    for(let key in options) {
        let f_idx;
        let s_idx;
        const checkValid = () => {
            if (board[f_idx] && board[f_idx][s_idx] === 1) {
                return true;
            };
        }

       
        let pos = options[key].pos;
        let size = shipSize(pos,board); 

        if (size === 4) continue;
       
        if (size === 3 && ships[size+1] > 0) continue;
        
        if (size === 2 && ships[size+1] > 1 && ships[size+2] > 0) continue;
        
        if (size === 1 && ships[size+1] > 2 && ships[size+2] > 1 && ships[size+3] > 0) continue;
        
        if (options[key].dir !== "horizontal") {
            f_idx = options[key].pos[0]-1;
            s_idx = options[key].pos[1];
            if (checkValid()) return [f_idx,s_idx];

            f_idx = options[key].pos[0]+1;
            s_idx = options[key].pos[1];
            if (checkValid()) return [f_idx,s_idx];
        };

        if (options[key].dir !== "vertical") {
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

export const findOptions = function(board) {
    let res = {};
    board.forEach((row,i) => {
        row.forEach((cell,j) => {
            if (cell === 3) {
                res[`${i}-${j}`] = {pos : [i,j], dir : ""};
                if (board[i-1] && board[i-1][j] === 3 || board[i+1] && board[i+1][j] === 3 ) {
                    res[`${i}-${j}`].dir = "vertical";
                } else if (board[i][j-1] === 3 || board[i][j+1] === 3 ) {
                    res[`${i}-${j}`].dir = "horizontal";
                };
            };
        })
    })
    return res;
}

export const countDestroyedShips = function(board) {
    let options = findOptions(board); 
    let ships = {}; 
    let seen = new Set();
    for (let i = 4; i > 0; i--) {
        for (let key in options) {
            let pos = options[key].pos;
            if (seen.has(`${pos[0]}_${pos[1]}`)) continue; 
            let size = shipSize(pos,board);
            if (size === i) {
                if (size === 4) {
                    ships[size] = 1;
                } else if ((size === 3 && ships[4]) || (size === 2 && ships[3] > 1 && ships[4])) {
                    ships[size] = ships[size] ? ships[size] + 1 : 1;
                } else if ((size === 1 && ships[2] > 2 && ships[3] > 1 && ships[4]) || isShipDestroyed(pos,board,options[key].dir)) {
                    ships[size] = ships[size] ? ships[size] + 1 : 1;
                }
                seen = union([seen,collectShipPositions(...pos,board)]);
            };
        }; 
        seen = new Set();
    };

    return ships;
};

const shipSize = function(pos,board) {
    let i = pos[0];
    let j = pos[1];

    const countUp = (i,j) => {
        if (!board[i] || board[i][j] !== 3) return 0;
        return 1 + countUp(i+1,j,board);
    };

    const countDown = (i,j) => {
        if (!board[i] || board[i][j] !== 3) return 0;
        return 1 + countDown(i-1,j,board);
    };

    const countLeft = (i,j) => {
        if (!board[i] || board[i][j] !== 3) return 0;
        return 1 + countLeft(i,j-1,board);
    };

    const countRight = (i,j) => {
        if (!board[i] || board[i][j] !== 3) return 0;
        return 1 + countRight(i,j+1,board);
    };

    return countUp(i,j) + countDown(i,j) + countLeft(i,j) + countRight(i,j) - 3;
}

const isShipDestroyed = function(pos,board,dir) {
    let i = pos[0];
    let j = pos[1];

    const checkUp = (i,j) => {
        if (board[i] && board[i][j] === 1) return false;
        if (!board[i] || board[i][j] === 2) return true;
        return checkUp(i+1,j);
    }; 

    const checkDown = (i,j) => {
        if (board[i] && board[i][j] === 1) return false;
        if (!board[i] || board[i][j] === 2) return true;
        return checkDown(i-1,j);
    }; 

    const checkLeft = (i,j) => {
        if (board[i] && board[i][j] === 1) return false;
        if (!board[i] || !board[i][j] || board[i][j] === 2) return true;
        return checkLeft(i,j-1);
    }; 

    const checkRight = (i,j) => {
        if (board[i] && board[i][j] === 1) return false;
        if (!board[i] || !board[i][j] || board[i][j] === 2) return true;
        return checkRight(i,j+1);
    };
    
    if (dir === "vertical") return checkUp(i,j) && checkDown(i,j);
    
    if (dir === "horizontal") return checkRight(i,j) && checkLeft(i,j);

    return checkUp(i,j) && checkDown(i,j) && checkLeft(i,j) && checkRight(i,j);
};

const collectShipPositions = function(i,j,board) {
    let res = new Set(); 

    const iterate = (i,j) => {
        let posStr = `${i}_${j}`;
        if (res.has(posStr)) return;
        if (!board[i] || board[i][j] !== 3) return;
        res.add(posStr);
        iterate(i+1,j);
        iterate(i-1,j);
        iterate(i,j+1);
        iterate(i,j-1);
    }; 
    
    iterate(i,j);
    return res;
} 


const union = function(sets) {
    return sets.reduce((combined, list) => {
      return new Set([...combined, ...list]);
    }, new Set());
}
