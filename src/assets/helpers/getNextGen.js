export const getNextGen = (civilization) => {
    const nextGen = Array(21)
        .fill()
        .map(() => Array(21));

    const isIB = (r, c) => r >= 0 && c >= 0 && r < 21 && c < 21;

    const directions = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
        [-1, -1],
        [-1, 1],
        [1, 1],
        [1, -1],
    ];

    const getLiveNeighbors = (r, c) => {
        let liveNeighbors = 0;
        directions.forEach(([dr, dc]) => {
            const [row, col] = [r + dr, c + dc];
            if (isIB(row, col) && civilization[row][col]) {
                liveNeighbors++;
            }
        });
        return liveNeighbors;
    };

    const nextCell = (r, c) => {
        const liveNeighbors = getLiveNeighbors(r, c);
        if (civilization[r][c]) {
            return liveNeighbors > 1 && liveNeighbors < 4;
        } else {
            return liveNeighbors === 3;
        }
    };

    for (let r = 0; r < 21; r++) {
        for (let c = 0; c < 21; c++) {
            nextGen[r][c] = nextCell(r, c);
        }
    }

    return nextGen;
};
