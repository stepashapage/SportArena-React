import AcademySection from "../../components/HomeSections/AcademySection/AcademySection";
import EventSection from "../../components/HomeSections/EventSection/EventSection";
import NewsSection from "../../components/HomeSections/NewsSection/NewsSection";
import PosterSection from "../../components/HomeSections/PosterSection/PosterSection";

export default function Home() {
    return (
        <main>
            <EventSection />
            <PosterSection />
            <NewsSection />
            <AcademySection />
        </main>
    );
}
