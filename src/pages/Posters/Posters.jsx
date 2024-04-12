import { useEffect, useState } from "react";
import style from "./Posters.module.scss";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

import tg from "../../img/img_SportArena/1-header/tg.svg";
import github from "../../img/img_SportArena/1-header/github.svg";
import star from "../../img/img_FoodForArena/2-main/section-2/StarReating.svg";

export default function pizzas() {
    const [pizza, setPizza] = useState();
    const { id } = useParams();
    const navigate = useNavigate();

    const [ActiveList, setActiveList] = useState(0);
    const [ActiveTypes, setActiveTypes] = useState(0);

    const activeClass = "active";
    const staticClass = "";
    const typeNames = ["тонкое", "традиционное"];

    const onClickList = (i) => {
        setActiveList(i);
    };

    const onClickTypes = (i) => {
        setActiveTypes(i);
    };

    useEffect(() => {
        async function fetchPizza() {
            try {
                const { data } = await axios.get(
                    `https://65e1b95ca8583365b3171da6.mockapi.io/items/` + id
                );
                setPizza(data);
            } catch (error) {
                alert("Ошибка получения пиццы, просим прощения!");
                navigate("/Cafe");
            }
        }

        fetchPizza();
    }, []);

    if (!pizza) {
        return "";
    }

    return (
        <>
            <main className="main">
                <div className="section-bgg"></div>

                <section className="sectionTicket section--MainInformation">
                    <div className="MainInformation__container">
                        <div className="MainInformation__container-breadcrumbs">
                            <ul className="breadcrumbs_list">
                                <li className="breadcrumbs_link">
                                    <Link
                                        to={"/Cafe"}
                                        className="breadcrumbs_item"
                                    >
                                        Пиццерия
                                    </Link>
                                </li>
                            </ul>

                            <form action="">
                                <button className="breadcrumbs-infBtn">
                                    Питание
                                </button>
                                <button className="breadcrumbs-infBtn">
                                    Пицца
                                </button>
                            </form>
                        </div>

                        <div className="MainInformation__container-wrapperBuyTicket">
                            <div className="wrapperBuyTicket-col">
                                <h1 className="wrapperBuyTicket-col_title">
                                    {pizza.title}
                                    <div className={style.DateEvent__image}>
                                        <img src={pizza.imageUrl} />
                                    </div>
                                </h1>

                                <form action="">
                                    <button className="BuyTicket">
                                        <p>Купить Пиццу</p>
                                    </button>

                                    <button className="bookingTicket">
                                        <p>Отложить в избранное</p>
                                    </button>
                                </form>
                            </div>

                            <div className="wrapperBuyTicket-soc">
                                <h1 className="wrapperBuyTicket-soc_title">
                                    Собираетесь купить? Расскажите об этом своим
                                    друзьям в социальных сетях.
                                </h1>

                                <form className="wrapperBuyTicket-soc_social">
                                    <button>
                                        <img src={tg} width="10%" />
                                    </button>
                                    <button>
                                        <img src={github} width="10%" />
                                    </button>
                                </form>
                            </div>
                        </div>

                        <div className="MainInformation__container-DateEvent">
                            <div className={style.DateEvent__ticket}>
                                <form className="DateEvent__ticket-btn">
                                    <button>Пиццерия</button>
                                </form>

                                <h1 className="DateEvent__ticket-title">
                                    Оценки других пользователей:
                                </h1>

                                <div className="DateEvent__ticket-star">
                                    <img src={star} />
                                    <img src={star} />
                                    <img src={star} />
                                    <img src={star} />
                                    <img src={star} />
                                </div>

                                <div className={style.ticket_DateEvent}>
                                    <div className="pizza-block__selector">
                                        <ul>
                                            {pizza.types.map((type, i) => {
                                                return (
                                                    <li
                                                        key={i}
                                                        className={`${
                                                            ActiveTypes === i
                                                                ? activeClass
                                                                : staticClass
                                                        }`}
                                                        onClick={() => {
                                                            onClickTypes(i);
                                                        }}
                                                    >
                                                        {typeNames[type]}
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                        <ul>
                                            {pizza.sizes.map((size, i) => {
                                                return (
                                                    <li
                                                        key={i}
                                                        className={`${
                                                            ActiveList === i
                                                                ? activeClass
                                                                : staticClass
                                                        }`}
                                                        onClick={() => {
                                                            onClickList(i);
                                                        }}
                                                    >
                                                        {size} см.
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </div>

                                <div className="DateEvent__ticket-cont">
                                    <div className="DateEvent__ticket-PriceList">
                                        <div className="PriceList__costDuration PriceList__costDuration1">
                                            <h1>Стоимость</h1>
                                            <p>{pizza.price} ₽</p>
                                        </div>

                                        <div className="PriceList__costDuration PriceList__costDuration2">
                                            <h1>Рейтинг</h1>
                                            <p>~ {pizza.rating}</p>
                                        </div>
                                    </div>

                                    <button className="DateEvent__ticket-BuyTicket">
                                        Купить пиццу
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
