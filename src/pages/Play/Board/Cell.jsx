import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { checkCell, crossCell } from "../../../redux/actions/boardCells";


const Cell = ({ obj }) => {
    const dispatch = useDispatch();
    const [rowIndex, columnIndex] = obj.pos;

    const clickHandler = useCallback((e) => {
        dispatch(checkCell(obj));
    }, [dispatch])

    useEffect(() => {
        if (obj.isChecked) {
            dispatch(crossCell({ rowIndex, columnIndex }));
        }
    }, [obj.isChecked])

    return (
        <div
            className={`grid__cell ${obj.isChecked ? 'grid__cell-checked' : ''} ${obj.isCrossed ? 'grid__cell-crossed' : ''}`}
            onClick={clickHandler}
        >
            {obj.number}
            {/* <small>&#40;{rowIndex}&#44; {columnIndex}&#41;</small> */}
        </div>
    )
}

export default Cell