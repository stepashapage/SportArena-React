import "../SliderGameSection/SliderGameSection.scss";
import { enterainmentFood } from "../../../helpers/ProductsList";

export default function SliderGameSection3() {
    return (
        <section class="section-4 section">
            <div class="section4-container section-container">
                <div class="section4-container__wrapper">
                    {enterainmentFood.map((item, i) => {
                        return (
                            <div class="wrapper-enterainment__food">
                                <div class="wrapper-enterainment__food-img">
                                    <img src={item.img} width="100%" />
                                </div>

                                <div class="wrapper-enterainment__food-text">
                                    <h1>{item.title}</h1>
                                </div>

                                <div class="element__grid-container_svg">
                                    <img src={item.Nextimg} />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
