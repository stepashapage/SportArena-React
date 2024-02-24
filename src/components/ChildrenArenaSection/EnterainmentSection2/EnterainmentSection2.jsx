import "../EnterainmentSection/EnterainmentSection.scss";
import img2 from "../../../img/img_ChildArena/2-main/section-3/Main/image 2-1.svg";

export default function EnterainmentSection2() {
    return (
        <>
            <section class="section">
                <div class="section-container section3-container">
                    <div class="section3-container__enterainment-reverse">
                        <div class="container__enterainment-image">
                            <img src={img2} width="100%" />
                        </div>

                        <div class="container__enterainment-info">
                            <div class="container__enterainment-info_Logo">
                                <h1>
                                    Vivi <strong>Fuel</strong>
                                </h1>
                            </div>
                            <div class="container__enterainment-info_h1">
                                <h1>Спортивно-развлекательный центр</h1>
                            </div>
                            <div class="container__enterainment-info_text">
                                <p>
                                    Самая большая батутная арена в Московском!
                                    <br />В центре НЕБО вы найдете десятки
                                    активных развлечений для детей и взрослых.
                                    Получите заряд энергии и позитивных эмоций
                                    для всей семьи. Отличное место, чтобы
                                    отметить день рождения.
                                </p>
                            </div>
                            <div class="container__enterainment-info_button">
                                <button class="container__enterainment-info_button1">
                                    Подробнее
                                </button>

                                <button class="container__enterainment-info_button2">
                                    Построить маршрут
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
