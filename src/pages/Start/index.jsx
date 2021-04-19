import { useCallback, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import Select from 'react-select';
import { startSetBoard } from '../../redux/actions/board';
import { colourStyles } from './style';
import './style.scss';

const options = [
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' }
]

const Start = ({ boardID }) => {
    const dispatch = useDispatch();
    const [playerCount, setPlayerCount] = useState(options[0]);

    const chnageHandler = useCallback(val => {
        setPlayerCount(val)
    }, [])

    const clickHandler = useCallback(_ => {
        const boardData = {
            playersCount: +playerCount.value,
            cellPos: { row: null, column: null }
        };
        dispatch(startSetBoard(boardData))
    }, [playerCount])

    if (boardID) return <Redirect to='/play' />;

    return (
        <div className="start-page h-screen place-center">
            <div className="start-wrapper">
                <h1>Star Game</h1>
                <div className="game-inputs">
                    <div className="game-inputs__field">
                        <label htmlFor="" className="game-inputs__label">Number of Playes</label>
                        <Select
                            options={options}
                            label="Count"
                            value={playerCount}
                            styles={colourStyles}
                            onChange={chnageHandler}
                        />
                    </div>
                    <div className="game-inputs__field">
                        <button className="game-inputs__start-button" onClick={clickHandler}>START</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({ board }) => ({ boardID: board.id })

export default connect(mapStateToProps)(Start);
