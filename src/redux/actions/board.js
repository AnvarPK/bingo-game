import DB from '../../firebase/firebase';
import { SET_BOARD } from '../reducers/board';

export const setBoard = (payload) => ({
    type: SET_BOARD,
    payload
})

export const startSetBoard = (boardData = {}) => {
    return (dispatch) => {

        const {
            playersCount =  2,
            cellPos = {row:null,column:null}
        } = boardData;

        const board = { playersCount, cellPos };
        DB.ref('boards').push(board).then((ref) => {
            dispatch(setBoard({
                id: ref.key,
                ...board
            }))
        })

    }
}