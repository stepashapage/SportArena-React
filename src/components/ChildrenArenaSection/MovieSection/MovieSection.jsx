import MovieImg from "../../../img/img_ChildArena/2-main/section-1/image 1.svg";
import "./MovieSection.scss";

export default function MovieSection() {
    return (
        <>
            <section className="section-1 section">
                <div className="section1-container section-container">
                    <div className="section1-container__movie">
                        <div className="movie-video">
                            <img className="movie-img" src={MovieImg} />
                        </div>

                        <div className="movie-container1">
                            <div className="movie-container__menu1">
                                <div className="menu-flex__Logo1">
                                    <h1>
                                        Vivi <strong>Fuel</strong>
                                    </h1>
                                </div>

                                <div className="menu-ivents1">
                                    <h1>
                                        Пространство спорта, отдыха и
                                        развлечений
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
