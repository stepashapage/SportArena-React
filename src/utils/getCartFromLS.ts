import { calcTotalPrice } from "./calcTotalPrice";

export const getCartFromLS = () => {
    const data = localStorage.getItem("cart");
    const items = data ? JSON.parse(data) : [];
    const TotalPrice = calcTotalPrice(items);

    return {
        items,
        TotalPrice,
    };
};
