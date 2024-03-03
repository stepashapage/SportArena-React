import { useEffect, useState } from "react";
import EmptyBasket from "./EmptyBasket";
import FilledBasket from "./FilledBasket";
import { Link } from "react-router-dom";
import imgTrash from "../../img/img_Basket/trash.svg";

export const breadcrumbsLinks = [
    { path: "/Cafe", Name: "Пиццерия" },
    { path: "/Basket", Name: "Корзина" },
];

export default function Basket() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [isCart, setIsCart] = useState(true);

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
                            {isCart === false ? (
                                <></>
                            ) : (
                                <div className="cart__top">
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
                {isCart === false ? <EmptyBasket /> : <FilledBasket />}
            </div>
        </>
    );
}
