import { SET_BOARD } from '../types';

const dafaultValue = {
    playersCount: 0,
    joined: 0,
    cellPos: { row: null, column: null }
};

export default (state = dafaultValue, action) => {
    switch (action.type) {
        case SET_BOARD:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}