export const transposeOfMatrix = matrix => matrix.map((_, index) => matrix.map(itm => itm[index]));

export const digionalsOfMatrinx = matrix => {
    const d1 = [];
    const d2 = [];
    const length = matrix.length;

    for (let row = 0; row < length; row++) {
        for (let column = 0; column < length; column++) {
            if (row === column) d1.push(matrix[row][column])
            if ((row + column) === length - 1) d2.push(matrix[row][column])
        }
    }
    return [d1, d2]
}