import { connect } from 'react-redux';
import './style.scss';
import Cell from './Cell';
import { getCells } from '../../../redux/selectors/boardCells';

const Board = ({ boardID, cells }) => {
    return (
        <div className="board" >
            {cells.map((item) => (
                <Cell obj={item} key={item.number} boardID={boardID} />
            ))}
        </div>
    )
}

const mapStateToProps = (state) => ({
    cells: getCells(state.boardCells.cells, state.boardNumbers),
    boardID: state.board.id
});

export default connect(mapStateToProps)(Board);
