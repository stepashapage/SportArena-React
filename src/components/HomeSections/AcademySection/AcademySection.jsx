import "./AcademySection.scss";
import { academy } from "../../../helpers/ProductsList";

import academyImg from "../../../img/img_SportArena/2-main/section-4/1.svg";

const AcademyHeader = [
    {
        Name: "Об академии",
        path: "about",
    },
    {
        Name: "Сотрудники",
        path: "Staff",
    },
    {
        Name: "Команды",
        path: "Teams",
    },
    {
        Name: "Медиа",
        path: "Media",
    },
    {
        Name: "Инфраструктура",
        path: "Infrastructure",
    },
    {
        Name: "Как попасть",
        path: "HowToGetThere",
    },
    {
        Name: "Контакты",
        path: "Contacts",
    },
];

export default function AcademySection() {
    return (
        <>
            <section className="section-4 section">
                <div className="section4-container">
                    <div className="section4-container__academy">
                        <div className="academy-header">
                            <div className="academy-header__Logo">
                                <h1>Академия “Vivi Fuel”</h1>
                            </div>

                            <div className="academy-header__menu">
                                {AcademyHeader.map((item, i) => {
                                    return (
                                        <div
                                            className="academy-header__menu-item"
                                            key={i}
                                        >
                                            <div className="academy-header__menu-item_link">
                                                <a href="#">{item.Name}</a>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="academy-info">
                            <div className="academy-info__text">
                                <div className="academy-info__text-h1">
                                    <h1>
                                        Информация о том, как стать футболистом
                                        Академии «Спартак»
                                    </h1>
                                </div>

                                <div className="academy-info__text-p">
                                    <p>
                                        Более юным футболистам мы рекомендуем
                                        занятия в наших школах-партнерах, в
                                        первую очередь, Spartak City Football
                                        Academy и сети «Спартак Юниор»
                                    </p>
                                </div>

                                <div className="academy-info__text-button">
                                    <button>Подробнее</button>
                                </div>
                            </div>

                            <div className="academy-info__image">
                                <img src={academyImg} width="100%" />
                            </div>
                        </div>

                        <div className="academy-achievements">
                            <div className="academy-achievements__header">
                                <h1>Наша академия - это</h1>
                            </div>
                            <div className="academy-achievements__info">
                                {academy.map((item, i) => {
                                    return (
                                        <div
                                            className="academy-achievements__info-container"
                                            key={i}
                                        >
                                            <img src={item.img} width="30%" />
                                            <h1>{item.title}</h1>
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
