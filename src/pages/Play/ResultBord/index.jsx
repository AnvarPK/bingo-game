import React from 'react'
import Cell from './Cell';
import './style.scss';

const ResultBord = _ => {
    return (
        <div className="result-board">
            {Array(5).fill().map((item, index) => (<Cell value={index + 1} key={index + 1} />))}
        </div>
    )
}


export default ResultBord;
