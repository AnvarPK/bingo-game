import { connect } from 'react-redux';
import './style.scss';
import Cell from './Cell';
import { getCells } from '../../../redux/selectors/boardCells';

const Board = props => {
    const { cells } = props;

    return (
        <div className="board" >
            {cells.map((item) => (
                <Cell obj={item} key={item.number} />
            ))}
        </div>
    )
}

const mapStateToProps = (sate) => ({
    cells: getCells(sate.boardCells.cells, sate.boardNumbers),
})

export default connect(mapStateToProps)(Board);
