import { connect } from 'react-redux';
import './style.scss';
import Cell from './Cell';
import { getCells } from '../../../redux/selectors/boardCells';

const Board = props => {
    const { cells, data } = props;
    return (
        <div className="board" >
            {cells.map((item) => (
                <Cell obj={item} data={data} key={item.number} />
            ))}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        data: state.boardCells.cells,
        cells: getCells(state.boardCells.cells, state.boardNumbers),
    }
}

export default connect(mapStateToProps)(Board);
