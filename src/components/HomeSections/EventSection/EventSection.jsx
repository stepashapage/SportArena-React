import { Link } from "react-router-dom";
import { eventTickets } from "../../../helpers/ProductsList";
import "./EventSection.scss";

import videoBg from "../../../img/img_SportArena/2-main/section-1/Backgraund-VTB-Arena.mp4";
import left from "../../../img/img_SportArena/2-main/section-1/Main/Left-svg.svg";
import right from "../../../img/img_SportArena/2-main/section-1/Main/Right-svg.svg";

import Ticket from "../../../pages/Ticket/Ticket";

export default function EventSection() {
    return (
        <section className="section-1 section">
            <div className="section1-container">
                <div className="section1-container__movie">
                    <div className="movie-video">
                        <video
                            className="movie-video__mp4"
                            muted
                            loop
                            autoPlay
                            src={videoBg}
                        />
                    </div>

                    <div className="movie-container">
                        <div className="movie-container__menu">
                            <div className="menu-ivents">
                                <div className="menu-ivents__item">
                                    <h1>События</h1>
                                </div>
                                <div className="menu-ivents__item">
                                    <img
                                        src={left}
                                        width="100%"
                                        height="50vw"
                                    />
                                </div>
                                <div className="menu-ivents__item">
                                    <img
                                        src={right}
                                        width="100%"
                                        height="50px"
                                    />
                                </div>
                            </div>

                            <div className="menu-ivents menu-ivents-full">
                                <div className="menu-ivents__link">
                                    <a href="./Arena-Shop/Shop.html">Спорт</a>
                                </div>
                                <div className="menu-ivents__link">
                                    <a href="./Arena-Shop/Shop.html">Концерт</a>
                                </div>
                                <div className="menu-ivents__link">
                                    <a href="./Arena-Shop/Shop.html">Шоу</a>
                                </div>
                            </div>
                        </div>
                        <div className="movie-container__ticket">
                            {eventTickets.map((eventTicket, i) => {
                                return (
                                    <Link
                                        // to={<Ticket />} // Карточка билета с универсальным id
                                        className="ticket-layer"
                                        key={i}
                                    >
                                        <div className="ticket-layer__image">
                                            <img src={eventTicket.img} />
                                            <h1 className="ticket-layer__image-h1">
                                                {eventTicket.title}
                                            </h1>
                                            <p>{eventTicket.desc}</p>
                                        </div>
                                        <div className="ticket-layer__Buy">
                                            <p>Купить билет</p>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
