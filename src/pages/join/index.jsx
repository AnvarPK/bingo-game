import { useEffect } from "react"
import { connect } from "react-redux"
import { joinBoard } from "../../redux/actions/board";

const Join = ({ board, dispatch, match }) => {
    const { boardID } = match.params;
    useEffect(() => {
        dispatch(joinBoard(boardID));
    }, [])
    useEffect(() => {
        console.log('board' ,board)
        // return () => {
        //     cleanup
        // }
    }, [board])
    return <>asa</>
}

const mapStateToProps = (state) => ({
    board: state.board
})
export default connect(mapStateToProps)(Join);
