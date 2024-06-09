import Navbar from "../../components/Navbar";
import "./Jazz_Swing.css"
import Carousel from 'react-bootstrap/Carousel';

const Jazz_Swing = () => {
    return (
        <>
            <Navbar />

            <main className="mainjssw">
                <h1 className="jsswCim">Swing stílus</h1>
                <div className="jsswLeiras">
                    <p>Swing stílus leírása</p>
                    <p>A swing zene az 1920-as évek és az 1930-as évek közötti időszakban jött létre az Egyesült Államokban. Ez a jazz stílusú zene az afroamerikai zenetradíciók és az amerikai popkultúra hatásait ötvözi, és lendületes ritmusokra, élénk hangszerelésre és improvizatív szólamokra épül.</p>
                </div>
                <h1 className="jsswCim">Képviselőik</h1>
                <div className="jsswZenekarszekcio">
                    <div className="jsswBaloszlop">
                        <div className="jsswCsikok">
                            <p className="jsswIkonKor"><img src="/duke.png" alt="" className="jsswIkon" /></p>
                            <p className="jsswZNev">Duke Ellington</p>
                            <p className="jsswZaszloFo"><img src="/usaFlag.png" alt="" className="jsswZaszlo" /></p>
                            <p className="jsswEvszam">192X</p>
                        </div>
                        <div className="jsswCsikok">
                            <p className="jsswIkonKor"><img src="/basie.png" alt="" className="jsswIkon" /></p>
                            <p className="jsswZNev">Count Basie</p>
                            <p className="jsswZaszloFo"><img src="/usaFlag.png" alt="" className="jsswZaszlo" /></p>
                            <p className="jsswEvszam">1926</p>
                        </div>
                    </div>
                    <div className="jsswJobboszlop">
                        <div className="jsswCsikok">
                            <p className="jsswIkonKor"><img src="/goodm.png" alt="" className="jsswIkon" /></p>
                            <p className="jsswZNev">Benny Goodman</p>
                            <p className="jsswZaszloFo"><img src="/usaFlag.png" alt="" className="jsswZaszlo" /></p>
                            <p className="jsswEvszam">1922</p>
                        </div>
                        <div className="jsswCsikok">
                            <p className="jsswIkonKor"><img src="/miller.png" alt="" className="jsswIkon" /></p>
                            <p className="jsswZNev">Glenn Miller</p>
                            <p className="jsswZaszloFo"><img src="/usaFlag.png" alt="" className="jsswZaszlo" /></p>
                            <p className="jsswEvszam">1921</p>
                        </div>
                    </div>
                </div>
                <h1 className="jsswCim">Koncert képek</h1>
                <p className="jsswCarouselalap">
                    <Carousel className="jsswCarousel">
                        <Carousel.Item >
                            <img className="jsswCarouselKep" src="/jsswcar1.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img className="jsswCarouselKep" src="/jsswcar2.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="jsswCarouselKep" src="/jsswcar3.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img  className="jsswCarouselKep" src="/jsswcar4.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img className="jsswCarouselKep" src="/jsswcar5.png" alt="" />
                        </Carousel.Item>

                    </Carousel>
                </p>

            </main>
        </>
    )
}

export default Jazz_Swing