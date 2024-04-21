import { useEffect } from "react";
import { Link } from "react-router-dom";

export const breadcrumbsLinks = [
    { path: "/", Name: "Главная" },
    { path: "*", Name: "Ошибка" },
];

export const NotFound = () => {
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

                        <h1 className="wrapperBuyTicket-col_title">
                            Oops, Ошибка 404
                        </h1>
                    </nav>
                </div>
            </section>
        </>
    );
};
