import Navbar from "../../components/Navbar";
import "./Metal_Thrash.css"
import Carousel from 'react-bootstrap/Carousel';

const Metal_Thrash = () => {
    return (
        <>
            <Navbar />

            <main className="mainhm">
                <h1 className="hmCim">A thrash metal</h1>
                <div className="hmLeiras">
                    <p>Leírás</p>
                    <p>A thrash metal a heavy metal egyik alműfaja, amely az 1980-as évek elején-közepén alakult ki többé-kevésbé egymástól függetlenül az Egyesült Államokban, illetve Európában.A stílus gyökerei már az 1970-es években fellelhetőek. A Black Sabbath 1975-ös Symptom of the Universe dalának első riffje a legelső thrashriffek egyike.</p>
                </div>

                <h1 className="hmCim">Képviselőik</h1>
                <div className="hmZenekarszekcio">
                    <div className="hmBaloszlop">
                        <h3 className="hmKulfkepvis">Külföldi zenekarok</h3>
                        <div className="hmCsikok">
                            <p className="hmIkonKor"><img src="/metalicaLogo.png" alt="" className="hmIkon" /></p>
                            <p className="hmZNev">Metallica</p>
                            <p className="hmZaszloFo"><img src="/usaFlag.png" alt="" className="hmZaszlo" /></p>
                            <p className="hmEvszam">1981</p>
                        </div>
                        <div className="hmCsikok">
                            <p className="hmIkonKor"><img src="/megadethLogo.png" alt="" className="hmIkon" /></p>
                            <p className="hmZNev">Megadeth</p>
                            <p className="hmZaszloFo"><img src="/usaFlag.png" alt="" className="hmZaszlo" /></p>
                            <p className="hmEvszam">1983</p>
                        </div>
                        <div className="hmCsikok">
                            <p className="hmIkonKor"><img src="/anthraxLogo.jpg" alt="" className="hmIkon" /></p>
                            <p className="hmZNev">Anthrax</p>
                            <p className="hmZaszloFo"><img src="/usaFlag.png" alt="" className="hmZaszlo" /></p>
                            <p className="hmEvszam">1981</p>
                        </div>
                        <div className="hmCsikok">
                            <p className="hmIkonKor"><img src="/exodusLogo.jpg" alt="" className="hmIkon" /></p>
                            <p className="hmZNev">Exodus</p>
                            <p className="hmZaszloFo"><img src="/usaFlag.png" alt="" className="hmZaszlo" /></p>
                            <p className="hmEvszam">1980</p>
                        </div>
                    </div>
                    <div className="hmJobboszlop">
                        <h3 className="hmBelfkepvis">Belföldi zenekarok</h3>
                        <div className="hmCsikok">
                            <p className="hmIkonKor"><img src="/ektomorfLogo.png" alt="" className="hmIkon" /></p>
                            <p className="hmZNev">Ektomorf</p>
                            <p className="hmZaszloFo"><img src="/magyarFlag.png" alt="" className="hmZaszlo" /></p>
                            <p className="hmEvszam">1994</p>
                        </div>
                        <div className="hmCsikok">
                            <p className="hmIkonKor"><img src="/mobydickLogo.jpg" alt="" className="hmIkon" /></p>
                            <p className="hmZNev">Moby Dick</p>
                            <p className="hmZaszloFo"><img src="/magyarFlag.png" alt="" className="hmZaszlo" /></p>
                            <p className="hmEvszam">1980</p>
                        </div>
                        <div className="hmCsikok">
                            <p className="hmIkonKor"><img src="/akelaLogo.jpg" alt="" className="hmIkon" /></p>
                            <p className="hmZNev">Akela</p>
                            <p className="hmZaszloFo"><img src="/magyarFlag.png" alt="" className="hmZaszlo" /></p>
                            <p className="hmEvszam">1990</p>
                        </div>
                        <div className="hmCsikok">
                            <p className="hmIkonKor"><img src="/bwLogo.jpg" alt="" className="hmIkon" /></p>
                            <p className="hmZNev">Barbed Wire</p>
                            <p className="hmZaszloFo"><img src="/magyarFlag.png" alt="" className="hmZaszlo" /></p>
                            <p className="hmEvszam">1990</p>
                        </div>
                    </div>
                </div>
                <h1 className="hmCim">Koncertképek</h1>
                <p className="hmCarouselalap">
                    <Carousel className="hmCarousel">
                        <Carousel.Item >
                            <img className="hmCarouselKep" src="/thrash1.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img className="hmCarouselKep" src="/thrash2.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="hmCarouselKep" src="/thrash3.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img  className="hmCarouselKep" src="/thrash4.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img className="hmCarouselKep" src="/thrash5.png" alt="" />
                        </Carousel.Item>

                    </Carousel>
                </p>

            </main>
        </>
    )
}

export default Metal_Thrash