import React from "react";

function Cell({ alive }) {
    return (
        <div
            className={`w-5 h-5 border border-black ${
                alive ? "bg-cyan-300" : null
            } m-px`}
        />
    );
}

export default Cell;
