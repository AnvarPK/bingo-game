import { CHECK_CELL, CROSS_CELL } from '../reducers/boardCells';

export const checkCell = (payload) => ({
    type: CHECK_CELL,
    payload
})

export const crossCell = (payload) => ({
    type: CROSS_CELL,
    payload
})