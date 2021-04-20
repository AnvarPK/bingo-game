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

export const watchBoard = (baord) => async dispatch => {
    DB.ref(`boards/${baord.id}/joined`).on('value', snapshot => {
        if (snapshot.val()) {
            dispatch(setBoard({
                ...baord,
                joined: snapshot.val(),
            }))
        }
    })
}


export const joinBoard = boardID => async dispatch => {
    DB.ref(`boards/${boardID}/joined`).transaction(joined => {
        if (board === null) {
            return { joined:1 };
          } else {
            console.log('User ada already exists.');
            return; // Abort the transaction.
          }
        // if (post) {
        //   if (post.stars && post.stars[uid]) {
        //     post.starCount--;
        //     post.stars[uid] = null;
        //   } else {
        //     post.starCount++;
        //     if (!post.stars) {
        //       post.stars = {};
        //     }
        //     post.stars[uid] = true;
        //   }
        // }
        // return post;
      });
    // DB.ref(`boards/${boardID}/joined`).once('value', snapshot => {
    //     .set(firebase.database.ServerValue.increment(1))
    //     const joined = snapshot.val() + 1
    //     console.log(snapshot.val() )
    //     console.log(joined)
    //     // DB.ref(`boards/${boardID}`).update({ joined }).then(() => {
    //     //     console.log('successfully removed');
    //     // }).catch((e) => {
    //     //     console.log("Failed. ", e);
    //     // })

    // })


}