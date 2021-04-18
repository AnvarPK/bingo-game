import DB from '../../firebase/firebase';
import { CHECK_CELL, CROSS_CELL } from '../reducers/boardCells';

export const checkCell = (payload) => ({
    type: CHECK_CELL,
    payload
})

export const startCheckCell = (id, payload, cells) => {
    console.log(id, payload)
    return (dispatch) => {
        DB.ref(`boards/${id}/cells/${payload.pos[0]}/${payload.pos[1]}`).update({ isChecked: true }).then(() => {
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

