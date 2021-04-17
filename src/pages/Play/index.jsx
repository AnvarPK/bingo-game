import React from 'react'
import Board from './Board'
import ResultBord from './ResultBord'

const Play = () => {
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

export default Play

