import React, { useState } from "react";
import { getNextGen } from "../assets/helpers/getNextGen.js";
import Cell from "./Cell";

function Board() {
    const initialCiv = Array(21)
        .fill()
        .map((_, r) =>
            Array(21)
                .fill()
                .map((_, c) => (r === 10 && c === 10 ? true : false))
        );

    const [civizilation, setCivilization] = useState(initialCiv);

    const handleCellClick = (r, c) => {
        const copy = civizilation.map((row) => [...row]);
        copy[r][c] = !copy[r][c];
        setCivilization(copy);
    };

    const handleNextGenClick = () => {
        const nextGen = getNextGen(civizilation);
        setCivilization(nextGen);
    };

    const displayCiv = civizilation.map((civRow, r) => {
        return (
            <div className="flex" key={r}>
                {civRow.map((alive, c) => (
                    <Cell
                        key={c}
                        alive={alive}
                        coors={[r, c]}
                        onCellClick={handleCellClick}
                    />
                ))}
            </div>
        );
    });

    return (
        <div>
            <div>{displayCiv}</div>
            <button className="m-1" onClick={handleNextGenClick}>
                Next Generation
            </button>
        </div>
    );
}

export default Board;
