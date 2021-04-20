export const colourStyles = {
    control: (styles, { isFocused }) => ({
        ...styles, backgroundColor: 'tarnsparent', marginLeft: 10, width: 60, letterSpacing: 1, fontSize: 12
    }),
    input: styles => ({ ...styles, color: '#fff' }),
    singleValue: styles => ({ ...styles, color: '#fff' }),
    indicatorSeparator: _ => ({ display: 'none' }),
    option: (styles, { isSelected }) => ({
        ...styles,
        backgroundColor: isSelected ? '#02aab0' : '#00CDAC',
        color: isSelected && 'white'
    }),
    menu: styles => ({ ...styles, backgroundColor: '#00CDAC' })
};