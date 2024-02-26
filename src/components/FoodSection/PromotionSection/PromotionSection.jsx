import "./PromotionSection.scss";

import PromotionImg1 from "../../../img/img_FoodForArena/2-main/section-3/Main/7bemo3jtz6s07fq3fhee13ropwd5vcvo 1.svg";
import PromotionImg2 from "../../../img/img_FoodForArena/2-main/section-3/Main/nziewqq8jwp6ejk7peb13d2d03rzypso 1.svg";
import PromotionImg3 from "../../../img/img_FoodForArena/2-main/section-3/Main/ybp5jhenk75hzotv9rtmcuv6ib6wvf77 1.svg";
import PromotionImg4 from "../../../img/img_FoodForArena/2-main/section-3/Main/image 2.svg";
import PromotionImg5 from "../../../img/img_FoodForArena/2-main/section-3/Main/image 3.svg";
import PromotionImg6 from "../../../img/img_FoodForArena/2-main/section-3/Main/image 4.svg";
import PromotionImg7 from "../../../img/img_FoodForArena/2-main/section-3/Main/image 5.svg";

const PromotionElements = [
    { img: PromotionImg1 },
    { img: PromotionImg2 },
    { img: PromotionImg3 },
    { img: PromotionImg4 },
    { img: PromotionImg5 },
    { img: PromotionImg6 },
    { img: PromotionImg7 },
];

export default function PromotionSection() {
    return (
        <section className="seciton">
            <div className="section-container">
                <div className="section-container__promotion">
                    <div className="section-container__promotion-grid1">
                        {PromotionElements.filter(
                            (item, index) => index < 3
                        ).map((PromotionElement, i) => {
                            return (
                                <div className="grid-layear" key={i}>
                                    <img src={PromotionElement.img} />
                                </div>
                            );
                        })}
                    </div>

                    <div className="section-container__promotion-grid2">
                        {PromotionElements.filter(
                            (item, index) => index > 2
                        ).map((PromotionElement, i) => {
                            return (
                                <div className="grid-layear" key={i}>
                                    <img src={PromotionElement.img} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
