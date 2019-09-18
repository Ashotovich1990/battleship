import React from "react"; 


const countShips = board => {

};

export const displayShips = ships => {
    let content = []; 
    for (let key in ships) {
        content.push([key, ships[key]]);
    }
    return (
        <div>{content.map(ship => {
            return <li>{ship[0]} {ship[1]}</li>
        })}</div>
    );
};

