import { Navigation, Pagination, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./SwiperAddSection.scss";

import img1 from "../../../img/img_FoodForArena/2-main/section-1/Main/0vp63d0uy6tapf0lrrjnkq9ru9wq8ipm 1.svg";
import img2 from "../../../img/img_FoodForArena/2-main/section-1/Main/2oxvp9q2m3crczwg2g33d5h099e0a8dr 1.svg";
import img3 from "../../../img/img_FoodForArena/2-main/section-1/Main/a3qws0jb9ir9pjlr7p3e67kw9rv4epq3 1.svg";
import img4 from "../../../img/img_FoodForArena/2-main/section-1/Main/image 1.svg";
import img5 from "../../../img/img_FoodForArena/2-main/section-1/Main/m88o72ppar3yv1bm5hns5kwac6ptibot 1.svg";
import img6 from "../../../img/img_FoodForArena/2-main/section-1/Main/mx2ewrkc9jq6ks60nh1qc0qauqz0ei1b 1.svg";
import img7 from "../../../img/img_FoodForArena/2-main/section-1/Main/r9nqgg01v8vehy3ranvmjfine8nqozbc 1.svg";

const SwiperAdd = [
    {
        img: img1,
    },
    {
        img: img2,
    },
    {
        img: img3,
    },
    {
        img: img4,
    },
    {
        img: img5,
    },
    {
        img: img6,
    },
    {
        img: img7,
    },
];

export default function SwiperAddSection() {
    return (
        <>
            <section className="section">
                <div className="sectionSwiperAdd-container">
                    <Swiper
                        modules={[Navigation, Pagination, A11y]}
                        className="swiperAdd"
                        direction="horizontal"
                        effect="cowerflow"
                        autoplay={{ delay: 1500 }}
                        slidesPerView={1}
                        loop={true}
                        navigation
                        keyboard={{
                            enabled: true,
                            onlyInViewport: true,
                            pageUpDown: true,
                        }}
                        mousewheel={{
                            sensitivity: 1,
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                    >
                        {SwiperAdd.map((item, i) => {
                            return (
                                <SwiperSlide className="swiper-slide" key={i}>
                                    <img
                                        src={item.img}
                                        className="swiper-slide_img"
                                    />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </section>
        </>
    );
}
