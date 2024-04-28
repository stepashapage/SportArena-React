import { Link, useNavigate } from "react-router-dom";
import React, { useCallback, useEffect } from "react";
import styles from "./cafe.module.scss";
import "./app.scss";

import { Categories } from "../../components/CafeSection/Categories";
import { Sort, sortList } from "../../components/CafeSection/Sort";
import { PizzaBlock } from "../../components/CafeSection/PizzaBlock";
import { Skeleton } from "../../components/CafeSection/Skeleton";
import { Search } from "../../components/CafeSection/Search/Search";
import { Pagination } from "../../components/CafeSection/Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import {
    FilterInitialType,
    setCategoryId,
    setFilters,
    setPageCount,
} from "../../redux/slices/filterslice";
import QueryString from "qs";
import { FetchPizzasArgs, fetchPizzas } from "../../redux/slices/pizzasSlice";
import { RootState, useAppDispatch } from "../../redux/store";

export const breadcrumbsLinks = [
    { path: "/", Name: "Главная" },
    { path: "/ChidrenArena", Name: "Кафе" },
    { path: "/Cafe", Name: "Пиццерия ViviFood" },
];

// export const SearchContext = createContext();

export const CafeChildArena: React.FC = () => {
    const categoryId = useSelector(
        (state: RootState) => state.filter.categoryId
    );
    const sortType = useSelector(
        (state: RootState) => state.filter.sort.sortProperty
    );
    const pageCount = useSelector((state: RootState) => state.filter.pageCount);
    const { items, status } = useSelector((state: RootState) => state.pizza);
    const SearchValue = useSelector(
        (state: RootState) => state.filter.SearchValue
    );

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onClickCategories = useCallback((id: number) => {
        dispatch(setCategoryId(id));
    }, []);

    // const [SearchValue, setSearchValue] = useState("");

    const skeletons = [...new Array(6)].map((_, i) => <Skeleton key={i} />);
    const pizzas = items
        .filter((i: any) => {
            if (i.title.toLowerCase().includes(SearchValue.toLowerCase())) {
                return true;
            }
            return false;
        })
        .map((pizza: any) => <PizzaBlock {...pizza} key={pizza.id} />);

    useEffect(() => {
        if (window.location.search) {
            const params: any = QueryString.parse(
                window.location.search.substring(1)
            ) as unknown as FilterInitialType;

            const sort = sortList.find(
                (obj) => obj.sortProperty === params.sortType
            );

            dispatch(
                setFilters({
                    SearchValue: params.SearchValue,
                    categoryId: params.categoryId,
                    pageCount: params.pageCount,
                    sort: sort || sortList[0],
                })
            );
        }
    }, []);

    const fetchRequest = async () => {
        const category = categoryId > 0 ? `category=${categoryId}` : "";

        dispatch(
            fetchPizzas({
                sortType,
                pageCount,
                category,
            })
        );

        window.scrollTo(0, 0);
    };

    useEffect(() => {
        fetchRequest();
    }, [categoryId, sortType, pageCount]);

    useEffect(() => {
        const queryString = QueryString.stringify({
            sortType,
            categoryId,
            pageCount,
        });
        navigate(`?${queryString}`);
    }, [categoryId, sortType, pageCount]);

    return (
        // <SearchContext.Provider value={{ SearchValue, setSearchValue }}>
        <>
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
                {status === "error" ? (
                    <div>Произошла ошибка, просим прощения</div>
                ) : (
                    <div className="content__items">
                        {status === "loading" ? skeletons : pizzas}
                    </div>
                )}

                <Pagination
                    value={pageCount}
                    onChangePage={(number: number) => {
                        dispatch(setPageCount(number));
                    }}
                />
            </section>
        </>
        // </SearchContext.Provider>
    );
};
