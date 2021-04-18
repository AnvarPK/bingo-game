import { digionalsOfMatrinx, transposeOfMatrix } from "../../utils/matrix";

export const newBoadrValues = {
    matchCount: 0,
    cells: [
        [{ isChecked: false, isCrossed: false, pos: [0, 0] }, { isChecked: false, isCrossed: false, pos: [0, 1] }, { isChecked: false, isCrossed: false, pos: [0, 2] }, { isChecked: false, isCrossed: false, pos: [0, 3] }, { isChecked: false, isCrossed: false, pos: [0, 4] }],
        [{ isChecked: false, isCrossed: false, pos: [1, 0] }, { isChecked: false, isCrossed: false, pos: [1, 1] }, { isChecked: false, isCrossed: false, pos: [1, 2] }, { isChecked: false, isCrossed: false, pos: [1, 3] }, { isChecked: false, isCrossed: false, pos: [1, 4] }],
        [{ isChecked: false, isCrossed: false, pos: [2, 0] }, { isChecked: false, isCrossed: false, pos: [2, 1] }, { isChecked: false, isCrossed: false, pos: [2, 2] }, { isChecked: false, isCrossed: false, pos: [2, 3] }, { isChecked: false, isCrossed: false, pos: [2, 4] }],
        [{ isChecked: false, isCrossed: false, pos: [3, 0] }, { isChecked: false, isCrossed: false, pos: [3, 1] }, { isChecked: false, isCrossed: false, pos: [3, 2] }, { isChecked: false, isCrossed: false, pos: [3, 3] }, { isChecked: false, isCrossed: false, pos: [3, 4] }],
        [{ isChecked: false, isCrossed: false, pos: [4, 0] }, { isChecked: false, isCrossed: false, pos: [4, 1] }, { isChecked: false, isCrossed: false, pos: [4, 2] }, { isChecked: false, isCrossed: false, pos: [4, 3] }, { isChecked: false, isCrossed: false, pos: [4, 4] }]
    ]
};

export const CHECK_CELL = 'CHECK_CELL';
export const CROSS_CELL = 'CROSS_CELL';

export default (state = newBoadrValues, action) => {
    switch (action.type) {
        case CHECK_CELL:
            return {
                ...state,
                cells: state.cells.map((row) => row.map((cell) => {
                    if (cell.pos === action.payload.pos) cell.isChecked = true;
                    return cell;
                }))
            }

        case CROSS_CELL:
            const regular = state.cells
            const len = state.cells[0].length - 1
            const transpose = transposeOfMatrix(state.cells);
            const digonals = digionalsOfMatrinx(state.cells);
            const { rowIndex, columnIndex } = action.payload;
            let matchCount = state.matchCount

            const isRowFullChecked = regular[rowIndex].every(itm => itm.isChecked);
            const isColumnFullChecked = transpose[columnIndex].every(itm => itm.isChecked);
            const isDiogonal1FullChecked = (rowIndex === columnIndex) && digonals[0].every(itm => itm.isChecked);
            const isDiogonal2FullChecked = ((rowIndex + columnIndex) === len) && digonals[1].every(itm => itm.isChecked);

            if (isRowFullChecked) matchCount++;
            if (isColumnFullChecked) matchCount++;
            if (isDiogonal1FullChecked) matchCount++;
            if (isDiogonal2FullChecked) matchCount++;

            const cells = state.cells.map((row, index) => {
                if (isRowFullChecked && index === rowIndex) row = row.map(itm => ({ ...itm, isCrossed: true }));

                if (isColumnFullChecked) row = row.map(itm => {
                    if (itm.pos[1] === columnIndex) itm = { ...itm, isCrossed: true }
                    return itm
                })

                if (isDiogonal1FullChecked) row = row.map(itm => {
                    if (itm.pos[0] === itm.pos[1]) itm = { ...itm, isCrossed: true }
                    return itm
                })

                if (isDiogonal2FullChecked) row = row.map(itm => {
                    if (itm.pos[0] + itm.pos[1] === len) itm = { ...itm, isCrossed: true }
                    return itm
                })
                return row
            })



            return {
                matchCount,
                cells
            }

        default:
            return state;
    }
}