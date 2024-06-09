import Navbar from "../../components/Navbar";
import "./Kpop.css"
import Carousel from 'react-bootstrap/Carousel';

const Kpop = () => {
    return (
        <>
            <Navbar />

            <main className="mainkp">
                <h1 className="kpCim">K-pop stílus</h1>
                <div className="kpLeiras">
                    <p>K-pop stílus leírása</p>
                    <p>A K-pop vagy koreai popzene többek között elektronikus, hiphop, pop, rock és R&B alapokon nyugszik és különálló zenei műfajként tartják számon. A koreai popzene alapjai az 1920-as évek trot műfajára vezethetőek vissza, ezeket a dalokat a japán enkadalok befolyásolták.A koreai popzene alapjai az 1920-as évek trot műfajára vezethetőek vissza, ezeket a dalokat a japán enkadalok befolyásolták. A második világháborút követően elkezdett megnőni az amerikai kultúra befolyása Koreában, ami a populáris zenére is kihatott.</p>
                </div>

                <h1 className="kpCim">Képviselőik</h1>
                <div className="kpZenekarszekcio">
                    <div className="kpBaloszlop">
                        <div className="kpCsikok">
                            <p className="kpIkonKor"><img src="/bts.png" alt="" className="kpIkon" /></p>
                            <p className="kpZNev">BTS</p>
                            <p className="kpZaszloFo"><img src="/koreanFlag.png" alt="" className="kpZaszlo" /></p>
                            <p className="kpEvszam">2013</p>
                        </div>
                        <div className="kpCsikok">
                            <p className="kpIkonKor"><img src="/straykids.png" alt="" className="kpIkon" /></p>
                            <p className="kpZNev">Stray Kids</p>
                            <p className="kpZaszloFo"><img src="/koreanFlag.png" alt="" className="kpZaszlo" /></p>
                            <p className="kpEvszam">2018</p>
                        </div>
                        <div className="kpCsikok">
                            <p className="kpIkonKor"><img src="/seventeen.png" alt="" className="kpIkon" /></p>
                            <p className="kpZNev">Seventeen</p>
                            <p className="kpZaszloFo"><img src="/koreanFlag.png" alt="" className="kpZaszlo" /></p>
                            <p className="kpEvszam">2015</p>
                        </div>
                        <div className="kpCsikok">
                            <p className="kpIkonKor"><img src="/enhypen.png" alt="" className="kpIkon" /></p>
                            <p className="kpZNev">Enhypen</p>
                            <p className="kpZaszloFo"><img src="/koreanFlag.png" alt="" className="kpZaszlo" /></p>
                            <p className="kpEvszam">2020</p>
                        </div>
                    </div>
                    <div className="kpJobboszlop">
                        <div className="kpCsikok">
                            <p className="kpIkonKor"><img src="/tomxtog.png" alt="" className="kpIkon" /></p>
                            <p className="kpZNev">Tomorrow x Together</p>
                            <p className="kpZaszloFo"><img src="/koreanFlag.png" alt="" className="kpZaszlo" /></p>
                            <p className="kpEvszam">2019</p>
                        </div>
                        <div className="kpCsikok">
                            <p className="kpIkonKor"><img src="/shinee.png" alt="" className="kpIkon" /></p>
                            <p className="kpZNev">Shinee</p>
                            <p className="kpZaszloFo"><img src="/koreanFlag.png" alt="" className="kpZaszlo" /></p>
                            <p className="kpEvszam">2008</p>
                        </div>
                        <div className="kpCsikok">
                            <p className="kpIkonKor"><img src="/ateez.png" alt="" className="kpIkon" /></p>
                            <p className="kpZNev">Ateez</p>
                            <p className="kpZaszloFo"><img src="/koreanFlag.png" alt="" className="kpZaszlo" /></p>
                            <p className="kpEvszam">2018</p>
                        </div>
                        <div className="kpCsikok">
                            <p className="kpIkonKor"><img src="/twice.png" alt="" className="kpIkon" /></p>
                            <p className="kpZNev">Twice</p>
                            <p className="kpZaszloFo"><img src="/koreanFlag.png" alt="" className="kpZaszlo" /></p>
                            <p className="kpEvszam">2015</p>
                        </div>
                    </div>
                </div>
                <h1 className="kpCim">Koncertképek</h1>
                <p className="kpCarouselalap">
                    <Carousel className="kpCarousel">
                        <Carousel.Item >
                            <img className="kpCarouselKep" src="/kpcar1.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img className="kpCarouselKep" src="/kpcar2.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="kpCarouselKep" src="/kpcar3.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img  className="kpCarouselKep" src="/kpcar4.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img className="kpCarouselKep" src="/kpcar5.png" alt="" />
                        </Carousel.Item>

                    </Carousel>
                </p>

            </main>
        </>
    )
}

export default Kpop