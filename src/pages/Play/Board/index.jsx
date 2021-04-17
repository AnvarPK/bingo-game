import React from 'react'
import './style.scss';
import Cell from './Cell';

const Board = () => {

    const numbers = Array(25).fill().map((_, index) => index + 1);
    numbers.sort(() => Math.random() - 0.5);

    return (
        <div className="grid" >
            {numbers.map((item) => (
                <Cell value={item} key={item} />
            ))}
        </div>
    )
}

export default Board
