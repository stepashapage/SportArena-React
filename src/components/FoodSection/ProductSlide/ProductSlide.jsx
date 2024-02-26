import "./ProductSlide.scss";
import { ProductSlides } from "../../../helpers/ProductsList";
import CartImg from "../../../img/img_FoodForArena/2-main/section-2/Корзина.svg";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ProductSlide({ children }) {
    return (
        <section className="ProductSlide--section-container section2-container">
            <div className="section2-container__Product">
                <div className="Product-header">
                    <h1>{children}</h1>
                </div>

                <div className="product-slider">
                    <Swiper
                        className="Product-wrapper"
                        spaceBetween={30}
                        speed={800}
                        loop={false}
                        direction="horizontal"
                    >
                        {ProductSlides.map((ProductSlide, i) => {
                            return (
                                <SwiperSlide
                                    className="swiper-slide swiper-slide__wrapper"
                                    key={i}
                                >
                                    <div className="Product-wrapper__item">
                                        <a href="#">
                                            <div className="Product-wrapper__item-image">
                                                <div className="image-BestPrice">
                                                    <button>Лучшая цена</button>
                                                </div>

                                                <div className="image-BgImage">
                                                    <img
                                                        src={
                                                            ProductSlide.ImgProduct
                                                        }
                                                    />
                                                </div>

                                                <div className="image-discount">
                                                    <button>
                                                        {ProductSlide.discount}
                                                    </button>
                                                </div>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="Product-wrapper__item-ticket">
                                        <div className="ticket-price">
                                            <h1 className="ticket-price__h1">
                                                {ProductSlide.price}
                                            </h1>
                                            <h1 className="ticket-price__h2">
                                                {ProductSlide.OldPrice}
                                            </h1>
                                        </div>

                                        <div className="ticket-name">
                                            <h1>{ProductSlide.Name}</h1>
                                        </div>

                                        <div className="ticket-starReating">
                                            <img
                                                src={ProductSlide.ImgStar}
                                                width="100%"
                                            />
                                            <img
                                                src={ProductSlide.ImgStar}
                                                width="100%"
                                            />
                                            <img
                                                src={ProductSlide.ImgStar}
                                                width="100%"
                                            />
                                            <img
                                                src={ProductSlide.ImgStar}
                                                width="100%"
                                            />
                                            <img
                                                src={ProductSlide.ImgStar}
                                                width="100%"
                                            />
                                        </div>

                                        <div className="ticket-Cart">
                                            <form action="#">
                                                <button className="ticket-Cart__Buy">
                                                    <img
                                                        src={CartImg}
                                                        width="15%"
                                                    />
                                                    <p>В корзину</p>
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
