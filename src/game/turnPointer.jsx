import React from "react";

export const turnPointer = turn => {
    let icon;
    // let msg;
    if (turn) {
        icon = <div><i className="fas fa-arrow-left"></i></div>;
        // msg = "Target a cell on the left board and click";
    } else {
        icon = <div><i className="fas fa-arrow-right"></i></div>;
        // msg = "Enemy shooting";
    };
    // let icon = turn ?  <div><i className="fas fa-arrow-left"></i></div> : <div><i className="fas fa-arrow-right"></i></div>;
    return (
        <div className="pointer">
            {/* <div className="turnPointerMSG">{msg}</div> */}
            {icon}
        </div>
    );
};