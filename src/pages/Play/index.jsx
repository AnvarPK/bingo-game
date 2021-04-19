import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux';
import { fromDB } from '../../firebase/firebase';
import Board from './Board'
import ResultBord from './ResultBord'
import './style.scss';

const Play = ({ boardID }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        fromDB(boardID, dispatch)
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




