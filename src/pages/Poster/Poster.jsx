import { useParams, Link } from "react-router-dom";
import { eventTickets } from "../../helpers/ProductsList";
import "./Poster.scss";

import ticket from "../../img/img_SportArena/2-main/section-2/ticket 1.svg";
import tg from "../../img/img_SportArena/1-header/tg.svg";
import github from "../../img/img_SportArena/1-header/github.svg";
import star from "../../img/img_FoodForArena/2-main/section-2/StarReating.svg";

export default function Poster() {
    const { id } = useParams();
    const poster = eventTickets[id];

    return (
        <>
            <main className="main">
                <div className="section-bgg"></div>

                <section className="sectionTicket section--MainInformation">
                    <div className="MainInformation__container">
                        <div className="MainInformation__container-breadcrumbs">
                            <ul className="breadcrumbs_list">
                                <li className="breadcrumbs_link">
                                    <Link to={"/"} className="breadcrumbs_item">
                                        Главная
                                    </Link>
                                </li>
                                <li className="breadcrumbs_link">
                                    <Link to={"/"} className="breadcrumbs_item">
                                        Афиша
                                    </Link>
                                </li>
                                <li className="breadcrumbs_link">
                                    <Link
                                        className="breadcrumbs_item"
                                        to={poster.path}
                                    >
                                        {poster.title}
                                    </Link>
                                </li>
                            </ul>

                            <form action="">
                                <button className="breadcrumbs-infBtn">
                                    Спорт
                                </button>
                                <button className="breadcrumbs-infBtn">
                                    0+
                                </button>
                                <button className="breadcrumbs-infBtn">
                                    ~ 2ч. 0 мин.
                                </button>
                            </form>
                        </div>

                        <div className="MainInformation__container-wrapperBuyTicket">
                            <div className="wrapperBuyTicket-col">
                                <h1 className="wrapperBuyTicket-col_title">
                                    {poster.title}
                                </h1>

                                <form action="">
                                    <button className="BuyTicket">
                                        <img src={ticket} />
                                        <p>Купить билет</p>
                                    </button>

                                    <button className="bookingTicket">
                                        <p>Забронировать VIP-ложу</p>
                                    </button>
                                </form>
                            </div>

                            <div className="wrapperBuyTicket-soc">
                                <h1 className="wrapperBuyTicket-soc_title">
                                    Собираетесь пойти? Расскажите об этом своим
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
                            <div className="DateEvent__image">
                                <img src={poster.bigimg} />
                            </div>
                            <div className="DateEvent__ticket">
                                <form className="DateEvent__ticket-btn">
                                    <button>Арена</button>
                                </form>

                                <h1 className="DateEvent__ticket-title">
                                    Даты проведения мероприятия:
                                </h1>

                                <div className="DateEvent__ticket-star">
                                    <img src={star} />
                                    <img src={star} />
                                    <img src={star} />
                                </div>

                                <div className="DateEvent__ticket-DateEvent">
                                    <h1 className="DateEvent__ticket-title">
                                        {poster.desc}
                                    </h1>
                                </div>

                                <div className="DateEvent__ticket-cont">
                                    <div className="DateEvent__ticket-PriceList">
                                        <div className="PriceList__costDuration PriceList__costDuration1">
                                            <h1>Стоимость</h1>
                                            <p>от 400 ₽</p>
                                        </div>

                                        <div className="PriceList__costDuration PriceList__costDuration2">
                                            <h1>Длительность</h1>
                                            <p>~ 2 ч. 0 мин.</p>
                                        </div>
                                    </div>

                                    <button className="DateEvent__ticket-BuyTicket">
                                        <img src={ticket} />
                                        Купить билет
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
