import "./CategorySection.scss";

import CatImg1 from "../../../img/img_FoodForArena/2-main/section-4/Main/1.svg";
import CatImg2 from "../../../img/img_FoodForArena/2-main/section-4/Main/2.svg";
import CatImg3 from "../../../img/img_FoodForArena/2-main/section-4/Main/3.svg";
import CatImg4 from "../../../img/img_FoodForArena/2-main/section-4/Main/4.svg";
import CatImg5 from "../../../img/img_FoodForArena/2-main/section-4/Main/5.svg";

const CategoryPosts = [
    {
        img: CatImg1,
        Title: "Спортивное питание",
    },
    {
        img: CatImg2,
        Title: "Витамины и минералы",
    },
    {
        img: CatImg3,
        Title: "Здоровое питание",
    },
    {
        img: CatImg4,
        Title: "Красота и долголетие",
    },
    {
        img: CatImg5,
        Title: "Аксессуары и экипировка",
    },
];

export default function CategorySectiton() {
    return (
        <section className="section">
            <div className="section-container">
                <div className="section-container__cat">
                    <div className="Product-header cat-header">
                        <h1>Популярные категории</h1>
                    </div>

                    <div className="cat-container">
                        {CategoryPosts.map((CategoryPost, i) => {
                            return (
                                <div
                                    className="cat-container__template"
                                    key={i}
                                >
                                    <div className="cat-container__template-layer">
                                        <div className="cat-container__template-layer_img">
                                            <img
                                                src={CategoryPost.img}
                                                width="100%"
                                            />
                                        </div>
                                        <div className="cat-container__template-layer_text">
                                            <h1>{CategoryPost.Title}</h1>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
