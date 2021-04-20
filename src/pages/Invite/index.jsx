import { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import Spinner from '../../components/spinner';
import { watchBoard } from '../../redux/actions/board';
import { copyToClipboard } from '../../utils/copyToClipboard';
import './style.scss';

const Invite = ({ board, dispatch }) => {
    const joinLink = `http://192.169.1.109:3002/join/${board.id}`;
    const linkEl = useRef(null);
    const clickHandler = () => {
        copyToClipboard(linkEl.current);
    }
    useEffect(() => {
        dispatch(watchBoard(board))
    }, [])
    useEffect(() => {
        console.log(board)
     
    }, [board])

    if (board.playersCount === board.joined) return <Redirect to='/play' />;

    return (
        <div className="start-page h-screen place-center">
            <div className="start-wrapper">
                <h1>Bingo Game</h1>
                <div className="game-inputs">
                    <div className="game-inputs__field">
                        <label htmlFor="" className="game-inputs__label">INVITE</label>
                    </div>
                    <div className="game-inputs__field">
                        <input type="text" value={joinLink} ref={linkEl} className="game-inputs__input" readOnly />
                    </div>
                    <div className="game-inputs__field">
                        <button className="" onClick={clickHandler} className="game-inputs__start-button" >CLICK TO COPY</button>
                    </div>
                    <div className="game-inputs__field">
                        <div className="spinnrt-wrap">
                            <span>Waiting others to join...</span>
                            <div className="loader-wrapper">
                                <Spinner />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({ board }) => ({ board })

export default connect(mapStateToProps)(Invite);
