const randomStart = (board) => {
    let randomStart = Math.floor(Math.random() * 100);
    while (board[Math.floor(randomStart/10)][randomStart%10] !== 1) {
        randomStart = Math.floor(Math.random() * 100);
    };
    return [Math.floor(randomStart/10), randomStart%10]; 
}; 

const changePos = (pos,dir,size,board) => {
    for (let i = 0; i < size; i++) {
        switch (dir) {
            case "right": 
                pos[1]++;
                break;
            case "left": 
                pos[1]--;
                break;
            case "up": 
                pos[0]++;
                break;
            case "down": 
                pos[0]--;
                break;
        }
        
        if (!board[pos[0]] || !board[pos[0]][pos[1]] || !board[pos[0]][pos[1]] === 5) {
            return; 
        }
    }; 
    return pos;
}

const placeOptions = (size, board) => {
    let options = [];
    let start;
    while (!options.length) {
        start = randomStart(board);
        let directions = ["right", "left", "up", "down"];
        for (let i = 0; i < directions.length; i++) {
            let pos = [...start];
            let end = changePos(pos,directions[i],size,board);
            if (end) options.push(end);
        };
   }
    let end = options[Math.floor(Math.random()*options.length)];
    return [start,end];
};


export const randomPlaceShips = (board) => {
    for (let i = 4; i > 0; i--) {
        let pos = placeOptions(i,board);
        board[pos[0][0]][pos[0][1]] = 5;
        board[pos[1][0]][pos[1][1]] = 5;
    }
};



