import EnterainmentSection from "../../components/ChildrenArenaSection/EnterainmentSection/EnterainmentSection";
import EnterainmentSection2 from "../../components/ChildrenArenaSection/EnterainmentSection2/EnterainmentSection2";
import EnterainmentSection3 from "../../components/ChildrenArenaSection/EnterainmentSection3/EnterainmentSection3";
import MovieSection from "../../components/ChildrenArenaSection/MovieSection/MovieSection";
import SliderGameSection from "../../components/ChildrenArenaSection/SliderGameSection/SliderGameSection";
import SliderGameSection2 from "../../components/ChildrenArenaSection/SliderGameSection2/SliderGameSection2";
import SliderGameSection3 from "../../components/ChildrenArenaSection/SliderGameSection3/SliderGameSection3";
import SkySection from "../../components/ChildrenArenaSection/skySection/SkySection";

export default function ChildArena() {
    return (
        <>
            <MovieSection />
            <SkySection />
            <EnterainmentSection />
            <SliderGameSection />
            <EnterainmentSection2 />
            <SliderGameSection2 />
            <EnterainmentSection3 />
            <SliderGameSection3 />
        </>
    );
}
