import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import styles from "./cafe.module.scss";
import "./app.scss";

import Categories from "../../components/CafeSection/Categories";
import Sort, { sortList } from "../../components/CafeSection/Sort";
import PizzaBlock from "../../components/CafeSection/PizzaBlock";
import { Skeleton } from "../../components/CafeSection/Skeleton";
import Search from "../../components/CafeSection/Search/Search";
import Pagination from "../../components/CafeSection/Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import {
    setCategoryId,
    setFilters,
    setPageCount,
} from "../../redux/slices/filterslice";
import QueryString from "qs";
import { fetchPizzas } from "../../redux/slices/pizzasSlice";

export const breadcrumbsLinks = [
    { path: "/", Name: "Главная" },
    { path: "/ChidrenArena", Name: "Кафе" },
    { path: "/Cafe", Name: "Пиццерия ViviFood" },
];

// export const SearchContext = createContext();

export default function CafeChildArena() {
    const categoryId = useSelector((state) => state.filter.categoryId);
    const sortType = useSelector((state) => state.filter.sort.sortProperty);
    const pageCount = useSelector((state) => state.filter.pageCount);
    const { items, status } = useSelector((state) => state.pizza);
    const SearchValue = useSelector((state) => state.filter.SearchValue);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onClickCategories = (id) => {
        dispatch(setCategoryId(id));
    };

    // const [SearchValue, setSearchValue] = useState("");

    const skeletons = [...new Array(6)].map((_, i) => <Skeleton key={i} />);
    const pizzas = items
        .filter((i) => {
            if (i.title.toLowerCase().includes(SearchValue.toLowerCase())) {
                return true;
            }
            return false;
        })
        .map((pizza) => <PizzaBlock {...pizza} key={pizza.id} />);

    useEffect(() => {
        if (window.location.search) {
            const params = QueryString.parse(
                window.location.search.substring(1)
            );

            const sort = sortList.find(
                (obj) => obj.sortProperty === params.sortProperty
            );

            dispatch(
                setFilters({
                    ...params,
                    sort,
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
                    onChangePage={(number) => {
                        dispatch(setPageCount(number));
                    }}
                />
            </section>
        </>
        // </SearchContext.Provider>
    );
}
