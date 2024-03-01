import { Link } from "react-router-dom";
import "./app.scss";
import Categories from "../../components/CafeSection/Categories";
import Sort from "../../components/CafeSection/Sort";
import PizzaBlock from "../../components/CafeSection/PizzaBlock";
import { useEffect, useState } from "react";

export const breadcrumbsLinks = [
    { path: "/ChidrenArena", Name: "Главная" },
    { path: "/ChidrenArena", Name: "Кафе" },
    { path: "/Cafe", Name: "Пиццерия ViviFood" },
];

export default function CafeChildArena() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://65e1b95ca8583365b3171da6.mockapi.io/items")
            .then((res) => res.json())
            .then((arr) => {
                setItems(arr);
            });
    }, []);

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
                            Пиццерия ViviFood
                        </h1>

                        <div className="content__top">
                            <Categories />
                            <Sort />
                        </div>
                    </nav>
                </div>
            </section>

            <section className="sectionShop section--PageContent">
                <div className="content__items">
                    {items.map((pizza) => {
                        return <PizzaBlock key={pizza.id} {...pizza} />;
                    })}
                </div>
            </section>
        </>
    );
}
