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

export default function Categories({ value, onClickCategories }) {
    return (
        <ul className="filter">
            {PizzaItems.map((filterItem, i) => {
                return (
                    <ButtonFilter
                        key={i}
                        handleClick={() => onClickCategories(i)}
                        isActive={value === i}
                    >
                        {filterItem.Name}
                    </ButtonFilter>
                );
            })}
        </ul>
    );
}
