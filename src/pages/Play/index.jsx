import React from 'react'
import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { startSetBoard } from '../../redux/actions/board'
import Board from './Board'
import ResultBord from './ResultBord'

const boardData = {
    playersCount :  2,
    cellPos : { row: null, column: null }
};

const Play = ({boardID}) => {
    console.log(boardID)
    const dispatch = useDispatch();
    useEffect(() => {
        // dispatch(startSetBoard(boardData))
    }, [])
    return (
        <div className="container">
            <div className="flex ">
                <div className="flex-grow h-screen place-center">
                    <Board />
                    <ResultBord />
                </div>
                <div className="">
                    Right side
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    boardID: state.board.id
})

export default connect(mapStateToProps)(Play)




