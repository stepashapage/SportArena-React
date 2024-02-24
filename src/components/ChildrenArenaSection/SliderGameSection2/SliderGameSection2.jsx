import "../SliderGameSection/SliderGameSection.scss";
import { ChildArenaGame } from "../../../helpers/ProductsList";

export default function SliderGameSection2() {
    return (
        <section class="section">
            <div class="section4-container section-container">
                <div class="section4-container__scroll">
                    {ChildArenaGame.filter((item, index) => index > 5).map(
                        (item, i) => {
                            return (
                                <div
                                    class="container__scroll-enterainment"
                                    key={i}
                                >
                                    <div class="enterainment-image">
                                        <img src={item.img} alt="" />
                                    </div>

                                    <div class="enterainment-name">
                                        <h1>{item.Name}</h1>
                                    </div>
                                </div>
                            );
                        }
                    )}
                </div>
            </div>
        </section>
    );
}
