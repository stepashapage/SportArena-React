import "../MainInformation/MainInformation.scss";
import { boxShops } from "../../../helpers/ProductsList";

export default function PageContent() {
    return (
        <section className="sectionShop section--PageContent">
            <div className="PageContent__container">
                {boxShops.map((boxShop, i) => {
                    return (
                        <div className={`box ${boxShop.index}`} key={i}>
                            <div className="box__image">
                                <img src={boxShop.img} alt={boxShop.title} />
                            </div>
                            <div className="box__content">
                                <h1 className="box__content-title">
                                    {boxShop.title}
                                </h1>
                                <p className="box__content-desc">
                                    {boxShop.desc}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
