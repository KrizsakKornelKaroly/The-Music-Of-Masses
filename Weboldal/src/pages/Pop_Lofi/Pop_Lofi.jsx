import Navbar from "../../components/Navbar";
import "./Pop_Lofi.css"
import Carousel from 'react-bootstrap/Carousel';

const Pop_Lofi = () => {
    return (
        <>
            <Navbar />

            <main className="mainpoplo">
                <h1 className="poploCim">Lo-fi stílus</h1>
                <div className="poploLeiras">
                    <p>Lo-fi stílus leírása</p>
                    <p>A lo-fi zenei stílus eredete az 1980-as években keresendő, amikor az alacsony költségvetésű felvételek és az otthoni stúdiótechnika egyre elterjedtebbé vált. A lo-fi lényege az, hogy a hangzásban felvállalja a zajos, kopott, gyakran amatőr jellegű hangzást, ami sok esetben egyfajta hangulatot vagy nosztalgiát kelt. A stílus az alternatív és független zenei körökben kezdett terjedni, majd később más műfajokban is megjelent, például a hip-hopban és az elektronikus zenében is. A lo-fi gyakran emelkedik ki a minimalista hangzásával és az érzelmekre való fókuszálással.</p>
                </div>
                <h1 className="poploCim">Képviselőik</h1>
                <div className="poploZenekarszekcio">
                    <div className="poploBaloszlop">
                        <div className="poploCsikok">
                            <p className="poploIkonKor"><img src="/nujabes.png" alt="" className="poploIkon" /></p>
                            <p className="poploZNev">Nujabes</p>
                            <p className="poploZaszloFo"><img src="/japFlag.png" alt="" className="poploZaszlo" /></p>
                            <p className="poploEvszam">199X</p>
                        </div>
                        <div className="poploCsikok">
                            <p className="poploIkonKor"><img src="/jdil.png" alt="" className="poploIkon" /></p>
                            <p className="poploZNev">J Dilla</p>
                            <p className="poploZaszloFo"><img src="/usaFlag.png" alt="" className="poploZaszlo" /></p>
                            <p className="poploEvszam">199X</p>
                        </div>
                    </div>
                    <div className="poploJobboszlop">
                        <div className="poploCsikok">
                            <p className="poploIkonKor"><img src="/dj.png" alt="" className="poploIkon" /></p>
                            <p className="poploZNev">DJ Shadow</p>
                            <p className="poploZaszloFo"><img src="/usaFlag.png" alt="" className="poploZaszlo" /></p>
                            <p className="poploEvszam">200X</p>
                        </div>
                        <div className="poploCsikok">
                            <p className="poploIkonKor"><img src="/clairo.png" alt="" className="poploIkon" /></p>
                            <p className="poploZNev">Clairo</p>
                            <p className="poploZaszloFo"><img src="/usaFlag.png" alt="" className="poploZaszlo" /></p>
                            <p className="poploEvszam">201X</p>
                        </div>
                    </div>
                </div>
                <h1 className="poploCim">Galéria</h1>
                <p className="poploCarouselalap">
                    <Carousel className="poploCarousel">
                        <Carousel.Item >
                            <img className="poploCarouselKep" src="/poplocar1.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img className="poploCarouselKep" src="/poplocar2.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="poploCarouselKep" src="/poplocar3.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img  className="poploCarouselKep" src="/poplocar4.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img className="poploCarouselKep" src="/poplocar5.png" alt="" />
                        </Carousel.Item>

                    </Carousel>
                </p>

            </main>
        </>
    )
}

export default Pop_Lofi