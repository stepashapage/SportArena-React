import { newsSports } from "../../../helpers/ProductsList";
import "./NewsSection.scss";

export default function NewsSection() {
    return (
        <>
            <section className="section-3 section">
                <div className="section3-container">
                    <div className="section3-container__News">
                        <div className="News-header">
                            <div className="News-header__ivent">
                                <div className="News-header__ivent-link">
                                    <a href="#">Новости</a>
                                </div>
                            </div>

                            <div className="News-header__ivent">
                                <div className="News-header__ivent-link">
                                    <a href="#">Галерея</a>
                                </div>
                            </div>

                            <div className="News-header__ivent">
                                <div className="News-header__ivent-link">
                                    <a href="#">Видео</a>
                                </div>
                            </div>
                        </div>

                        <div className="News-template">
                            {newsSports.map((newsSport, index) => {
                                return (
                                    <div
                                        className="News-template__container"
                                        key={index}
                                    >
                                        <img src={newsSport.img} width="100%" />
                                        <div className="News-template__container-text">
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
