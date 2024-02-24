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
            <section class="section-2 section">
                <div class="section2-container">
                    <div class="section2-container__wrapper">
                        <div class="wrapper-element__header">
                            <h1>Афиша</h1>
                        </div>
                        <div class="wrapper-element__Date">
                            <div class="Date-item">
                                <div class="Date-item__month">
                                    <h1>Ноябрь 2023</h1>
                                </div>

                                <div class="Date-item__number">
                                    {dateItem1.map((item, i) => {
                                        return (
                                            <div
                                                class="Date-item__number-link"
                                                key={i}
                                            >
                                                <h1>{item.title}</h1>
                                                <p>{item.desc}</p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            <div class="Date-item">
                                <div class="Date-item__month">
                                    <h1>Декабрь 2023</h1>
                                </div>

                                <div class="Date-item__number">
                                    {dateItem2.map((item, i) => {
                                        return (
                                            <div
                                                class="Date-item__number-link"
                                                key={i}
                                            >
                                                <h1>{item.title}</h1>
                                                <p>{item.desc}</p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            <div class="Date-item">
                                <div class="Date-item__month">
                                    <h1>Январь 2023</h1>
                                </div>

                                <div class="Date-item__number">
                                    {dateItem3.map((item, i) => {
                                        return (
                                            <div
                                                class="Date-item__number-link"
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

                        <div class="wrapper-element__ticket">
                            <div class="wrapper-element__ticket-grid1">
                                {eventTickets
                                    .filter((item, index) => index < 2)
                                    .map((eventTicket, index) => {
                                        return (
                                            <div
                                                class="ticket-grid__container grid__container"
                                                key={index}
                                            >
                                                <div class="ticket-grid1__container-img">
                                                    <img
                                                        src={
                                                            eventTicket.imgLine
                                                        }
                                                    />
                                                </div>

                                                <div class="ticket-grid1__container-item">
                                                    <div class="ticket-grid1__container-item_h1">
                                                        <h1>
                                                            {eventTicket.title}
                                                        </h1>
                                                    </div>

                                                    <div class="ticket-grid1__container-item_textInfo">
                                                        <p>
                                                            {eventTicket.desc}
                                                        </p>
                                                    </div>

                                                    <div class="ticket-grid1__container-item_button">
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

                            <div class="wrapper-element__ticket-grid2">
                                {eventTickets
                                    .filter((item, index) => index > 1)
                                    .map((eventTicket, index) => {
                                        return (
                                            <div
                                                class="ticket-grid__container grid__container"
                                                key={index}
                                            >
                                                <div class="ticket-grid1__container-img">
                                                    <img
                                                        src={
                                                            eventTicket.imgLine
                                                        }
                                                    />
                                                </div>

                                                <div class="ticket-grid1__container-item">
                                                    <div class="ticket-grid1__container-item_h1">
                                                        <h1>
                                                            {eventTicket.title}
                                                        </h1>
                                                    </div>

                                                    <div class="ticket-grid1__container-item_textInfo">
                                                        <p>
                                                            {eventTicket.desc}
                                                        </p>
                                                    </div>

                                                    <div class="ticket-grid1__container-item_button">
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
