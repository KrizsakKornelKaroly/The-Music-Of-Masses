import Navbar from "../../components/Navbar";
import "./Metal_Power.css"
import Carousel from 'react-bootstrap/Carousel';

const Metal_Power = () => {
    return (
        <>
            <Navbar />

            <main className="mainhm">
                <h1 className="hmCim">A power metal</h1>
                <div className="hmLeiras">
                    <p>Leírás</p>
                    <p>A power metal a heavy metal zene egyik alfaja. A megnevezés vita tárgya lehet, mivel a power metal két különböző rokon stílusra utalhat: az egyik az észak-amerikai, a másik a főleg német és skandináv területen létrejött power metal. Az 1980-as évek elején kezdődött német Accept együttessel, akik új stílust hoztak létre a Judas Priest-szerű riffek, az AC/DC stílusú vokál és a német nép- és komolyzenéből vett elemekkel.</p>
                </div>

                <h1 className="hmCim">Képviselőik</h1>
                <div className="hmZenekarszekcio">
                    <div className="hmBaloszlop">
                        <div className="hmCsikok">
                            <p className="hmIkonKor"><img src="/sabatonLogo.png" alt="" className="hmIkon" /></p>
                            <p className="hmZNev">Sabaton</p>
                            <p className="hmZaszloFo"><img src="/svedFlag.png" alt="" className="hmZaszlo" /></p>
                            <p className="hmEvszam">1999</p>
                        </div>
                        <div className="hmCsikok">
                            <p className="hmIkonKor"><img src="/pwLogo.jpg" alt="" className="hmIkon" /></p>
                            <p className="hmZNev">Powerwolf</p>
                            <p className="hmZaszloFo"><img src="/nemetFlag.png" alt="" className="hmZaszlo" /></p>
                            <p className="hmEvszam">2003</p>
                        </div>
                        <div className="hmCsikok">
                            <p className="hmIkonKor"><img src="/dynLogo.jpg" alt="" className="hmIkon" /></p>
                            <p className="hmZNev">Dynazty</p>
                            <p className="hmZaszloFo"><img src="/svedFlag.png" alt="" className="hmZaszlo" /></p>
                            <p className="hmEvszam">2007</p>
                        </div>
                        <div className="hmCsikok">
                            <p className="hmIkonKor"><img src="/bibLogo.jpg" alt="" className="hmIkon" /></p>
                            <p className="hmZNev">Beast In Black</p>
                            <p className="hmZaszloFo"><img src="/euFlag.png" alt="" className="hmZaszlo" /></p>
                            <p className="hmEvszam">2015</p>
                        </div>
                    </div>
                    <div className="hmJobboszlop">
                        <div className="hmCsikok">
                            <p className="hmIkonKor"><img src="/helloLogo.png" alt="" className="hmIkon" /></p>
                            <p className="hmZNev">Helloween</p>
                            <p className="hmZaszloFo"><img src="/nemetFlag.png" alt="" className="hmZaszlo" /></p>
                            <p className="hmEvszam">1984</p>
                        </div>
                        <div className="hmCsikok">
                            <p className="hmIkonKor"><img src="/hammerLogo.jpg" alt="" className="hmIkon" /></p>
                            <p className="hmZNev">Hammerfall</p>
                            <p className="hmZaszloFo"><img src="/svedFlag.png" alt="" className="hmZaszlo" /></p>
                            <p className="hmEvszam">1993</p>
                        </div>
                        <div className="hmCsikok">
                            <p className="hmIkonKor"><img src="/bbLogo.jpg" alt="" className="hmIkon" /></p>
                            <p className="hmZNev">Battle Beast</p>
                            <p className="hmZaszloFo"><img src="/finnFlag.png" alt="" className="hmZaszlo" /></p>
                            <p className="hmEvszam">2005</p>
                        </div>
                        <div className="hmCsikok">
                            <p className="hmIkonKor"><img src="/dfLogo.jpg" alt="" className="hmIkon" /></p>
                            <p className="hmZNev">DragonForce</p>
                            <p className="hmZaszloFo"><img src="/usaFlag.png" alt="" className="hmZaszlo" /></p>
                            <p className="hmEvszam">1999</p>
                        </div>
                    </div>
                </div>
                <h1 className="hmCim">Koncertképek</h1>
                <p className="hmCarouselalap">
                    <Carousel className="hmCarousel">
                        <Carousel.Item >
                            <img className="hmCarouselKep" src="/power1.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img className="hmCarouselKep" src="/power2.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="hmCarouselKep" src="/power3.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img  className="hmCarouselKep" src="/power4.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img className="hmCarouselKep" src="/power5.png" alt="" />
                        </Carousel.Item>

                    </Carousel>
                </p>

            </main>
        </>
    )
}

export default Metal_Power