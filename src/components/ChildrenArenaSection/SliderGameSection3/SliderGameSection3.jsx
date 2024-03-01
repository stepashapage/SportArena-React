import "../SliderGameSection/SliderGameSection.scss";
import { enterainmentFood } from "../../../helpers/ProductsList";
import { Link } from "react-router-dom";

export default function SliderGameSection3() {
    return (
        <section class="section-4 section">
            <div class="section4-container section-container">
                <div class="section4-container__wrapper">
                    {enterainmentFood.map((item, i) => {
                        return (
                            <div class="wrapper-enterainment__food">
                                <Link
                                    to={"/Cafe"}
                                    class="wrapper-enterainment__food-img"
                                >
                                    <img src={item.img} width="100%" />
                                </Link>

                                <Link
                                    to={"/Cafe"}
                                    class="wrapper-enterainment__food-text"
                                >
                                    <h1>{item.title}</h1>
                                </Link>

                                <Link
                                    to={"/Cafe"}
                                    class="element__grid-container_svg"
                                >
                                    <img src={item.Nextimg} />
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
