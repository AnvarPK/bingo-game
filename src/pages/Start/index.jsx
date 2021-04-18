import Select from 'react-select'
import './style.scss';

const options = [
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' }
]


const colourStyles = {
    control: styles => ({ ...styles, backgroundColor: '#00CDAC', marginLeft: 10 }),
    option: (styles, { data, isSelected }) => {
        return {
            ...styles,
            backgroundColor: isSelected ? '#02aab0' : '#00CDAC',
            color: isSelected ? 'white' : data.color
        };
    },
    menu:styles => ({ ...styles, backgroundColor: '#00CDAC' })
};


const Start = () => {
    return (
        <div className="start-page h-screen place-center">
            <div className="start-wrapper">
                <h1>Star Game</h1>
                <div className="game-inputs">
                    <div className="game-inputs__field">
                        <label htmlFor="" className="game-inputs__label">Number of Playes</label>
                        <Select
                            options={options}
                            label="Single select"
                            styles={colourStyles}
                        />
                        {/* <input type="number" className="game-inputs__players" /> */}
                    </div>
                    <div className="game-inputs__field">
                        <button className="game-inputs__start-button">START</button>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Start
