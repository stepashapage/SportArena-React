import { Link } from "react-router-dom";
import "./MainInformation.scss";
import { ButtonFilter } from "../ButtonFilter/ButtonFilter";
import { useState } from "react";

export const filterItems = [
    {
        Name: "Все",
        DataAtrbt: "all",
        path: "/Shop",
    },
    {
        Name: "Для детей",
        DataAtrbt: "Child",
        path: "/Shop",
    },
    {
        Name: "Спорт",
        DataAtrbt: "Sport",
        path: "/Shop",
    },
    {
        Name: "Магазины",
        DataAtrbt: "Shops",
        path: "/Shop",
    },
    {
        Name: "Рестораны",
        DataAtrbt: "restaurants",
        path: "/Shop",
    },
];

export const breadcrumbsLinks = [
    { path: "/", Name: "Главная" },
    { path: "/", Name: "Афиша" },
    { path: "/Shop", Name: "Магазины и развлечения" },
];

export default function MainInformation({ children }) {
    const [activeIndex, setActiveIndex] = useState(0);

    const javaScript = (event) => {
        const el = event.target;

        document
            .querySelector(".filter__item-link.filter__item-link--Active")
            .classList.remove("filter__item-link--Active");
        el.classList.add("filter__item-link--Active");
    };

    return (
        <>
            <div className="section-bg"></div>

            <section className="sectionShop section--MainInformation">
                <div className="MainInformation__container">
                    <nav className="MainInformation__container-breadcrumbs">
                        <ul className="breadcrumbs_list">
                            {breadcrumbsLinks.map((breadcrumbsLink, i) => {
                                return (
                                    <li className="breadcrumbs_link" key={i}>
                                        <Link
                                            to={breadcrumbsLink.path}
                                            className="breadcrumbs_item"
                                        >
                                            {breadcrumbsLink.Name}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>

                        <h1 className="wrapperBuyTicket-col_title">
                            {children}
                        </h1>

                        <ul className="filter">
                            {filterItems.map((filterItem, i) => {
                                return (
                                    <ButtonFilter
                                        data={filterItem.DataAtrbt}
                                        key={i}
                                        handleClick={() => setActiveIndex(i)}
                                        isActive={activeIndex === i}
                                    >
                                        {filterItem.Name}
                                    </ButtonFilter>
                                );
                            })}
                        </ul>
                    </nav>
                </div>
            </section>
        </>
    );
}
