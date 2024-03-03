import { useEffect } from "react";
import BlogSection from "../../components/FoodSection/BlogSection/BlogSection";
import CategorySectiton from "../../components/FoodSection/CategorySeciton/CategorySection";
import MapSection from "../../components/FoodSection/MapSection/MapSection";
import ProductSlide from "../../components/FoodSection/ProductSlide/ProductSlide";
import PromotionSection from "../../components/FoodSection/PromotionSection/PromotionSection";
import SwiperAddSection from "../../components/FoodSection/SwiperAddSection/SwiperAddSection";

export default function Food() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <SwiperAddSection />
            <ProductSlide>Лучшая цена</ProductSlide>
            <PromotionSection />
            <CategorySectiton />
            <ProductSlide>Популярное для вас</ProductSlide>
            <BlogSection />
            <ProductSlide>Рекомендуем</ProductSlide>
            <MapSection />
        </>
    );
}
