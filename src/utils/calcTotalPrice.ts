import { InitialStateType } from "../redux/slices/cartSlice";

export const calcTotalPrice = (items: InitialStateType[]) => {
    return items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
    }, 0);
};
