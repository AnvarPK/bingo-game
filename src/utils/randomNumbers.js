export const getRandonNumbersOfOrder = (order) => {
    const numbers = Array(order ** 2).fill().map((_, index) => index + 1);
    numbers.sort(() => Math.random() - 0.5);
    return numbers
}