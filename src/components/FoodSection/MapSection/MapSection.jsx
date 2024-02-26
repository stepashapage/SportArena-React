import { YMaps, Map } from "@pbe/react-yandex-maps";
import "./MapSection.scss";

export default function MapSection() {
    return (
        <section className="section">
            <div className="section6-container">
                <YMaps className="section-container__Map">
                    <div className="section-container Product-header Map-header">
                        <h1>Местоположение наших магазинов</h1>
                    </div>

                    <Map
                        defaultState={{
                            center: [46.35513944139531, 48.073751633088044],
                            zoom: 17,
                        }}
                        className="map"
                    ></Map>
                </YMaps>
            </div>
        </section>
    );
}
