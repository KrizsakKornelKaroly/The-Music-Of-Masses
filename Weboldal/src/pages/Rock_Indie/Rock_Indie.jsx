import Navbar from "../../components/Navbar";
import "./Rock_Indie.css"
import Carousel from 'react-bootstrap/Carousel';

const Rock_Indie = () => {
    return (
        <>
            <Navbar />

            <main className="mainri">
                <h1 className="riCim">Az indie rock</h1>
                <div className="riLeiras">
                    <p>Leírás</p>
                    <p>Az indie rock egy gyűjtőfogalom, ami széles körben magába foglalja a rockhoz közeli művészeket és stílusokat, amelyek egy bizonyos fokig megőrzik az underground kultúra értékeit. Angliában a 80-as évek korai szakaszában kezdődött meg az indie zene kialakulása. Kezdetben a népszerű zenekarok, gitáron alapuló alternatív rockkal emelkedtek ki. Időközben az indie rock (gyakran csak indie-nek nevezik) egy sokoldalú alműfaja lett az alternatív rocknak. Nevét a nagy kiadóktól kapta, de egyben utal a művészi önállóságra való törekvésre is. Leváltotta a modern rockot.</p>
                </div>

                <h1 className="riCim">Képviselőik</h1>
                <div className="riZenekarszekcio">
                    <div className="riBaloszlop">
                        <h3 className="riKulfkepvis">Külföldi zenekarok</h3>
                        <div className="hmCsikok">
                            <p className="riIkonKor"><img src="/tameLogo.png" alt="" className="riIkon" /></p>
                            <p className="riZNev">Tame Impala</p>
                            <p className="riZaszloFo"><img src="/usaFlag.png" alt="" className="riZaszlo" /></p>
                            <p className="riEvszam">2007</p>
                        </div>
                        <div className="riCsikok">
                            <p className="riIkonKor"><img src="/killerLogo.png" alt="" className="riIkon" /></p>
                            <p className="riZNev">The Killers</p>
                            <p className="riZaszloFo"><img src="/usaFlag.png" alt="" className="riZaszlo" /></p>
                            <p className="riEvszam">2001</p>
                        </div>
                        <div className="riCsikok">
                            <p className="riIkonKor"><img src="/phoenixLogo.png" alt="" className="riIkon" /></p>
                            <p className="riZNev">Phoenix</p>
                            <p className="riZaszloFo"><img src="/usaFlag.png" alt="" className="riZaszlo" /></p>
                            <p className="riEvszam">1999</p>
                        </div>
                        <div className="riCsikok">
                            <p className="riIkonKor"><img src="/foalsLogo.png" alt="" className="riIkon" /></p>
                            <p className="riZNev">Foals</p>
                            <p className="riZaszloFo"><img src="/usaFlag.png" alt="" className="riZaszlo" /></p>
                            <p className="riEvszam">2005</p>
                        </div>
                    </div>
                    <div className="riJobboszlop">
                        <h3 className="riBelfkepvis">Belföldi zenekarok</h3>
                        <div className="riCsikok">
                            <p className="riIkonKor"><img src="/franLogo.png" alt="" className="riIkon" /></p>
                            <p className="riZNev">Fran Palermo</p>
                            <p className="riZaszloFo"><img src="/magyarFlag.png" alt="" className="riZaszlo" /></p>
                            <p className="riEvszam">2011</p>
                        </div>
                        <div className="riCsikok">
                            <p className="riIkonKor"><img src="/3oyLogo.png" alt="" className="riIkon" /></p>
                            <p className="riZNev">3OY</p>
                            <p className="riZaszloFo"><img src="/magyarFlag.png" alt="" className="riZaszlo" /></p>
                            <p className="riEvszam">2000</p>
                        </div>
                        <div className="riCsikok">
                            <p className="riIkonKor"><img src="/awsLogo.png" alt="" className="riIkon" /></p>
                            <p className="riZNev">AWS</p>
                            <p className="riZaszloFo"><img src="/magyarFlag.png" alt="" className="riZaszlo" /></p>
                            <p className="riEvszam">2006</p>
                        </div>
                        <div className="riCsikok">
                            <p className="riIkonKor"><img src="/blahaLogo.png" alt="" className="riIkon" /></p>
                            <p className="riZNev">Blahalouisiana</p>
                            <p className="riZaszloFo"><img src="/magyarFlag.png" alt="" className="riZaszlo" /></p>
                            <p className="riEvszam">2013</p>
                        </div>
                    </div>
                </div>
                <h1 className="riCim">Koncertképek</h1>
                <p className="riCarouselalap">
                    <Carousel className="riCarousel">
                        <Carousel.Item >
                            <img className="riCarouselKep" src="/rikep1.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img className="riCarouselKep" src="/rikep2.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="riCarouselKep" src="/rikep3.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img  className="riCarouselKep" src="/rikep4.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img className="riCarouselKep" src="/rikep5.png" alt="" />
                        </Carousel.Item>

                    </Carousel>
                </p>

            </main>
        </>
    )
}

export default Rock_Indie