import { connect } from 'react-redux';

const Cell = ({ value, matchCount }) => (
    <div className={`grid__cell ${value <= matchCount ? 'grid__cell-crossed' : ''} `}>
        {(value <= matchCount) && <>&#10003;</>}

    </div>
)

const mapStateToProps = ({ boardCells }) => ({
    matchCount: boardCells.matchCount
})

export default connect(mapStateToProps)(Cell);