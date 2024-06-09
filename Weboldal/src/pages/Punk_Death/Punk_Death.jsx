import Navbar from "../../components/Navbar";
import "./Punk_Death.css"
import Carousel from 'react-bootstrap/Carousel';

const Punk_Death = () => {
    return (
        <>
            <Navbar />

            <main className="mainpd">
                <h1 className="pdCim">Death punk stílus</h1>
                <div className="pdLeiras">
                    <p>Death punk stílus leírása</p>
                    <p>A Deathpunk egy viszonylag új és kísérletező jellegű zenei műfaj, amelynek gyökerei a punk rock és a death metal szcéna határmezsgyéjén találhatók. Egyfajta lázadó hangot és kifacsart hangulatot keres, amelyben a punk energiája találkozik a death metal sötét hangulatával. Jellemzően gyors tempójú és agresszív hangzású, gyakran használva a punk és a metal világából származó erős torzításokat és intenzív dobtechnikákat.
</p>
                </div>

                <h1 className="pdCim">Képviselőik</h1>
                <div className="pdZenekarszekcio">
                    <div className="pdBaloszlop">
                        <h3 className="pdKulfkepvis">Külföldi zenekarok</h3>
                        <div className="pdCsikok">
                            <p className="pdIkonKor"><img src="/tnlogo.png" alt="" className="pdIkon" /></p>
                            <p className="pdZNev">Turbonegro</p>
                            <p className="pdZaszloFo"><img src="/noFlag.png" alt="" className="pdZaszlo" /></p>
                            <p className="pdEvszam">1989</p>
                        </div>
                        <div className="pdCsikok">
                            <p className="pdIkonKor"><img src="/zek.png" alt="" className="pdIkon" /></p>
                            <p className="pdZNev">Zeke</p>
                            <p className="pdZaszloFo"><img src="/usaFlag.png" alt="" className="pdZaszlo" /></p>
                            <p className="pdEvszam">1992</p>
                        </div>
                        <div className="pdCsikok">
                            <p className="pdIkonKor"><img src="/bronx.png" alt="" className="pdIkon" /></p>
                            <p className="pdZNev">The Bronx</p>
                            <p className="pdZaszloFo"><img src="/usaFlag.png" alt="" className="pdZaszlo" /></p>
                            <p className="pdEvszam">2002</p>
                        </div>
                        <div className="pdCsikok">
                            <p className="pdIkonKor"><img src="/ghoul.png" alt="" className="pdIkon" /></p>
                            <p className="pdZNev">Ghoul</p>
                            <p className="pdZaszloFo"><img src="/usaFlag.png" alt="" className="pdZaszlo" /></p>
                            <p className="pdEvszam">2001</p>
                        </div>
                    </div>
                    <div className="pdJobboszlop">
                        <h3 className="pdBelfkepvis">Belföldi zenekarok</h3>
                        <div className="pdCsikok">
                            <p className="pdIkonKor"><img src="/dpman.png" alt="" className="pdIkon" /></p>
                            <p className="pdZNev">Dopeman</p>
                            <p className="pdZaszloFo"><img src="/magyarFlag.png" alt="" className="pdZaszlo" /></p>
                            <p className="pdEvszam">XXXX</p>
                        </div>
                        <div className="pdCsikok">
                            <p className="pdIkonKor"><img src="/cada.png" alt="" className="pdIkon" /></p>
                            <p className="pdZNev">Cadaveres</p>
                            <p className="pdZaszloFo"><img src="/magyarFlag.png" alt="" className="pdZaszlo" /></p>
                            <p className="pdEvszam">XXXX</p>
                        </div>
                        <div className="pdCsikok">
                            <p className="pdIkonKor"><img src="/ekto.png" alt="" className="pdIkon" /></p>
                            <p className="pdZNev">Ektomorf</p>
                            <p className="pdZaszloFo"><img src="/magyarFlag.png" alt="" className="pdZaszlo" /></p>
                            <p className="pdEvszam">XXXX</p>
                        </div>
                        <div className="pdCsikok">
                            <p className="pdIkonKor"><img src="/raging.png" alt="" className="pdIkon" /></p>
                            <p className="pdZNev">Raging Age</p>
                            <p className="pdZaszloFo"><img src="/magyarFlag.png" alt="" className="pdZaszlo" /></p>
                            <p className="pdEvszam">XXXX</p>
                        </div>
                    </div>
                </div>
                <h1 className="pdCim">Koncertképek</h1>
                <p className="pdCarouselalap">
                    <Carousel className="pdCarousel">
                        <Carousel.Item >
                            <img className="pdCarouselKep" src="/pdcar1.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img className="pdCarouselKep" src="/pdcar2.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="pdCarouselKep" src="/pdcar3.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img  className="pdCarouselKep" src="/pdcar4.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img className="pdCarouselKep" src="/pdcar5.png" alt="" />
                        </Carousel.Item>

                    </Carousel>
                </p>

            </main>
        </>
    )
}

export default Punk_Death