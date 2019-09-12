export const randomStart = (board) => {
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
    return true;
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
            if (end) options.push(directions[i]);
        };
   }
    let dir = options[Math.floor(Math.random()*options.length)];
    return {
        start,
        dir
    };
};


export const randomPlaceShips = (board) => {
    for (let i = 4; i > 0; i--) {
        let pos = placeOptions(i,board);
        for (let j = 0; j < i; j++) {
            board[pos.start[0]][pos.start[1]] = 5;
            switch (pos.dir) {
                case "right": 
                    pos.start[1]++;
                    break;
                case "left": 
                    pos.start[1]--;
                    break;
                case "up": 
                    pos.start[0]++;
                    break;
                case "down": 
                    pos.start[0]--;
                    break;
            }
        }
    }
};



