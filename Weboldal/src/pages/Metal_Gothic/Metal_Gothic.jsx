import Navbar from "../../components/Navbar";
import "./Metal_Gothic.css"
import Carousel from 'react-bootstrap/Carousel';

const Metal_Gothic = () => {
    return (
        <>
            <Navbar />

            <main className="mainhm">
                <h1 className="hmCim">A gothic metal</h1>
                <div className="hmLeiras">
                    <p>Leírás</p>
                    <p>A gothic metal, vagy goth metal a heavy metal egyik alműfaja, mely a heavy metal súlyosságát és a gothic rock sötét melankóliáját ötvözi. A gothic metal változatosságát azok a zenekarok adják, melyek a heavy metal különböző stílusaiba adaptálták a "gótikus" megközelítést, ebből adódóan előfordulhat akár black metal-al vagy más extrém metal stílusokkal történő fúzió is.</p>
                </div>

                <h1 className="hmCim">Képviselőik</h1>
                <div className="hmZenekarszekcio">
                    <div className="hmBaloszlop">
                        <h3 className="hmKulfkepvis">Külföldi zenekarok</h3>
                        <div className="hmCsikok">
                            <p className="hmIkonKor"><img src="/evanescLogo.jpg" alt="" className="hmIkon" /></p>
                            <p className="hmZNev">Evanescence</p>
                            <p className="hmZaszloFo"><img src="/usaFlag.png" alt="" className="hmZaszlo" /></p>
                            <p className="hmEvszam">1994</p>
                        </div>
                        <div className="hmCsikok">
                            <p className="hmIkonKor"><img src="/lacoLogoogo.png" alt="" className="hmIkon" /></p>
                            <p className="hmZNev">Lacuna Coil</p>
                            <p className="hmZaszloFo"><img src="/olaszFlag.png" alt="" className="hmZaszlo" /></p>
                            <p className="hmEvszam">1994</p>
                        </div>
                        <div className="hmCsikok">
                            <p className="hmIkonKor"><img src="/parlostLogo.jpg" alt="" className="hmIkon" /></p>
                            <p className="hmZNev">Paradise Lost</p>
                            <p className="hmZaszloFo"><img src="/britFlag.png" alt="" className="hmZaszlo" /></p>
                            <p className="hmEvszam">1988</p>
                        </div>
                        <div className="hmCsikok">
                            <p className="hmIkonKor"><img src="/marmanLogo.jpg" alt="" className="hmIkon" /></p>
                            <p className="hmZNev">Marilyn Manson</p>
                            <p className="hmZaszloFo"><img src="/usaFlag.png" alt="" className="hmZaszlo" /></p>
                            <p className="hmEvszam">1989</p>
                        </div>
                    </div>
                    <div className="hmJobboszlop">
                        <h3 className="hmBelfkepvis">Belföldi zenekarok</h3>
                        <div className="hmCsikok">
                            <p className="hmIkonKor"><img src="/nevgreLogo.jpg" alt="" className="hmIkon" /></p>
                            <p className="hmZNev">Nevergreen</p>
                            <p className="hmZaszloFo"><img src="/magyarFlag.png" alt="" className="hmZaszlo" /></p>
                            <p className="hmEvszam">1994</p>
                        </div>
                        <div className="hmCsikok">
                            <p className="hmIkonKor"><img src="/dalriLogo.jpg" alt="" className="hmIkon" /></p>
                            <p className="hmZNev">Dalriada</p>
                            <p className="hmZaszloFo"><img src="/magyarFlag.png" alt="" className="hmZaszlo" /></p>
                            <p className="hmEvszam">2000</p>
                        </div>
                        <div className="hmCsikok">
                            <p className="hmIkonKor"><img src="/cadaverLogo.jpg" alt="" className="hmIkon" /></p>
                            <p className="hmZNev">Cadaveres</p>
                            <p className="hmZaszloFo"><img src="/magyarFlag.png" alt="" className="hmZaszlo" /></p>
                            <p className="hmEvszam">2000</p>
                        </div>
                        <div className="hmCsikok">
                            <p className="hmIkonKor"><img src="/slepulseLogo.png" alt="" className="hmIkon" /></p>
                            <p className="hmZNev">Sleeping Pulse</p>
                            <p className="hmZaszloFo"><img src="/magyarFlag.png" alt="" className="hmZaszlo" /></p>
                            <p className="hmEvszam">2010</p>
                        </div>
                    </div>
                </div>
                <h1 className="hmCim">Koncertképek</h1>
                <p className="hmCarouselalap">
                    <Carousel className="hmCarousel">
                        <Carousel.Item >
                            <img className="hmCarouselKep" src="/gothic1.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img className="hmCarouselKep" src="/gothic2.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="hmCarouselKep" src="/gothic3.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img  className="hmCarouselKep" src="/gothic4.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img className="hmCarouselKep" src="/gothic5.png" alt="" />
                        </Carousel.Item>

                    </Carousel>
                </p>

            </main>
        </>
    )
}

export default Metal_Gothic