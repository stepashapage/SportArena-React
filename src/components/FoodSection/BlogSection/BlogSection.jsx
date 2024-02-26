import "./BlogSection.scss";

import BlogImg1 from "../../../img/img_FoodForArena/2-main/sectiton-5/Main/1.svg";
import BlogImg2 from "../../../img/img_FoodForArena/2-main/sectiton-5/Main/2.svg";
import BlogImg3 from "../../../img/img_FoodForArena/2-main/sectiton-5/Main/3.svg";
import BlogImg4 from "../../../img/img_FoodForArena/2-main/sectiton-5/Main/4.svg";
import BlogImg5 from "../../../img/img_FoodForArena/2-main/sectiton-5/Main/5.svg";

const BlogNewsSlides = [
    {
        img: BlogImg1,
        title: "Витамины",
        desc: "Витамины для вегетарианцев",
        date: "30 октября 2023",
    },
    {
        img: BlogImg2,
        title: "ХОНДРОПРОТЕКТОРЫ",
        desc: "Какой коллаген лучше: животный или морской?",
        date: "27 октября 2023",
    },
    {
        img: BlogImg3,
        title: "ПРОТЕИН",
        desc: "Почему девушкам не нужно бояться протеина?",
        date: "25 октября 2023",
    },
    {
        img: BlogImg4,
        title: "ВИТАМИНЫ",
        desc: "Как принимать омега-3 и витамин D: совместимость",
        date: "23 октября 2023",
    },
    {
        img: BlogImg5,
        title: "ПОПУЛЯРНЫЕ ВОПРОСЫ",
        desc: "Как похудеть за неделю?",
        date: "20 октября 2023",
    },
];

export default function BlogSection() {
    return (
        <section className="section">
            <div className="section-container">
                <div className="section-container__Blog">
                    <div className="Product-header Blog-header">
                        <h1>Блог</h1>
                    </div>

                    <div className="Blog-News">
                        {BlogNewsSlides.filter((item, index) => index < 1).map(
                            (BlogNewsSlide, i) => {
                                return (
                                    <div
                                        className="Blog-News__mainContainer"
                                        key={i}
                                    >
                                        <img src={BlogNewsSlide.img} />

                                        <div className="Blog-News__mainContainer-label">
                                            <div className="mainContainer-label__Nametag">
                                                <p>{BlogNewsSlide.title}</p>
                                                <h1>{BlogNewsSlide.desc}</h1>
                                            </div>

                                            <div className="mainContainer-label__Datetag">
                                                <p>{BlogNewsSlide.date}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                        )}

                        <div className="Blog-News__Slider-swiper">
                            {BlogNewsSlides.filter(
                                (item, index) => index > 0
                            ).map((BlogNewsSlide, i) => {
                                return (
                                    <div className="News-slide" key={i}>
                                        <div className="News-slide__thumb">
                                            <img src={BlogNewsSlide.img} />
                                        </div>
                                        <div className="News-slide__text">
                                            <div className="News-slide__text-title">
                                                <h1>{BlogNewsSlide.title}</h1>
                                            </div>
                                            <div className="News-slide__text-desc">
                                                <h1>{BlogNewsSlide.desc}</h1>
                                            </div>
                                            <div className="News-slide__text-date">
                                                <p>{BlogNewsSlide.date}</p>
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
    );
}
