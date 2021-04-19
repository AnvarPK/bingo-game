import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { crossCell, startCheckCell } from "../../../redux/actions/boardCells";


const Cell = ({ boardID, obj }) => {
    const [rowIndex, columnIndex] = obj.pos;
    const dispatch = useDispatch();

    const clickHandler = useCallback(_ => {
        if (!obj.isChecked && boardID ) dispatch(startCheckCell(boardID, obj));
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
            {obj.isChecked && <div className="grid__cell--icon">&#10006;</div>}
            {obj.number}
            {/* <small>&#40;{rowIndex}&#44; {columnIndex}&#41;</small> */}
        </div>
    )
}


export default Cell;