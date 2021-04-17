const defaultValues = [
    [{ isChecked: false, pos: [0, 0] }, { isChecked: false, pos: [0, 1] }, { isChecked: false, pos: [0, 2] }, { isChecked: false, pos: [0, 3] }, { isChecked: false, pos: [0, 4] }],
    [{ isChecked: false, pos: [1, 0] }, { isChecked: false, pos: [1, 1] }, { isChecked: false, pos: [1, 2] }, { isChecked: false, pos: [1, 3] }, { isChecked: false, pos: [1, 4] }],
    [{ isChecked: false, pos: [2, 0] }, { isChecked: false, pos: [2, 1] }, { isChecked: false, pos: [2, 2] }, { isChecked: false, pos: [2, 3] }, { isChecked: false, pos: [2, 4] }],
    [{ isChecked: false, pos: [3, 0] }, { isChecked: false, pos: [3, 1] }, { isChecked: false, pos: [3, 2] }, { isChecked: false, pos: [3, 3] }, { isChecked: false, pos: [3, 4] }],
    [{ isChecked: false, pos: [4, 0] }, { isChecked: false, pos: [4, 1] }, { isChecked: false, pos: [4, 2] }, { isChecked: false, pos: [4, 3] }, { isChecked: false, pos: [4, 4] }]
];

export const CHECK_CELL = 'CHECK_CELL';

export default (state = defaultValues, action) => {
    switch (action.type) {

        case CHECK_CELL:
            return state.map((rowArr) => rowArr.map((cell) => {
                if (cell.pos === action.payload.pos) cell.isChecked = true;
                return cell;
            }))

        default:
            return state;
    }
}