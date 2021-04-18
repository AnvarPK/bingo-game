export const SET_BOARD = 'SET_BOARD';

const dafaultValue = {
    playersCount: 0,
    cellPos: { row: null, column: null }
};

export default (state = dafaultValue, action) => {
    switch (action.type) {
        case SET_BOARD:
            return action.payload;
        default:
            return state;
    }
}