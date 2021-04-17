export const getCells = (cells, numbers) => {
    const combined = cells.reduce((acc, item) => [...acc, ...item], [])
    return combined.map((item, index) => {
        item.number = numbers[index];
        return item;
    })
}