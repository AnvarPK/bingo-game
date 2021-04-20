import DB from '../../config/firebase';
import { SET_BOARD } from '../types';

export const setBoard = (payload) => ({
    type: SET_BOARD,
    payload
})

export const startSetBoard = (boardData = {}) => dispatch => {
    DB.ref('boards').push(boardData).then((ref) => {
        dispatch(setBoard({
            id: ref.key,
            ...boardData
        }))
    })
}

// export const fetchToDos = () => async dispatch => {
//     todosRef.on("value", snapshot => {
//       dispatch({
//         type: FETCH_TODOS,
//         payload: snapshot.val()
//       });
//     });
//   };