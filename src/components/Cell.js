import React from "react";

function Cell({ alive, coors, onCellClick }) {
    return (
        <div
            className={`w-5 h-5 border border-slate-900 ${
                alive ? "bg-yellow-300" : "bg-black"
            }`}
            onClick={() => onCellClick(...coors)}
        />
    );
}

export default Cell;
