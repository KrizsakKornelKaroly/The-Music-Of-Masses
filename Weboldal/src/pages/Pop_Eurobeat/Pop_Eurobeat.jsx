import Navbar from "../../components/Navbar";
import "./Pop_Eurobeat.css"
import Carousel from 'react-bootstrap/Carousel';

const Pop_Eurobeat = () => {
    return (
        <>
            <Navbar />

            <main className="mainpopeu">
                <h1 className="popeuCim">Eurobeat stílus</h1>
                <div className="popeuLeiras">
                    <p>Eurobeat stílus leírása</p>
                    <p>Az eurobeat két féle Európai tánczenei stílusból ered: az egyik a Brit variánsa az olasz eurodisco által befolyásolt dance-pop, és a másik pedig a hi-NRG stílust követő Italo disco. Mindkét stílus az 1980-as években jöttek létre. Eurobeat dalszövegek és dallamok nagyon egyszerűek. Italo disco, sokszor gyors és boldog hangolatú zene mint az EDM, néha gitárral kezdődik, majd robbanásszerű elektronikus-hangú szintetizátor, ami gyakran ismétlődik a kórusban. Eurobeat zenék ismétlik több részét a zenének. Az Initial D nevű sorozat sokszor használta ezt a stílust, így a mai napig nagyrészt autós driftelés közben játszódik eurobeat.</p>
                </div>
                <h1 className="popeuCim">Képviselőik</h1>
                <div className="popeuZenekarszekcio">
                    <div className="popeuBaloszlop">
                        <div className="popeuCsikok">
                            <p className="popeuIkonKor"><img src="/david_rod.png" alt="" className="popeuIkon" /></p>
                            <p className="popeuZNev">Dave Rodgers</p>
                            <p className="popeuZaszloFo"><img src="/olaszFlag.png" alt="" className="popeuZaszlo" /></p>
                            <p className="popeuEvszam">1991</p>
                        </div>
                        <div className="popeuCsikok">
                            <p className="popeuIkonKor"><img src="/niko.png" alt="" className="popeuIkon" /></p>
                            <p className="popeuZNev">Niko</p>
                            <p className="popeuZaszloFo"><img src="/olaszFlag.png" alt="" className="popeuZaszlo" /></p>
                            <p className="popeuEvszam">1991</p>
                        </div>
                    </div>
                    <div className="popeuJobboszlop">
                        <div className="popeuCsikok">
                            <p className="popeuIkonKor"><img src="/nathalie.png" alt="" className="popeuIkon" /></p>
                            <p className="popeuZNev">Nathalie Aarts</p>
                            <p className="popeuZaszloFo"><img src="/netherFlag.png" alt="" className="popeuZaszlo" /></p>
                            <p className="popeuEvszam">1996</p>
                        </div>
                        <div className="popeuCsikok">
                            <p className="popeuIkonKor"><img src="/manuel.png" alt="" className="popeuIkon" /></p>
                            <p className="popeuZNev">Manuel</p>
                            <p className="popeuZaszloFo"><img src="/olaszFlag.png" alt="" className="popeuZaszlo" /></p>
                            <p className="popeuEvszam">1994</p>
                        </div>
                    </div>
                </div>
                <h1 className="popeuCim">Galéria</h1>
                <p className="popeuCarouselalap">
                    <Carousel className="popeuCarousel">
                        <Carousel.Item >
                            <img className="popeuCarouselKep" src="/popeucar1.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img className="popeuCarouselKep" src="/popeucar2.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="popeuCarouselKep" src="/popeucar3.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img  className="popeuCarouselKep" src="/popeucar4.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img className="popeuCarouselKep" src="/popeucar5.png" alt="" />
                        </Carousel.Item>

                    </Carousel>
                </p>

            </main>
        </>
    )
}

export default Pop_Eurobeat