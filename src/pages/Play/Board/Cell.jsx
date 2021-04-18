import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { crossCell, startCheckCell } from "../../../redux/actions/boardCells";


const Cell = ({ obj, data }) => {
    const [rowIndex, columnIndex] = obj.pos;
    const dispatch = useDispatch();
    const clickHandler = useCallback((e) => {
        dispatch(startCheckCell("-MY_XQzDrpB1v26mJ_KO", obj, data));
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


// const mapStateToProps = (state) => {
//     console.log(state)
//     return {
//         boardId: state.boardCells.id,
//     }
// }

// export default connect(mapStateToProps)(Cell);
export default Cell;