import { Link } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import styles from "./cafe.module.scss";
import "./app.scss";

import Categories from "../../components/CafeSection/Categories";
import Sort from "../../components/CafeSection/Sort";
import PizzaBlock from "../../components/CafeSection/PizzaBlock";
import { Skeleton } from "../../components/CafeSection/Skeleton";
import Search from "../../components/CafeSection/Search/Search";
import Pagination from "../../components/CafeSection/Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId } from "../../redux/slices/filterslice";

export const breadcrumbsLinks = [
    { path: "/", Name: "Главная" },
    { path: "/ChidrenArena", Name: "Кафе" },
    { path: "/Cafe", Name: "Пиццерия ViviFood" },
];

export const SearchContext = createContext();

export default function CafeChildArena() {
    const categoryId = useSelector((state) => state.filter.categoryId);
    const sortType = useSelector((state) => state.filter.sort.sortProperty);

    const dispatch = useDispatch();

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);

    const onClickCategories = (id) => {
        dispatch(setCategoryId(id));
    };

    const [SearchValue, setSearchValue] = useState("");

    const skeletons = [...new Array(6)].map((_, i) => <Skeleton key={i} />);
    const pizzas = items
        .filter((i) => {
            if (i.title.toLowerCase().includes(SearchValue.toLowerCase())) {
                return true;
            }
            return false;
        })
        .map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />);

    useEffect(() => {
        setIsLoading(true);

        const category = categoryId > 0 ? `category=${categoryId}` : "";

        fetch(
            `https://65e1b95ca8583365b3171da6.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortType}&order=asc`
        )
            .then((res) => res.json())
            .then((arr) => {
                setItems(arr);
                setIsLoading(false);
            });
        window.scrollTo(0, 0);
    }, [categoryId, sortType, currentPage]);

    return (
        <SearchContext.Provider value={{ SearchValue, setSearchValue }}>
            <div className={styles.bgc}></div>

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

                        <div className="wrapperBuyTicket-searchTitle">
                            <h1 className="wrapperBuyTicket-col_title">
                                Пиццерия ViviFood
                            </h1>
                            <Search />
                        </div>

                        <div className="content__top">
                            <Categories
                                value={categoryId}
                                onClickCategories={onClickCategories}
                            />
                            <Sort />
                        </div>
                    </nav>
                </div>
            </section>

            <section className="sectionShop section--PageContent">
                <div className="content__items">
                    {isLoading ? skeletons : pizzas}
                </div>
                <Pagination
                    onChangePage={(number) => {
                        setCurrentPage(number);
                    }}
                />
            </section>
        </SearchContext.Provider>
    );
}
