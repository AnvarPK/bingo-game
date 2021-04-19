import DB from '../../firebase/firebase';
import { CHECK_CELL, CROSS_CELL } from '../reducers/boardCells';

export const checkCell = (payload) => ({
    type: CHECK_CELL,
    payload
})

export const startCheckCell = (id, payload) => {
    console.log(id, payload)
    return (dispatch) => {
        const cellPos = { row: payload.pos[0], column: payload.pos[1] };

        DB.ref(`boards/${id}/cellPos`).update(cellPos).then(() => {
            dispatch(checkCell(payload))

        }).catch((e) => {
            console.log("Failed. ", e);
        })
    }
}

export const crossCell = (payload) => ({
    type: CROSS_CELL,
    payload
})

