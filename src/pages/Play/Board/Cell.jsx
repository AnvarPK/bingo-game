import { useState } from 'react'

const Cell = ({ value }) => {
    const [isCrossed, setisCrossed] = useState(false);

    const clickHandler = (e) => {
        setisCrossed(true);
    }

    return (
        <div
            className={`grid__cell ${isCrossed ? 'grid__cell-crossed' : ''}`}
            onClick={clickHandler}
        >
            {value}
        </div>
    )
}

export default Cell
