import Navbar from "../../components/Navbar";
import "./Rock_Modern.css"
import Carousel from 'react-bootstrap/Carousel';

const Rock_Roll = () => {
    return (
        <>
            <Navbar />

            <main className="mainrm">
                <h1 className="rmCim">A modern rock</h1>
                <div className="rmLeiras">
                    <p>Leírás</p>
                    <p>Más néven alternatív rádió, rock műfaj. A főiskolai és kereskedelmi rockállomásokon fellelhető rockzene leírására. 2000 - napjainkig olyan zenéket játszanak le amik az aktív rock alstílusból léptek át. 2010-es évek vége felé az indie rock fellépésének népszerűsége és mennyisége miatt a modern rock hanyatlásnak indult. Sok modern rockrádió olyan crossover pop előadokat kezdett el játszani, mint Billie Eilish, AJR.</p>
                </div>

                <h1 className="rmCim">Képviselőik</h1>
                <div className="rmZenekarszekcio">
                    <div className="rmBaloszlop">
                        <h3 className="rmKulfkepvis">Külföldi zenekarok</h3>
                        <div className="hmCsikok">
                            <p className="rmIkonKor"><img src="/articLogo.png" alt="" className="rmIkon" /></p>
                            <p className="rmZNev">Artic Monkeys</p>
                            <p className="rmZaszloFo"><img src="/britFlag.png" alt="" className="rmZaszlo" /></p>
                            <p className="rmEvszam">2002</p>
                        </div>
                        <div className="rmCsikok">
                            <p className="rmIkonKor"><img src="/strokesLogo.png" alt="" className="rmIkon" /></p>
                            <p className="rmZNev">The Strokes</p>
                            <p className="rmZaszloFo"><img src="/usaFlag.png" alt="" className="rmZaszlo" /></p>
                            <p className="rmEvszam">1998</p>
                        </div>
                        <div className="rmCsikok">
                            <p className="rmIkonKor"><img src="/franzLogo.png" alt="" className="rmIkon" /></p>
                            <p className="rmZNev">Franz Ferdinand</p>
                            <p className="rmZaszloFo"><img src="/britFlag.png" alt="" className="rmZaszlo" /></p>
                            <p className="rmEvszam">2002</p>
                        </div>
                        <div className="rmCsikok">
                            <p className="rmIkonKor"><img src="/museLogo.png" alt="" className="rmIkon" /></p>
                            <p className="rmZNev">Muse</p>
                            <p className="rmZaszloFo"><img src="/britFlag.png" alt="" className="rmZaszlo" /></p>
                            <p className="rmEvszam">1994</p>
                        </div>
                    </div>
                    <div className="rmJobboszlop">
                        <h3 className="rmBelfkepvis">Belföldi zenekarok</h3>
                        <div className="rmCsikok">
                            <p className="rmIkonKor"><img src="/kowalskyLogo.png" alt="" className="rmIkon" /></p>
                            <p className="rmZNev">Kowalsky meg a Vega</p>
                            <p className="rmZaszloFo"><img src="/magyarFlag.png" alt="" className="rmZaszlo" /></p>
                            <p className="rmEvszam">1999</p>
                        </div>
                        <div className="rmCsikok">
                            <p className="rmIkonKor"><img src="/biebersLogo.png" alt="" className="rmIkon" /></p>
                            <p className="rmZNev">The Biebers</p>
                            <p className="rmZaszloFo"><img src="/magyarFlag.png" alt="" className="rmZaszlo" /></p>
                            <p className="rmEvszam">2010</p>
                        </div>
                        <div className="rmCsikok">
                            <p className="rmIkonKor"><img src="/kiscsillagLogo.png" alt="" className="rmIkon" /></p>
                            <p className="rmZNev">Kiscsillag</p>
                            <p className="rmZaszloFo"><img src="/magyarFlag.png" alt="" className="rmZaszlo" /></p>
                            <p className="rmEvszam">2005</p>
                        </div>
                        <div className="rmCsikok">
                            <p className="rmIkonKor"><img src="/irieLogo.png" alt="" className="rmIkon" /></p>
                            <p className="rmZNev">Irie Maffia</p>
                            <p className="rmZaszloFo"><img src="/magyarFlag.png" alt="" className="rmZaszlo" /></p>
                            <p className="rmEvszam">2005</p>
                        </div>
                    </div>
                </div>
                <h1 className="rmCim">Koncertképek</h1>
                <p className="rmCarouselalap">
                    <Carousel className="rmCarousel">
                        <Carousel.Item >
                            <img className="rmCarouselKep" src="/rmkep1.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img className="rmCarouselKep" src="/rmkep2.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="rmCarouselKep" src="/rmkep3.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img  className="rmCarouselKep" src="/rmkep4.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img className="rmCarouselKep" src="/rmkep5.png" alt="" />
                        </Carousel.Item>

                    </Carousel>
                </p>

            </main>
        </>
    )
}

export default Rock_Roll