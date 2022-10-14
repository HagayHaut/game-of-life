import React from "react";

function Cell({ alive, coors, onCellClick }) {
    return (
        <div
            className={`w-5 h-5 border border-black ${
                alive ? "bg-cyan-300" : null
            }`}
            onClick={() => onCellClick(...coors)}
        />
    );
}

export default Cell;
