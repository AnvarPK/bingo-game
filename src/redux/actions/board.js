import DB from '../../firebase/firebase';
import { SET_BOARD } from '../reducers/board';

export const setBoard = (payload) => ({
    type: SET_BOARD,
    payload
})

export const startSetBoard = (boardData = {}) => {
    return (dispatch) => {
        DB.ref('boards').push(boardData).then((ref) => {
            dispatch(setBoard({
                id: ref.key,
                ...boardData
            }))
        })

    }
}