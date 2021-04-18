import { combineReducers } from 'redux';
import board from './board';
import boardCells from './boardCells';
import boardNumbers from './boardNumbers';

export default combineReducers({
    board,
    boardCells,
    boardNumbers
});
