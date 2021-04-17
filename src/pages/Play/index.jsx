import React from 'react'
import Board from './Board'

const Play = () => {
    return (
        <div className="container">
            <div className="flex ">
                <div className="flex-grow h-screen ">
                   <Board />
                </div>
                <div className="">
                    Right side
                </div>
            </div>
        </div>
    )
}

export default Play

