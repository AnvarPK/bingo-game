import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { watchBoardCells } from '../../redux/actions/boardCells';
import Board from './Board'
import ResultBord from './ResultBord'
import './style.scss';

const Play = ({ boardID, dispatch }) => {
    useEffect(() => {
        dispatch(watchBoardCells(boardID))
    }, [])
    return (
        <div className="container">
            <div className="flex ">
                <div className="flex-grow h-screen place-center boar-wrapper">
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




