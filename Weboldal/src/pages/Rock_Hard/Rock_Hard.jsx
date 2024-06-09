import Navbar from "../../components/Navbar";
import "./Rock_Hard.css"
import Carousel from 'react-bootstrap/Carousel';

const Rock_Hard = () => {
    return (
        <>
            <Navbar />

            <main className="mainrh">
                <h1 className="rhCim">A hard rock</h1>
                <div className="rhLeiras">
                    <p>Leírás</p>
                    <p>A hard rock a rock and roll zene egyik típusa, melynek gyökerei az 1960-as évek garázs- és pszichedelikus rock zenéjéből erednek. Legfőbb eleme mégis a rock, melynek a hard rock a keményebb, durvább és technikailag fejlettebb változata. (Ebben az értelemben a hard rock utáni következő szint a progresszív rock.) A riffekkel dolgozó torzított gitárhangzás, a dobok és a basszus kemény alkalmazása jellemzi.</p>
                </div>

                <h1 className="rhCim">Képviselőik</h1>
                <div className="rhZenekarszekcio">
                    <div className="rhBaloszlop">
                        <h3 className="rhKulfkepvis">Külföldi zenekarok</h3>
                        <div className="hmCsikok">
                            <p className="rhIkonKor"><img src="/eclipseLogo.png" alt="" className="rhIkon" /></p>
                            <p className="rhZNev">Eclipse</p>
                            <p className="rhZaszloFo"><img src="/svedFlag.png" alt="" className="rhZaszlo" /></p>
                            <p className="rhEvszam">1999</p>
                        </div>
                        <div className="rhCsikok">
                            <p className="rhIkonKor"><img src="/acdcLogo.png" alt="" className="rhIkon" /></p>
                            <p className="rhZNev">AC/DC</p>
                            <p className="rhZaszloFo"><img src="/australFlag.png" alt="" className="rhZaszlo" /></p>
                            <p className="rhEvszam">1973</p>
                        </div>
                        <div className="rhCsikok">
                            <p className="rhIkonKor"><img src="/ledzepelinLogo.png" alt="" className="rhIkon" /></p>
                            <p className="rhZNev">Led Zeppelin</p>
                            <p className="rhZaszloFo"><img src="/britFlag.png" alt="" className="rhZaszlo" /></p>
                            <p className="rhEvszam">1968</p>
                        </div>
                        <div className="rhCsikok">
                            <p className="rhIkonKor"><img src="/halenLogo.png" alt="" className="rhIkon" /></p>
                            <p className="rhZNev">Van Halen</p>
                            <p className="rhZaszloFo"><img src="/usaFlag.png" alt="" className="rhZaszlo" /></p>
                            <p className="rhEvszam">1972</p>
                        </div>
                    </div>
                    <div className="rhJobboszlop">
                        <h3 className="rhBelfkepvis">Belföldi zenekarok</h3>
                        <div className="rhCsikok">
                            <p className="rhIkonKor"><img src="/pmobilLogo.png" alt="" className="rhIkon" /></p>
                            <p className="rhZNev">P.Mobil</p>
                            <p className="rhZaszloFo"><img src="/magyarFlag.png" alt="" className="rhZaszlo" /></p>
                            <p className="rhEvszam">1969</p>
                        </div>
                        <div className="rhCsikok">
                            <p className="rhIkonKor"><img src="/pboxLogo.png" alt="" className="rhIkon" /></p>
                            <p className="rhZNev">P.Box</p>
                            <p className="rhZaszloFo"><img src="/magyarFlag.png" alt="" className="rhZaszlo" /></p>
                            <p className="rhEvszam">1980</p>
                        </div>
                        <div className="rhCsikok">
                            <p className="rhIkonKor"><img src="/dinamitLogo.png" alt="" className="rhIkon" /></p>
                            <p className="rhZNev">Dinamit</p>
                            <p className="rhZaszloFo"><img src="/magyarFlag.png" alt="" className="rhZaszlo" /></p>
                            <p className="rhEvszam">1979</p>
                        </div>
                        <div className="rhCsikok">
                            <p className="rhIkonKor"><img src="/karthagoLogo.png" alt="" className="rhIkon" /></p>
                            <p className="rhZNev">Karthago</p>
                            <p className="rhZaszloFo"><img src="/magyarFlag.png" alt="" className="rhZaszlo" /></p>
                            <p className="rhEvszam">1979</p>
                        </div>
                    </div>
                </div>
                <h1 className="rhCim">Koncertképek</h1>
                <p className="rhCarouselalap">
                    <Carousel className="rhCarousel">
                        <Carousel.Item >
                            <img className="rhCarouselKep" src="/rhkep1.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img className="rhCarouselKep" src="/rhkep2.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="rhCarouselKep" src="/rhkep3.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img  className="rhCarouselKep" src="/rhkep4.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img className="rhCarouselKep" src="/rhkep5.png" alt="" />
                        </Carousel.Item>

                    </Carousel>
                </p>

            </main>
        </>
    )
}

export default Rock_Hard