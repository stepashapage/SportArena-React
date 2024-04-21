import React from "react";
import { ButtonFilter } from "../ShopSection/ButtonFilter/ButtonFilter";

export const PizzaItems = [
    {
        Name: "Все",
    },
    {
        Name: "Мясные",
    },
    {
        Name: "Вегетарианская",
    },
    {
        Name: "Гриль",
    },
    {
        Name: "Острые",
    },
    {
        Name: "Закрытые",
    },
];

type CategoriesProps = {
    value: number;
    onClickCategories: (i: number) => void;
};

export const Categories: React.FC<CategoriesProps> = ({
    value,
    onClickCategories,
}) => {
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
};
