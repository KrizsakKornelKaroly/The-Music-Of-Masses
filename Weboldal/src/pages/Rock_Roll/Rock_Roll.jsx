import Navbar from "../../components/Navbar";
import "./Rock_Roll.css"
import Carousel from 'react-bootstrap/Carousel';

const Rock_Roll = () => {
    return (
        <>
            <Navbar />

            <main className="mainrr">
                <h1 className="rrCim">A rock and roll</h1>
                <div className="rrLeiras">
                    <p>Leírás</p>
                    <p>A populáris zene folyamatosan változott és alakult az évek során, és a rock and roll megjelenése óta még több stílus és műfaj bontakozott ki belőle. Az afroamerikai zenék, mint a jazz és a blues, valamint a country zene nagy hatással voltak a populáris zene fejlődésére, és ezekből az alapokból épült fel a különböző stílusok gazdag palettája. A rock and roll nemcsak zenészeket, hanem társadalmi változásokat is hozott magával, és a 20. század második felében világszerte jelentős kulturális jelenséggé vált, amely mélyen befolyásolta a fiatalok életét és identitását.</p>
                </div>

                <h1 className="rrCim">Képviselőik</h1>
                <div className="rrZenekarszekcio">
                    <div className="rrBaloszlop">
                        <h3 className="rrKulfkepvis">Külföldi zenekarok</h3>
                        <div className="hmCsikok">
                            <p className="rrIkonKor"><img src="/elvisLogo.png" alt="" className="rrIkon" /></p>
                            <p className="rrZNev">Elvis Presley</p>
                            <p className="rrZaszloFo"><img src="/usaFlag.png" alt="" className="rrZaszlo" /></p>
                            <p className="rrEvszam">1954</p>
                        </div>
                        <div className="rrCsikok">
                            <p className="rrIkonKor"><img src="/chuckLogo.png" alt="" className="rrIkon" /></p>
                            <p className="rrZNev">Chuck Berry</p>
                            <p className="rrZaszloFo"><img src="/usaFlag.png" alt="" className="rrZaszlo" /></p>
                            <p className="rrEvszam">1950</p>
                        </div>
                        <div className="rrCsikok">
                            <p className="rrIkonKor"><img src="/richardLogo.png" alt="" className="rrIkon" /></p>
                            <p className="rrZNev">Little Richard</p>
                            <p className="rrZaszloFo"><img src="/usaFlag.png" alt="" className="rrZaszlo" /></p>
                            <p className="rrEvszam">1950</p>
                        </div>
                        <div className="rrCsikok">
                            <p className="rrIkonKor"><img src="/billLogo.png" alt="" className="rrIkon" /></p>
                            <p className="rrZNev">Bill Haley $ His Commets</p>
                            <p className="rrZaszloFo"><img src="/usaFlag.png" alt="" className="rrZaszlo" /></p>
                            <p className="rrEvszam">1952</p>
                        </div>
                    </div>
                    <div className="rrJobboszlop">
                        <h3 className="rrBelfkepvis">Belföldi zenekarok</h3>
                        <div className="rrCsikok">
                            <p className="rrIkonKor"><img src="/hungariaLogo.png" alt="" className="rrIkon" /></p>
                            <p className="rrZNev">Hungária</p>
                            <p className="rrZaszloFo"><img src="/magyarFlag.png" alt="" className="rrZaszlo" /></p>
                            <p className="rrEvszam">1957</p>
                        </div>
                        <div className="rrCsikok">
                            <p className="rrIkonKor"><img src="/atlantisLogo.png" alt="" className="rrIkon" /></p>
                            <p className="rrZNev">Atlantis</p>
                            <p className="rrZaszloFo"><img src="/magyarFlag.png" alt="" className="rrZaszlo" /></p>
                            <p className="rrEvszam">1962</p>
                        </div>
                        <div className="rrCsikok">
                            <p className="rrIkonKor"><img src="/illesLogo.png" alt="" className="rrIkon" /></p>
                            <p className="rrZNev">Illes</p>
                            <p className="rrZaszloFo"><img src="/magyarFlag.png" alt="" className="rrZaszlo" /></p>
                            <p className="rrEvszam">1957</p>
                        </div>
                        <div className="rrCsikok">
                            <p className="rrIkonKor"><img src="/taurusLogo.png" alt="" className="rrIkon" /></p>
                            <p className="rrZNev">Taurus</p>
                            <p className="rrZaszloFo"><img src="/magyarFlag.png" alt="" className="rrZaszlo" /></p>
                            <p className="rrEvszam">1956</p>
                        </div>
                    </div>
                </div>
                <h1 className="rrCim">Koncertképek</h1>
                <p className="rrCarouselalap">
                    <Carousel className="rrCarousel">
                        <Carousel.Item >
                            <img className="rrCarouselKep" src="/rrkep1.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img className="rrCarouselKep" src="/rrkep2.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="rrCarouselKep" src="/rrkep3.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img  className="rrCarouselKep" src="/rrkep4.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img className="rrCarouselKep" src="/rrkep5.png" alt="" />
                        </Carousel.Item>

                    </Carousel>
                </p>

            </main>
        </>
    )
}

export default Rock_Roll