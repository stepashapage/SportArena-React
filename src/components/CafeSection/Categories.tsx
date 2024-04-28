import React, { memo } from "react";
import { ButtonFilter } from "../ShopSection/ButtonFilter/ButtonFilter";
import { useWhyDidYouUpdate } from "ahooks";

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

export const Categories: React.FC<CategoriesProps> = memo(
    ({ value, onClickCategories }) => {
        useWhyDidYouUpdate("Categories", {
            value,
            onClickCategories,
        });

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
);
