import Cell from "./Cell";

import React from "react";

function Board() {
    return (
        <div>
            <Cell alive={true} />
            <Cell alive={true} />
            <Cell alive={false} />
            <Cell alive={true} />
        </div>
    );
}

export default Board;
