const randomStart = (board) => {
    let randomStart = Math.floor(Math.random() * 100);
    while (board[Math.floor(randomStart/10)][randomStart%10]) {
        randomStart = Math.floor(Math.random() * 100);
    };
    return randomStart; 
}

const placeOptions = (start, size, board) => {
    let options = [];
    let right_pos = [Math.floor(start/10), start%10]
    let right;
    for (let i = 0; i < size; i++) {
        right_pos[1]++;
        if (board[right_pos[0]][right_pos[1]]) break; 
        if (i === size - 1) right = right_pos;
    };     
}


const randomPlaceShips = (board) => {

};

