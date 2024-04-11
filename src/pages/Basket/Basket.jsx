import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmptyBasket from "./EmptyBasket";
import FilledBasket from "./FilledBasket";
import { Link } from "react-router-dom";
import imgTrash from "../../img/img_Basket/trash.svg";
import { clearItems, selectCart } from "../../redux/slices/cartSlice";

export const breadcrumbsLinks = [
    { path: "/Cafe", Name: "Пиццерия" },
    { path: "/Basket", Name: "Корзина" },
];

export default function Basket() {
    const dispatch = useDispatch();
    const onClickClear = () => {
        if (window.confirm("Очистить корзину ?")) {
            dispatch(clearItems());
        }
    };

    const { TotalPrice } = useSelector(selectCart);

    useEffect(() => {
        window.scrollTo(0, 0);
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

                        <h1 className="wrapperBuyTicket-col_title">Корзина</h1>

                        <div className="content__items">
                            {!TotalPrice ? (
                                <></>
                            ) : (
                                <div
                                    onClick={onClickClear}
                                    className="cart__top"
                                >
                                    <div className="cart__clear">
                                        <img src={imgTrash} />

                                        <span>Очистить корзину</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </nav>
                </div>
            </section>

            <div className="sectionShop section--PageContent">
                {!TotalPrice ? <EmptyBasket /> : <FilledBasket />}
            </div>
        </>
    );
}
