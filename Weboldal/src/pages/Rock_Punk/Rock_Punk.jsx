import Navbar from "../../components/Navbar";
import "./Rock_Punk.css"
import Carousel from 'react-bootstrap/Carousel';

const Rock_Roll = () => {
    return (
        <>
            <Navbar />

            <main className="mainrp">
                <h1 className="rpCim">A punk rock</h1>
                <div className="rpLeiras">
                    <p>Leírás</p>
                    <p>A punk egy könnyűzenei mozgalom ami 1974-1975 táján alakult ki. A hetvenes és nyolcvanas évek között sok a műfajt sajátos módon értelmező alműfaj nőtte ki magát. Ilyen példál a hardcore punk, post-punk, Oi! (Ez önálló műfaj lett a 80as évek után) és a Ramones-féle rágógumi-pop, dalszövegeikben a szocializmust bíráló előadók tevékenységét nem nézték jó szemmel.1983-ban a rendszert nyíltan becsmérlő CPg-t, amely összefüggésbe került az ekkoriban megjelenő rasszista skinhead mozgalommal, közösség elleni izgatás vádjával bíróság elé állították és tagjai. </p>
                </div>

                <h1 className="rpCim">Képviselőik</h1>
                <div className="rpZenekarszekcio">
                    <div className="rpBaloszlop">
                        <h3 className="rpKulfkepvis">Külföldi zenekarok</h3>
                        <div className="hmCsikok">
                            <p className="rpIkonKor"><img src="/clashLogo.png" alt="" className="rpIkon" /></p>
                            <p className="rpZNev">The Clash</p>
                            <p className="rpZaszloFo"><img src="/britFlag.png" alt="" className="rpZaszlo" /></p>
                            <p className="rpEvszam">1976</p>
                        </div>
                        <div className="rpCsikok">
                            <p className="rpIkonKor"><img src="/ramonesLogo.png" alt="" className="rpIkon" /></p>
                            <p className="rpZNev">Ramones</p>
                            <p className="rpZaszloFo"><img src="/usaFlag.png" alt="" className="rpZaszlo" /></p>
                            <p className="rpEvszam">1974</p>
                        </div>
                        <div className="rpCsikok">
                            <p className="rpIkonKor"><img src="/deadLogo.png" alt="" className="rpIkon" /></p>
                            <p className="rpZNev">Dead Kennedys</p>
                            <p className="rpZaszloFo"><img src="/usaFlag.png" alt="" className="rpZaszlo" /></p>
                            <p className="rpEvszam">1978</p>
                        </div>
                        <div className="rpCsikok">
                            <p className="rpIkonKor"><img src="/offspringLogo.png" alt="" className="rpIkon" /></p>
                            <p className="rpZNev">The Offspring</p>
                            <p className="rpZaszloFo"><img src="/usaFlag.png" alt="" className="rpZaszlo" /></p>
                            <p className="rpEvszam">1984</p>
                        </div>
                    </div>
                    <div className="rpJobboszlop">
                        <h3 className="rpBelfkepvis">Belföldi zenekarok</h3>
                        <div className="rpCsikok">
                            <p className="rpIkonKor"><img src="/depresszioLogo.png" alt="" className="rpIkon" /></p>
                            <p className="rpZNev">Depresszió</p>
                            <p className="rpZaszloFo"><img src="/magyarFlag.png" alt="" className="rpZaszlo" /></p>
                            <p className="rpEvszam">1999</p>
                        </div>
                        <div className="rpCsikok">
                            <p className="rpIkonKor"><img src="/idoruLogo.png" alt="" className="rpIkon" /></p>
                            <p className="rpZNev">The Idoru</p>
                            <p className="rpZaszloFo"><img src="/magyarFlag.png" alt="" className="rpZaszlo" /></p>
                            <p className="rpEvszam">2003</p>
                        </div>
                        <div className="rpCsikok">
                            <p className="rpIkonKor"><img src="/bankruptLogo.png" alt="" className="rpIkon" /></p>
                            <p className="rpZNev">Bankrupt</p>
                            <p className="rpZaszloFo"><img src="/magyarFlag.png" alt="" className="rpZaszlo" /></p>
                            <p className="rpEvszam">2008</p>
                        </div>
                        <div className="rpCsikok">
                            <p className="rpIkonKor"><img src="/karpatiaLogo.png" alt="" className="rpIkon" /></p>
                            <p className="rpZNev">Kárpátia</p>
                            <p className="rpZaszloFo"><img src="/magyarFlag.png" alt="" className="rpZaszlo" /></p>
                            <p className="rpEvszam">1989</p>
                        </div>
                    </div>
                </div>
                <h1 className="rpCim">Koncertképek</h1>
                <p className="rpCarouselalap">
                    <Carousel className="rpCarousel">
                        <Carousel.Item >
                            <img className="rpCarouselKep" src="/rpkep1.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img className="rpCarouselKep" src="/rpkep2.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="rpCarouselKep" src="/rpkep3.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img  className="rpCarouselKep" src="/rpkep4.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img className="rpCarouselKep" src="/rpkep5.png" alt="" />
                        </Carousel.Item>

                    </Carousel>
                </p>

            </main>
        </>
    )
}

export default Rock_Roll