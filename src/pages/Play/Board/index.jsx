import React from 'react'
import './style.scss';
import Cell from './Cell';

const Board = () => {

    const numbers = Array(25).fill().map((_, index) => index + 1);
    numbers.sort(() => Math.random() - 0.5);

    const n = 5, m = 5;
    const board = []

    const sum = (arr) => arr.reduce((acc, item) => acc + item);

    const checkRowSum = (matrix) => {
        for (let row = 0; row < n; row++) {
            const getSum = sum(matrix[row]);
        }
    }

    const transposeOfMatrix = matrix => matrix.map((_, index) => matrix.map(itm => itm[index]));

    const getSumOfArray = (arr) => {

    }

    // checkRowSum(board);

    console.table(transposeOfMatrix(board))

    return (
        <div className="grid" >
            {numbers.map((item) => (
                <Cell value={item} key={item} />
            ))}
        </div>
    )
}

export default Board
