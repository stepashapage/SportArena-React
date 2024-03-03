import { ButtonFilter } from "../../components/ShopSection/ButtonFilter/ButtonFilter";
import { useState } from "react";

export const PizzaItems = [
    {
        Name: "Все",
        DataAtrbt: "all",
    },
    {
        Name: "Мясные",
        DataAtrbt: "Child",
    },
    {
        Name: "Вегетарианская",
        DataAtrbt: "Sport",
    },
    {
        Name: "Гриль",
        DataAtrbt: "Shops",
    },
    {
        Name: "Острые",
        DataAtrbt: "restaurants",
    },
    {
        Name: "Закрытые",
        DataAtrbt: "restaurants",
    },
];

export default function Categories() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <ul className="filter">
            {PizzaItems.map((filterItem, i) => {
                return (
                    <ButtonFilter
                        key={i}
                        handleClick={() => setActiveIndex(i)}
                        isActive={activeIndex === i}
                    >
                        {filterItem.Name}
                    </ButtonFilter>
                );
            })}
        </ul>
    );
}
