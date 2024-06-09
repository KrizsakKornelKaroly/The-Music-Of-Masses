import Navbar from "../../components/Navbar";
import "./Jazz_Smooth.css"
import Carousel from 'react-bootstrap/Carousel';

const Jazz_Smooth = () => {
    return (
        <>
            <Navbar />

            <main className="mainjsmo">
                <h1 className="jsmoCim">Smooth Jazz stílus</h1>
                <div className="jsmoLeiras">
                    <p>Smooth Jazz stílus leírása</p>
                    <p>A smooth jazz a jazz egyik műfaja, amely a 20. század második felében alakult ki az Egyesült Államokban. Jellemzője a könnyed, lágy hangzás, a hangszerelésben és a ritmusban is, gyakran keveredve más stílusokkal, például pop- vagy R&B-elemekkel.</p>
                </div>
                <h1 className="jsmoCim">Képviselőik</h1>
                <div className="jsmoZenekarszekcio">
                    <div className="jsmoBaloszlop">
                        <div className="jsmoCsikok">
                            <p className="jsmoIkonKor"><img src="/kennyg.png" alt="" className="jsmoIkon" /></p>
                            <p className="jsmoZNev">Kenny G</p>
                            <p className="jsmoZaszloFo"><img src="/usaFlag.png" alt="" className="jsmoZaszlo" /></p>
                            <p className="jsmoEvszam">1982</p>
                        </div>
                        <div className="jsmoCsikok">
                            <p className="jsmoIkonKor"><img src="/sanborn.png" alt="" className="jsmoIkon" /></p>
                            <p className="jsmoZNev">David Sanborn</p>
                            <p className="jsmoZaszloFo"><img src="/usaFlag.png" alt="" className="jsmoZaszlo" /></p>
                            <p className="jsmoEvszam">1974</p>
                        </div>
                    </div>
                    <div className="jsmoJobboszlop">
                        <div className="jsmoCsikok">
                            <p className="jsmoIkonKor"><img src="/washington.png" alt="" className="jsmoIkon" /></p>
                            <p className="jsmoZNev">Grover Washington Jr.</p>
                            <p className="jsmoZaszloFo"><img src="/usaFlag.png" alt="" className="jsmoZaszlo" /></p>
                            <p className="jsmoEvszam">1976</p>
                        </div>
                        <div className="jsmoCsikok">
                            <p className="jsmoIkonKor"><img src="/benson.png" alt="" className="jsmoIkon" /></p>
                            <p className="jsmoZNev">George Benson</p>
                            <p className="jsmoZaszloFo"><img src="/usaFlag.png" alt="" className="jsmoZaszlo" /></p>
                            <p className="jsmoEvszam">1969</p>
                        </div>
                    </div>
                </div>
                <h1 className="jsmoCim">Koncert képek</h1>
                <p className="jsmoCarouselalap">
                    <Carousel className="jsmoCarousel">
                        <Carousel.Item >
                            <img className="jsmoCarouselKep" src="/jsmocar1.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img className="jsmoCarouselKep" src="/jsmocar2.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="jsmoCarouselKep" src="/jsmocar3.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img  className="jsmoCarouselKep" src="/jsmocar4.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img className="jsmoCarouselKep" src="/jsmocar5.png" alt="" />
                        </Carousel.Item>

                    </Carousel>
                </p>

            </main>
        </>
    )
}

export default Jazz_Smooth