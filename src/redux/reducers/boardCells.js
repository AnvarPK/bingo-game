import { transposeOfMatrix } from "../../utils/matrix";

let defaultValues = [
    [{ isChecked: false, isCrossed: false, pos: [0, 0] }, { isChecked: false, isCrossed: false, pos: [0, 1] }, { isChecked: false, isCrossed: false, pos: [0, 2] }, { isChecked: false, isCrossed: false, pos: [0, 3] }, { isChecked: false, isCrossed: false, pos: [0, 4] }],
    [{ isChecked: false, isCrossed: false, pos: [1, 0] }, { isChecked: false, isCrossed: false, pos: [1, 1] }, { isChecked: false, isCrossed: false, pos: [1, 2] }, { isChecked: false, isCrossed: false, pos: [1, 3] }, { isChecked: false, isCrossed: false, pos: [1, 4] }],
    [{ isChecked: false, isCrossed: false, pos: [2, 0] }, { isChecked: false, isCrossed: false, pos: [2, 1] }, { isChecked: false, isCrossed: false, pos: [2, 2] }, { isChecked: false, isCrossed: false, pos: [2, 3] }, { isChecked: false, isCrossed: false, pos: [2, 4] }],
    [{ isChecked: false, isCrossed: false, pos: [3, 0] }, { isChecked: false, isCrossed: false, pos: [3, 1] }, { isChecked: false, isCrossed: false, pos: [3, 2] }, { isChecked: false, isCrossed: false, pos: [3, 3] }, { isChecked: false, isCrossed: false, pos: [3, 4] }],
    [{ isChecked: false, isCrossed: false, pos: [4, 0] }, { isChecked: false, isCrossed: false, pos: [4, 1] }, { isChecked: false, isCrossed: false, pos: [4, 2] }, { isChecked: false, isCrossed: false, pos: [4, 3] }, { isChecked: false, isCrossed: false, pos: [4, 4] }]
];

export const CHECK_CELL = 'CHECK_CELL';
export const CROSS_CELL = 'CROSS_CELL';

export default (state = defaultValues, action) => {
    switch (action.type) {

        case CHECK_CELL:
            return state.map((row) => row.map((cell) => {
                if (cell.pos === action.payload.pos) cell.isChecked = true;
                return cell;
            }))

        case CROSS_CELL:
            let transpose = transposeOfMatrix(state);
            let regular = state
            const { rowIndex, columnIndex } = action.payload;

            const isRowFullChecked = regular[rowIndex].every(itm => itm.isChecked);
            const isColumnFullChecked = transpose[columnIndex].every(itm => itm.isChecked);

            return state.map((row, index) => {
                if (isRowFullChecked && index === rowIndex) row = row.map(itm => ({ ...itm, isCrossed: true }));
                if (isColumnFullChecked) row = row.map(itm => {
                    if (itm.pos[1] === columnIndex) itm = { ...itm, isCrossed: true }
                    return itm
                })
                return row
            });

        default:
            return state;
    }
}