import Navbar from "../../components/Navbar";
import "./Pop_Schlager.css"
import Carousel from 'react-bootstrap/Carousel';

const Pop_Schlager = () => {
    return (
        <>
            <Navbar />

            <main className="mainpops">
                <h1 className="popsCim">Schlager pop stílus</h1>
                <div className="popsLeiras">
                    <p>Schlager pop stílus leírása</p>
                    <p>A schlager pop eredete Németországban és Ausztriában keresendő, és a 20. század elején alakult ki. Jellemzője a könnyed dallamvilág, egyszerű szerkezet, és gyakran érzelmes, könnyed szövegvilág. A stílus gyakran összekapcsolódik a tánczenékkel, és népszerű a közösségi eseményeken, valamint a rádióban. A schlager popot általában könnyen emészthető és közvetlenül érthető szövegekkel, valamint könnyed hangzással azonosítják.</p>
                </div>
                <h1 className="popsCim">Képviselőik</h1>
                <div className="popsZenekarszekcio">
                    <div className="popsBaloszlop">
                        <div className="popsCsikok">
                            <p className="popsIkonKor"><img src="/kaiser.png" alt="" className="popsIkon" /></p>
                            <p className="popsZNev">Roland Kaiser</p>
                            <p className="popsZaszloFo"><img src="/nemetFlag.png" alt="" className="popsZaszlo" /></p>
                            <p className="popsEvszam">1974</p>
                        </div>
                        <div className="popsCsikok">
                            <p className="popsIkonKor"><img src="/andrea.png" alt="" className="popsIkon" /></p>
                            <p className="popsZNev">Andrea Berg</p>
                            <p className="popsZaszloFo"><img src="/nemetFlag.png" alt="" className="popsZaszlo" /></p>
                            <p className="popsEvszam">1992</p>
                        </div>
                    </div>
                    <div className="popsJobboszlop">
                        <div className="popsCsikok">
                            <p className="popsIkonKor"><img src="/helene.png" alt="" className="popsIkon" /></p>
                            <p className="popsZNev">Helene Fischer</p>
                            <p className="popsZaszloFo"><img src="/nemetFlag.png" alt="" className="popsZaszlo" /></p>
                            <p className="popsEvszam">2005</p>
                        </div>
                        <div className="popsCsikok">
                            <p className="popsIkonKor"><img src="/hansi.png" alt="" className="popsIkon" /></p>
                            <p className="popsZNev">Hansi Hinterseer</p>
                            <p className="popsZaszloFo"><img src="/austriaFlag.png" alt="" className="popsZaszlo" /></p>
                            <p className="popsEvszam">1994</p>
                        </div>
                    </div>
                </div>
                <h1 className="popsCim">Koncertképek</h1>
                <p className="popsCarouselalap">
                    <Carousel className="popsCarousel">
                        <Carousel.Item >
                            <img className="popsCarouselKep" src="/popscar1.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img className="popsCarouselKep" src="/popscar2.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="popsCarouselKep" src="/popscar3.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img  className="popsCarouselKep" src="/popscar4.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img className="popsCarouselKep" src="/popscar5.png" alt="" />
                        </Carousel.Item>

                    </Carousel>
                </p>

            </main>
        </>
    )
}

export default Pop_Schlager