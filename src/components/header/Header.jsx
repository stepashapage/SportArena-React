import { Link, NavLink } from "react-router-dom";
import "./Header.scss";
import { useEffect, useRef, useState } from "react";

import imgMenu from "../../img/img_SportArena/1-header/Menu-list (2).svg";
import imgLikes from "../../img/img_SportArena/1-header/Like-list (2).svg";
import imgSignIn from "../../img/img_SportArena/1-header/Account-list (2).svg";
import imgCart from "../../img/img_SportArena/1-header/Cart-list.svg";
import Right from "../../img/img_SportArena/2-main/section-1/Main/angle-small-right 1.svg";

import RegistrModal from "../RegistrModal/RegistrModal";

const headerMenu = [
    {
        img: imgMenu,
        desc: "Меню",
        link: "menu",
    },
    {
        img: imgLikes,
        desc: "Избранное",
    },
    {
        img: imgSignIn,
        desc: "Войти",
        link: "account",
    },
    {
        img: imgCart,
        desc: "Корзина",
        path: "/Basket",
    },
];

const headerCatalog = [
    {
        desc: "Афиша и билеты",
        path: "/Posters",
    },
    {
        desc: "Товары",
        path: "#",
    },
    {
        desc: "Посетителям",
        path: "#",
    },
    {
        desc: "Возможности",
        path: "#",
    },
    {
        desc: "Арена",
        path: "#",
    },
    {
        desc: "Медиа",
        path: "#",
    },
    {
        desc: "Концерты",
        path: "#",
    },
];

const tempMenu = [
    {
        Name: "Vivi Fuel Arena",
        img: Right,
        path: "/",
    },
    {
        Name: "Vivi Fuel Children`s Arena",
        img: Right,
        path: "/ChidrenArena",
    },
    {
        Name: "Vivi Fuel Sport Food",
        img: Right,
        path: "/Food",
    },
];

export default function Header() {
    const headerRef = useRef(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const shrinkHeader = () => {
            if (
                document.body.scrollTop > 50 ||
                document.documentElement.scrollTop > 50
            ) {
                headerRef.current.classList.add("shrink");
            } else headerRef.current.classList.remove("shrink");
        };

        window.addEventListener("scroll", shrinkHeader);

        return () => {
            window.removeEventListener("scroll", shrinkHeader);
        };
    }, []);

    const [RegistrModalOpen, setRegistrModalOpen] = useState(false);

    return (
        <>
            <header className="header">
                <div
                    id="headerAnimation"
                    className="header-container"
                    ref={headerRef}
                >
                    <div className="header-container__wrapper">
                        <div className="header-container__wrapper-height header-container__wrapper-white">
                            <NavLink className="while-flex__Logo" to={"/"}>
                                <h1>
                                    Vivi <strong>Fuel</strong>
                                </h1>
                            </NavLink>

                            <ul className="while-flex__Catalog">
                                {headerMenu.map((item, index) => {
                                    return (
                                        <li
                                            className="catalog-item"
                                            key={index}
                                            onClick={() => {
                                                if (item.link === "menu")
                                                    setOpen(!open);
                                                if (item.link === "account")
                                                    setRegistrModalOpen(true);
                                            }}
                                        >
                                            <Link
                                                to={item.path}
                                                className="catalog-item__link"
                                            >
                                                <span className="catalog-item__list">
                                                    <img src={item.img} />
                                                    <p>{item.desc}</p>
                                                </span>
                                            </Link>
                                        </li>
                                    );
                                })}

                                <ul
                                    className={`header-container__template ${
                                        open ? "active" : ""
                                    }`}
                                >
                                    {tempMenu.map((item, index) => {
                                        return (
                                            <li
                                                className="template-item"
                                                key={index}
                                            >
                                                <Link to={item.path}>
                                                    <p className="template-item__link">
                                                        {item.Name}
                                                    </p>
                                                    <img
                                                        src={item.img}
                                                        className="template-item__link-svg"
                                                    />
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </ul>
                        </div>

                        <div className="header-container__wrapper-height header-container__wrapper-black">
                            <div className="black-flex">
                                <ul>
                                    {headerCatalog.map((item, index) => {
                                        return (
                                            <li
                                                key={index}
                                                className="black-flex__catalog"
                                            >
                                                <Link
                                                    to={item.path}
                                                    className="stock-link"
                                                >
                                                    {item.desc}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <RegistrModal
                isOpen={RegistrModalOpen}
                onClose={() => {
                    setRegistrModalOpen(false);
                }}
            ></RegistrModal>
        </>
    );
}
