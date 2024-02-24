import { newsSports } from "../../../helpers/ProductsList";
import "./NewsSection.scss";

export default function NewsSection() {
    return (
        <>
            <section class="section-3 section">
                <div class="section3-container">
                    <div class="section3-container__News">
                        <div class="News-header">
                            <div class="News-header__ivent">
                                <div class="News-header__ivent-link">
                                    <a href="#">Новости</a>
                                </div>
                            </div>

                            <div class="News-header__ivent">
                                <div class="News-header__ivent-link">
                                    <a href="#">Галерея</a>
                                </div>
                            </div>

                            <div class="News-header__ivent">
                                <div class="News-header__ivent-link">
                                    <a href="#">Видео</a>
                                </div>
                            </div>
                        </div>

                        <div class="News-template">
                            {newsSports.map((newsSport, index) => {
                                return (
                                    <div
                                        class="News-template__container"
                                        key={index}
                                    >
                                        <img src={newsSport.img} width="100%" />
                                        <div class="News-template__container-text">
                                            <h1>{newsSport.title}</h1>
                                            <p>{newsSport.desc}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
