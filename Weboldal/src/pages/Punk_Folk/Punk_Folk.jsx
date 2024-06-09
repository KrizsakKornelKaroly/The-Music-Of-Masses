import Navbar from "../../components/Navbar";
import "./Punk_Folk.css"
import Carousel from 'react-bootstrap/Carousel';

const Punk_Folk = () => {
    return (
        <>
            <Navbar />

            <main className="mainpf">
                <h1 className="pfCim">Folk punk stílus</h1>
                <div className="pfLeiras">
                    <p>Folk punk stílus leírása</p>
                    <p>A Folk Punk egy izgalmas és sokoldalú zenei műfaj, amely a punk rock és a folkzene széles skálájából merít inspirációt. A stílusban gyakran felbukkanó hagyományos népi hangszerek, mint például a mandolin, a hegedű vagy a banjo, gazdag hangzást és autentikus érzést kölcsönöznek a zenének. Emellett a Folk Punk a témaválasztásban is gyakran támaszkodik a folkzenei hagyományokra, énekszövegeiben gyakran előfordulnak társadalmi vagy politikai üzenetek, illetve olyan témák, mint a vándorlás, a hazaszeretet vagy a munkásmozgalmak.</p>
                </div>

                <h1 className="pfCim">Képviselőik</h1>
                <div className="pfZenekarszekcio">
                    <div className="pfBaloszlop">
                        <h3 className="pfKulfkepvis">Külföldi zenekarok</h3>
                        <div className="pfCsikok">
                            <p className="pfIkonKor"><img src="/dropkickLogo.png" alt="" className="pfIkon" /></p>
                            <p className="pfZNev">Dropkick Murphy</p>
                            <p className="pfZaszloFo"><img src="/usaFlag.png" alt="" className="pfZaszlo" /></p>
                            <p className="pfEvszam">1996</p>
                        </div>
                        <div className="pfCsikok">
                            <p className="pfIkonKor"><img src="/flomo.png" alt="" className="pfIkon" /></p>
                            <p className="pfZNev">Flogging Molly</p>
                            <p className="pfZaszloFo"><img src="/usaFlag.png" alt="" className="pfZaszlo" /></p>
                            <p className="pfEvszam">1997</p>
                        </div>
                        <div className="pfCsikok">
                            <p className="pfIkonKor"><img src="/gogolBordello.png" alt="" className="pfIkon" /></p>
                            <p className="pfZNev">Gogol Bordello</p>
                            <p className="pfZaszloFo"><img src="/usaFlag.png" alt="" className="pfZaszlo" /></p>
                            <p className="pfEvszam">1999</p>
                        </div>
                        <div className="pfCsikok">
                            <p className="pfIkonKor"><img src="/realmc.png" alt="" className="pfIkon" /></p>
                            <p className="pfZNev">The Real McKenzies</p>
                            <p className="pfZaszloFo"><img src="/kanadaFlag.png" alt="" className="pfZaszlo" /></p>
                            <p className="pfEvszam">1992</p>
                        </div>
                    </div>
                    <div className="pfJobboszlop">
                        <h3 className="pfBelfkepvis">Belföldi zenekarok</h3>
                        <div className="pfCsikok">
                            <p className="pfIkonKor"><img src="/pandr.png" alt="" className="pfIkon" /></p>
                            <p className="pfZNev">Paddy and the Rats</p>
                            <p className="pfZaszloFo"><img src="/magyarFlag.png" alt="" className="pfZaszlo" /></p>
                            <p className="pfEvszam">2008</p>
                        </div>
                        <div className="pfCsikok">
                            <p className="pfIkonKor"><img src="/silvershine.png" alt="" className="pfIkon" /></p>
                            <p className="pfZNev">The Silver Shine</p>
                            <p className="pfZaszloFo"><img src="/magyarFlag.png" alt="" className="pfZaszlo" /></p>
                            <p className="pfEvszam">2004</p>
                        </div>
                        <div className="pfCsikok">
                            <p className="pfIkonKor"><img src="/matilda.png" alt="" className="pfIkon" /></p>
                            <p className="pfZNev">Matilda</p>
                            <p className="pfZaszloFo"><img src="/magyarFlag.png" alt="" className="pfZaszlo" /></p>
                            <p className="pfEvszam">2013</p>
                        </div>
                        <div className="pfCsikok">
                            <p className="pfIkonKor"><img src="/csik.png" alt="" className="pfIkon" /></p>
                            <p className="pfZNev">Csík Zenekar</p>
                            <p className="pfZaszloFo"><img src="/magyarFlag.png" alt="" className="pfZaszlo" /></p>
                            <p className="pfEvszam">2005</p>
                        </div>
                    </div>
                </div>
                <h1 className="pfCim">Koncertképek</h1>
                <p className="pfCarouselalap">
                    <Carousel className="pfCarousel">
                        <Carousel.Item >
                            <img className="pfCarouselKep" src="/pfcar1.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img className="pfCarouselKep" src="/pfcar2.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="pfCarouselKep" src="/pfcar3.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img  className="pfCarouselKep" src="/pfcar4.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img className="pfCarouselKep" src="/pfcar5.png" alt="" />
                        </Carousel.Item>

                    </Carousel>
                </p>

            </main>
        </>
    )
}

export default Punk_Folk