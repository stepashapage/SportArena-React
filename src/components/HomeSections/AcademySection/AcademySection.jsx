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
            <section class="section-4 section">
                <div class="section4-container">
                    <div class="section4-container__academy">
                        <div class="academy-header">
                            <div class="academy-header__Logo">
                                <h1>Академия “Vivi Fuel”</h1>
                            </div>

                            <div class="academy-header__menu">
                                {AcademyHeader.map((item, i) => {
                                    return (
                                        <div
                                            class="academy-header__menu-item"
                                            key={i}
                                        >
                                            <div class="academy-header__menu-item_link">
                                                <a href="#">{item.Name}</a>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div class="academy-info">
                            <div class="academy-info__text">
                                <div class="academy-info__text-h1">
                                    <h1>
                                        Информация о том, как стать футболистом
                                        Академии «Спартак»
                                    </h1>
                                </div>

                                <div class="academy-info__text-p">
                                    <p>
                                        Более юным футболистам мы рекомендуем
                                        занятия в наших школах-партнерах, в
                                        первую очередь, Spartak City Football
                                        Academy и сети «Спартак Юниор»
                                    </p>
                                </div>

                                <div class="academy-info__text-button">
                                    <button>Подробнее</button>
                                </div>
                            </div>

                            <div class="academy-info__image">
                                <img src={academyImg} width="100%" />
                            </div>
                        </div>

                        <div class="academy-achievements">
                            <div class="academy-achievements__header">
                                <h1>Наша академия - это</h1>
                            </div>
                            <div class="academy-achievements__info">
                                {academy.map((item, i) => {
                                    return (
                                        <div
                                            class="academy-achievements__info-container"
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
