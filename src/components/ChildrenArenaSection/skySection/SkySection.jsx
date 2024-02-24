import "./SkySection.scss";

import imgSky1 from "../../../img/img_ChildArena/2-main/section-2/Main/i-PhotoRoom 1.svg";
import imgSky2 from "../../../img/img_ChildArena/2-main/section-2/Main/1-PhotoRoom 1.svg";
import imgNext from "../../../img/img_ChildArena/2-main/section-2/Next svg.svg";

const SkyItems = [
    {
        title: "Небо",
        desc: "Спортивно-развлекательный центр",
        img: imgSky1,
        Nextimg: imgNext,
    },
    {
        title: "Небо",
        desc: "Спортивно-развлекательный центр",
        img: imgSky2,
        Nextimg: imgNext,
    },
    {
        title: "Небо",
        desc: "Спортивно-развлекательный центр",
        img: "",
        Nextimg: imgNext,
    },
    {
        title: "Небо",
        desc: "Спортивно-развлекательный центр",
        img: "",
        Nextimg: imgNext,
    },
    {
        title: "Небо",
        desc: "Спортивно-развлекательный центр",
        img: "",
        Nextimg: imgNext,
    },
];

export default function SkySection() {
    return (
        <section className="section-2 section">
            <div className="SkyContainer-container">
                <div className="section2-container__wrapper">
                    <div className="wrapper-element">
                        <div className="wrapper-element__grid1">
                            {SkyItems.filter((item, index) => index < 2).map(
                                (SkyItem, i) => {
                                    return (
                                        <div
                                            className="element__grid-SkyContainer"
                                            key={i}
                                        >
                                            <div className="element__grid-SkyContainer_layer">
                                                <div className="element__grid-SkyContainer_layer-text">
                                                    <div className="layer-h1">
                                                        <h1>{SkyItem.title}</h1>
                                                    </div>
                                                    <div className="layer-p">
                                                        <p>{SkyItem.desc}</p>
                                                    </div>
                                                </div>
                                                <div className="layer-img">
                                                    <img
                                                        src={SkyItem.img}
                                                        width="100%"
                                                        height="300"
                                                    />
                                                </div>
                                            </div>

                                            <div className="element__grid-SkyContainer_svg">
                                                <img
                                                    src={SkyItem.Nextimg}
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    );
                                }
                            )}
                        </div>

                        <div className="wrapper-element__grid2">
                            {SkyItems.filter((item, index) => index < 3).map(
                                (SkyItem, i) => {
                                    return (
                                        <div
                                            className="element__grid-SkyContainer2"
                                            key={i}
                                        >
                                            <div className="element__grid-SkyContainer2_layer">
                                                <div className="element__grid-SkyContainer_layer-text">
                                                    <div className="layer-h1">
                                                        <h1>{SkyItem.title}</h1>
                                                    </div>
                                                    <div className="layer-p">
                                                        <p>{SkyItem.desc}</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="element__grid-SkyContainer_svg">
                                                <img
                                                    src={SkyItem.Nextimg}
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    );
                                }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
