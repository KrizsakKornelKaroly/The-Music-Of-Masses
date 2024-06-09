import Navbar from "../../components/Navbar";
import "./Rock_Classic.css"
import Carousel from 'react-bootstrap/Carousel';

const Metal_Heavy = () => {
    return (
        <>
            <Navbar />

            <main className="maincr">
                <h1 className="crCim">A classic rock</h1>
                <div className="crLeiras">
                    <p>Leírás</p>
                    <p>Az Egyesült Államokban általában az 1960-as évek közepétől az 1990-es évek közepéig terjedő rockzenét tartalmaz. Bár a klasszikus rock főként a felnőtt hallgatókat vonzotta, az ehhez a formátumhoz kapcsolódó zenét az internet és a digitális letöltés miatt a fiatalabb hallgatók jobban megismerték. Egyes klasszikus rockállomások korlátozott számú aktuális kiadást is lejátszanak, amelyek stilisztikailag összhangban vannak az állomás hangzásával, vagy olyan kulturális örökségekkel, amelyek még mindig aktívak és új zenét produkálnak.</p>
                </div>

                <h1 className="crCim">Képviselőik</h1>
                <div className="crZenekarszekcio">
                    <div className="crBaloszlop">
                        <h3 className="crKulfkepvis">Külföldi zenekarok</h3>
                        <div className="hmCsikok">
                            <p className="crIkonKor"><img src="/acdcLogo.png" alt="" className="crIkon" /></p>
                            <p className="crZNev">AC/DC</p>
                            <p className="crZaszloFo"><img src="/australFlag.png" alt="" className="crZaszlo" /></p>
                            <p className="crEvszam">1973</p>
                        </div>
                        <div className="crCsikok">
                            <p className="crIkonKor"><img src="/doors.png" alt="" className="crIkon" /></p>
                            <p className="crZNev">The Doors</p>
                            <p className="crZaszloFo"><img src="/usaFlag.png" alt="" className="crZaszlo" /></p>
                            <p className="crEvszam">1965</p>
                        </div>
                        <div className="crCsikok">
                            <p className="crIkonKor"><img src="/rollingLogo.png" alt="" className="crIkon" /></p>
                            <p className="crZNev">The Rolling Stones</p>
                            <p className="crZaszloFo"><img src="/britFlag.png" alt="" className="crZaszlo" /></p>
                            <p className="crEvszam">1962</p>
                        </div>
                        <div className="crCsikok">
                            <p className="crIkonKor"><img src="/queenLogo.png" alt="" className="crIkon" /></p>
                            <p className="crZNev">Queen</p>
                            <p className="crZaszloFo"><img src="/britFlag.png" alt="" className="crZaszlo" /></p>
                            <p className="crEvszam">1970</p>
                        </div>
                    </div>
                    <div className="crJobboszlop">
                        <h3 className="crBelfkepvis">Belföldi zenekarok</h3>
                        <div className="crCsikok">
                            <p className="crIkonKor"><img src="/OmegaLogo.png" alt="" className="crIkon" /></p>
                            <p className="crZNev">Omega</p>
                            <p className="crZaszloFo"><img src="/magyarFlag.png" alt="" className="crZaszlo" /></p>
                            <p className="crEvszam">1962</p>
                        </div>
                        <div className="crCsikok">
                            <p className="crIkonKor"><img src="/lgtLogo.png" alt="" className="crIkon" /></p>
                            <p className="crZNev">LGT</p>
                            <p className="crZaszloFo"><img src="/magyarFlag.png" alt="" className="crZaszlo" /></p>
                            <p className="crEvszam">1967</p>
                        </div>
                        <div className="crCsikok">
                            <p className="crIkonKor"><img src="/piramisLogo.png" alt="" className="crIkon" /></p>
                            <p className="crZNev">Piramis</p>
                            <p className="crZaszloFo"><img src="/magyarFlag.png" alt="" className="crZaszlo" /></p>
                            <p className="crEvszam">1972</p>
                        </div>
                        <div className="crCsikok">
                            <p className="crIkonKor"><img src="/beatriceLogo.png" alt="" className="crIkon" /></p>
                            <p className="crZNev">Beatrice</p>
                            <p className="crZaszloFo"><img src="/magyarFlag.png" alt="" className="crZaszlo" /></p>
                            <p className="crEvszam">1978</p>
                        </div>
                    </div>
                </div>
                <h1 className="crCim">Koncertképek</h1>
                <p className="crCarouselalap">
                    <Carousel className="crCarousel">
                        <Carousel.Item >
                            <img className="crCarouselKep" src="/cr1kep.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img className="crCarouselKep" src="/cr2kep.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="crCarouselKep" src="/cr3kep.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img  className="crCarouselKep" src="/cr4kep.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img className="crCarouselKep" src="/cr5kep.png" alt="" />
                        </Carousel.Item>

                    </Carousel>
                </p>

            </main>
        </>
    )
}

export default Metal_Heavy