import React from "react"; 

export const displayShips = (ships, left) => {
    let content = []; 
    let i = 4;
    let style = left ? "shiplistLeft" : "shiplist";
    for (let key in ships) {
        let name;    
        if (key === "4") name = "Battleship";
        if (key === "3") name = "Cruiser";
        if (key === "2") name = "Destroyer";
        if (key === "1") name = "Patrol Ship";
        content.push([name, ships[key],i]);
        i--;
    }
    return (
        <div className={style}>{content.reverse().map((ship,idx) => {
            return <li key={idx}>{ship[0]} {ship[1]} of {ship[2]}</li>
        })}</div>
    );
};

