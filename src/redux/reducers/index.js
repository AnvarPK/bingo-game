import { combineReducers } from 'redux';
import boardCells from './boardCells';
import boardNumbers from './boardNumbers';

export default combineReducers({
    boardCells,
    boardNumbers
});
