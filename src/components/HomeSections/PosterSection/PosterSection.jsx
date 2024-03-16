import "./PosterSection.scss";
import { eventTickets } from "../../../helpers/ProductsList";
import ticket from "../../../img/img_SportArena/2-main/section-2/ticket 1.svg";

const dateItem1 = [
    {
        title: "23",
        desc: "Чт",
    },
    {
        title: "25",
        desc: "Сб",
    },
    {
        title: "27",
        desc: "Пн",
    },
    {
        title: "28",
        desc: "Вт",
    },
    {
        title: "29",
        desc: "Ср",
    },
];

const dateItem2 = [
    {
        title: "23",
        desc: "Чт",
    },
    {
        title: "25",
        desc: "Сб",
    },
    {
        title: "27",
        desc: "Пн",
    },
    {
        title: "28",
        desc: "Вт",
    },
    {
        title: "29",
        desc: "Ср",
    },
    {
        title: "23",
        desc: "Чт",
    },
    {
        title: "25",
        desc: "Сб",
    },
    {
        title: "27",
        desc: "Пн",
    },
    {
        title: "28",
        desc: "Вт",
    },
    {
        title: "29",
        desc: "Ср",
    },
];

const dateItem3 = [
    {
        title: "23",
        desc: "Чт",
    },
    {
        title: "25",
        desc: "Сб",
    },
    {
        title: "27",
        desc: "Пн",
    },
    {
        title: "28",
        desc: "Вт",
    },
];

export default function PosterSection() {
    return (
        <>
            <section className="section-2 section">
                <div className="section2-container">
                    <div className="section2-container__wrapper">
                        <div className="wrapper-element__header">
                            <h1>Афиша</h1>
                        </div>
                        <div className="wrapper-element__Date">
                            <div className="Date-item">
                                <div className="Date-item__month">
                                    <h1>Ноябрь 2023</h1>
                                </div>

                                <div className="Date-item__number">
                                    {dateItem1.map((item, i) => {
                                        return (
                                            <div
                                                className="Date-item__number-link"
                                                key={i}
                                            >
                                                <h1>{item.title}</h1>
                                                <p>{item.desc}</p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="Date-item">
                                <div className="Date-item__month">
                                    <h1>Декабрь 2023</h1>
                                </div>

                                <div className="Date-item__number">
                                    {dateItem2.map((item, i) => {
                                        return (
                                            <div
                                                className="Date-item__number-link"
                                                key={i}
                                            >
                                                <h1>{item.title}</h1>
                                                <p>{item.desc}</p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="Date-item">
                                <div className="Date-item__month">
                                    <h1>Январь 2023</h1>
                                </div>

                                <div className="Date-item__number">
                                    {dateItem3.map((item, i) => {
                                        return (
                                            <div
                                                className="Date-item__number-link"
                                                key={i}
                                            >
                                                <h1>{item.title}</h1>
                                                <p>{item.desc}</p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        <div className="wrapper-element__ticket">
                            <div className="wrapper-element__ticket-grid1">
                                {eventTickets
                                    .filter((item, index) => index < 2)
                                    .map((eventTicket, index) => {
                                        return (
                                            <div
                                                className="ticket-grid__container grid__container"
                                                key={index}
                                            >
                                                <div className="ticket-grid1__container-img">
                                                    <img
                                                        src={
                                                            eventTicket.imgLine
                                                        }
                                                    />
                                                </div>

                                                <div className="ticket-grid1__container-item">
                                                    <div className="ticket-grid1__container-item_h1">
                                                        <h1>
                                                            {eventTicket.title}
                                                        </h1>
                                                    </div>

                                                    <div className="ticket-grid1__container-item_textInfo">
                                                        <p>
                                                            {eventTicket.desc}
                                                        </p>
                                                    </div>

                                                    <div className="ticket-grid1__container-item_button">
                                                        <button>
                                                            <img src={ticket} />
                                                            <p>от 300 ₽</p>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                            </div>

                            <div className="wrapper-element__ticket-grid2">
                                {eventTickets
                                    .filter((item, index) => index > 1)
                                    .map((eventTicket, index) => {
                                        return (
                                            <div
                                                className="ticket-grid__container grid__container"
                                                key={index}
                                            >
                                                <div className="ticket-grid1__container-img">
                                                    <img
                                                        src={
                                                            eventTicket.imgLine
                                                        }
                                                    />
                                                </div>

                                                <div className="ticket-grid1__container-item">
                                                    <div className="ticket-grid1__container-item_h1">
                                                        <h1>
                                                            {eventTicket.title}
                                                        </h1>
                                                    </div>

                                                    <div className="ticket-grid1__container-item_textInfo">
                                                        <p>
                                                            {eventTicket.desc}
                                                        </p>
                                                    </div>

                                                    <div className="ticket-grid1__container-item_button">
                                                        <button>
                                                            <img src={ticket} />
                                                            <p>от 300 ₽</p>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
