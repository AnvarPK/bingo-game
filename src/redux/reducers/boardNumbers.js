import { getRandonNumbersOfOrder } from "../../utils/randomNumbers";

let defaultValues = getRandonNumbersOfOrder(5);

export default (state = defaultValues, action) => {
    switch (action.type) {
        default:
            return state;
    }
}