import React from "react";

export const turnPointer = turn => {
    let icon = turn ?  <div><i className="fas fa-arrow-left"></i></div> : <div><i className="fas fa-arrow-right"></i></div>;
    return (
        <div className="pointer">
            {icon}
        </div>
    );
};