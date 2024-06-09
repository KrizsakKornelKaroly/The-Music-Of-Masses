import Navbar from "../../components/Navbar";
import "./Rock_Folk.css"
import Carousel from 'react-bootstrap/Carousel';

const Rock_Folk = () => {
    return (
        <>
            <Navbar />

            <main className="mainrf">
                <h1 className="rfCim">A folk-rock stílus</h1>
                <div className="rfLeiras">
                    <p>Leírás</p>
                    <p>A folk-rock műfaj különlegessége abban rejlik, hogy ötvözi a tradicionális folk zene hangulatát és dallamvilágát a rockzene lendületével és hangszíneivel, létrehozva ezzel egy új, friss zenei stílust. A The Byrds megteremtette ezt az egyedülálló hangzást, amely inspirációt adott más zenekaroknak is, hogy felfedezzék és kifejezzék saját folk-rock érzületüket. Ez a műfaj gyorsan népszerűvé vált, és sok más zenekar, például a Crosby, Stills, Nash & Young vagy a Simon & Garfunkel is hozzájárult a folk-rock korszakának kialakulásához és elterjedéséhez.</p>
                </div>

                <h1 className="rfCim">Képviselőik</h1>
                <div className="rfZenekarszekcio">
                    <div className="rfBaloszlop">
                        <h3 className="rfKulfkepvis">Külföldi zenekarok</h3>
                        <div className="rfCsikok">
                            <p className="rfIkonKor"><img src="/fairportLogo.png" alt="" className="rfIkon" /></p>
                            <p className="rfZNev">Fairport Convention</p>
                            <p className="rfZaszloFo"><img src="/britFlag.png" alt="" className="rfZaszlo" /></p>
                            <p className="rfEvszam">1967</p>
                        </div>
                        <div className="rfCsikok">
                            <p className="rfIkonKor"><img src="/byrdsLogo.png" alt="" className="rfIkon" /></p>
                            <p className="rfZNev">The Byrds</p>
                            <p className="rfZaszloFo"><img src="/usaFlag.png" alt="" className="rfZaszlo" /></p>
                            <p className="rfEvszam">1964</p>
                        </div>
                        <div className="rfCsikok">
                            <p className="rfIkonKor"><img src="/bandLogo.png" alt="" className="rfIkon" /></p>
                            <p className="rfZNev">The Band</p>
                            <p className="rfZaszloFo"><img src="/canadaFlag.png" alt="" className="rfZaszlo" /></p>
                            <p className="rfEvszam">1967</p>
                        </div>
                        <div className="rfCsikok">
                            <p className="rfIkonKor"><img src="/danLogo.png" alt="" className="rfIkon" /></p>
                            <p className="rfZNev">Stelly Dan</p>
                            <p className="rfZaszloFo"><img src="/usaFlag.png" alt="" className="rfZaszlo" /></p>
                            <p className="rfEvszam">1972</p>
                        </div>
                    </div>
                    <div className="rfJobboszlop">
                        <h3 className="rfBelfkepvis">Belföldi zenekarok</h3>
                        <div className="rfCsikok">
                            <p className="rfIkonKor"><img src="/kalakaLogo.png" alt="" className="rfIkon" /></p>
                            <p className="rfZNev">Kaláka</p>
                            <p className="rfZaszloFo"><img src="/magyarFlag.png" alt="" className="rfZaszlo" /></p>
                            <p className="rfEvszam">1969</p>
                        </div>
                        <div className="rfCsikok">
                            <p className="rfIkonKor"><img src="/kormoranLogo.png" alt="" className="rfIkon" /></p>
                            <p className="rfZNev">Komorán</p>
                            <p className="rfZaszloFo"><img src="/magyarFlag.png" alt="" className="rfZaszlo" /></p>
                            <p className="rfEvszam">1973</p>
                        </div>
                        <div className="rfCsikok">
                            <p className="rfIkonKor"><img src="/budapestLogo.png" alt="" className="rfIkon" /></p>
                            <p className="rfZNev">Budapest Bár</p>
                            <p className="rfZaszloFo"><img src="/magyarFlag.png" alt="" className="rfZaszlo" /></p>
                            <p className="rfEvszam">2007</p>
                        </div>
                        <div className="rfCsikok">
                            <p className="rfIkonKor"><img src="/fonoLogo.png" alt="" className="rfIkon" /></p>
                            <p className="rfZNev">Fonó zenekar</p>
                            <p className="rfZaszloFo"><img src="/magyarFlag.png" alt="" className="rfZaszlo" /></p>
                            <p className="rfEvszam">1988</p>
                        </div>
                    </div>
                </div>
                <h1 className="rfCim">Koncertképek</h1>
                <p className="rfCarouselalap">
                    <Carousel className="rfCarousel">
                        <Carousel.Item >
                            <img className="rfCarouselKep" src="/frkep1.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img className="rfCarouselKep" src="/frkep2.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="rfCarouselKep" src="/frkep3.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img  className="rfCarouselKep" src="/frkep4.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img className="rfCarouselKep" src="/frkep5.png" alt="" />
                        </Carousel.Item>

                    </Carousel>
                </p>

            </main>
        </>
    )
}

export default Rock_Folk