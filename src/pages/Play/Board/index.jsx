import { connect } from 'react-redux';
import './style.scss';
import Cell from './Cell';
import { getCells } from '../../../redux/selectors/boardCells';

const Board = props => {
    const { cells } = props;

    return (
        <div className="grid" >
            {cells.map((item) => (
                <Cell obj={item} key={item.number} />
            ))}
        </div>
    )
}

const mapStateToProps = ({ boardCells, boardNumbers }) => ({
    cells: getCells(boardCells, boardNumbers)
})

export default connect(mapStateToProps)(Board);
