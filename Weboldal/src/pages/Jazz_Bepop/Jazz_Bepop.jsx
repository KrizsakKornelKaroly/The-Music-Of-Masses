import Navbar from "../../components/Navbar";
import "./Jazz_Bepop.css"
import Carousel from 'react-bootstrap/Carousel';

const Jazz_Bepop = () => {
    return (
        <>
            <Navbar />

            <main className="mainjbep">
                <h1 className="jbepCim">Bepop stílus</h1>
                <div className="jbepLeiras">
                    <p>Bepop stílus leírása</p>
                    <p>A bepop vagy bebop az 1940-es években az amerikai jazz egyik irányzataként fejlődött ki, főként New York városban. Egy új hangzásvilágot hozott létre, ahol a hangsúly a szólózásra és az improvizációra helyeződött. Gyors tempójú, összetett dallamokat és akkordmeneteket alkalmazott.</p>
                </div>
                <h1 className="jbepCim">Képviselőik</h1>
                <div className="jbepZenekarszekcio">
                    <div className="jbepBaloszlop">
                        <div className="jbepCsikok">
                            <p className="jbepIkonKor"><img src="/charl.png" alt="" className="jbepIkon" /></p>
                            <p className="jbepZNev">Charlie Parker</p>
                            <p className="jbepZaszloFo"><img src="/usaFlag.png" alt="" className="jbepZaszlo" /></p>
                            <p className="jbepEvszam">1938</p>
                        </div>
                        <div className="jbepCsikok">
                            <p className="jbepIkonKor"><img src="/dizzy.png" alt="" className="jbepIkon" /></p>
                            <p className="jbepZNev">Dizzy Gillespie</p>
                            <p className="jbepZaszloFo"><img src="/usaFlag.png" alt="" className="jbepZaszlo" /></p>
                            <p className="jbepEvszam">1937</p>
                        </div>
                    </div>
                    <div className="jbepJobboszlop">
                        <div className="jbepCsikok">
                            <p className="jbepIkonKor"><img src="/thelo.png" alt="" className="jbepIkon" /></p>
                            <p className="jbepZNev">Thelonious Monk</p>
                            <p className="jbepZaszloFo"><img src="/usaFlag.png" alt="" className="jbepZaszlo" /></p>
                            <p className="jbepEvszam">194X</p>
                        </div>
                        <div className="jbepCsikok">
                            <p className="jbepIkonKor"><img src="/bud.png" alt="" className="jbepIkon" /></p>
                            <p className="jbepZNev">Bud Powell</p>
                            <p className="jbepZaszloFo"><img src="/usaFlag.png" alt="" className="jbepZaszlo" /></p>
                            <p className="jbepEvszam">1943</p>
                        </div>
                    </div>
                </div>
                <h1 className="jbepCim">Koncert képek</h1>
                <p className="jbepCarouselalap">
                    <Carousel className="jbepCarousel">
                        <Carousel.Item >
                            <img className="jbepCarouselKep" src="/jbepcar1.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img className="jbepCarouselKep" src="/jbepcar2.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="jbepCarouselKep" src="/jbepcar3.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img  className="jbepCarouselKep" src="/jbepcar4.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img className="jbepCarouselKep" src="/jbepcar5.png" alt="" />
                        </Carousel.Item>

                    </Carousel>
                </p>

            </main>
        </>
    )
}

export default Jazz_Bepop