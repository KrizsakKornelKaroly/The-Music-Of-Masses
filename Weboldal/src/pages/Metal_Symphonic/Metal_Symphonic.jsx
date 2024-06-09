import Navbar from "../../components/Navbar";
import "./Metal_Symphonic.css"
import Carousel from 'react-bootstrap/Carousel';

const Metal_Symphonic = () => {
    return (
        <>
            <Navbar />

            <main className="mainhm">
                <h1 className="hmCim">A symphonic metal</h1>
                <div className="hmLeiras">
                    <p>Leírás</p>
                    <p>Szimfonikus metal megnevezés alatt azt a heavy metal alapokon nyugvó zenét értjük, ami szimfonikus elemeket is tartalmaz. Ezek a zenei elemek hasonlóak a klasszikus szimfóniákban használatosakhoz. A szimfonikus metal megnevezés jelöl egy meghatározott zenei műfajt a metal kategóriáján belül, de használják kiegészítő tagként más metálműfajok megnevezéséhez is.</p>
                </div>

                <h1 className="hmCim">Képviselőik</h1>
                <div className="hmZenekarszekcio">
                    <div className="hmBaloszlop">
                        <div className="hmCsikok">
                            <p className="hmIkonKor"><img src="/nwLogo.jpg" alt="" className="hmIkon" /></p>
                            <p className="hmZNev">Nightwish</p>
                            <p className="hmZaszloFo"><img src="/finnFlag.png" alt="" className="hmZaszlo" /></p>
                            <p className="hmEvszam">1996</p>
                        </div>
                        <div className="hmCsikok">
                            <p className="hmIkonKor"><img src="/wtLogo.png" alt="" className="hmIkon" /></p>
                            <p className="hmZNev">Within Temptation</p>
                            <p className="hmZaszloFo"><img src="/dutchFlag.jpg" alt="" className="hmZaszlo" /></p>
                            <p className="hmEvszam">1996</p>
                        </div>
                        <div className="hmCsikok">
                            <p className="hmIkonKor"><img src="/epicaLogo.jpg" alt="" className="hmIkon" /></p>
                            <p className="hmZNev">Epica</p>
                            <p className="hmZaszloFo"><img src="/dutchFlag.jpg" alt="" className="hmZaszlo" /></p>
                            <p className="hmEvszam">2002</p>
                        </div>
                        <div className="hmCsikok">
                            <p className="hmIkonKor"><img src="/voaLogo.jpg" alt="" className="hmIkon" /></p>
                            <p className="hmZNev">Visions of Atlantis</p>
                            <p className="hmZaszloFo"><img src="/austriaFlag.png" alt="" className="hmZaszlo" /></p>
                            <p className="hmEvszam">2000</p>
                        </div>
                    </div>
                    <div className="hmJobboszlop">
                        <div className="hmCsikok">
                            <p className="hmIkonKor"><img src="/btbLogo.png" alt="" className="hmIkon" /></p>
                            <p className="hmZNev">Beyond The Black</p>
                            <p className="hmZaszloFo"><img src="/nemetFlag.png" alt="" className="hmZaszlo" /></p>
                            <p className="hmEvszam">2014</p>
                        </div>
                        <div className="hmCsikok">
                            <p className="hmIkonKor"><img src="/rofLogo.jpg" alt="" className="hmIkon" /></p>
                            <p className="hmZNev">Rhapsody of Fire</p>
                            <p className="hmZaszloFo"><img src="/olaszFlag.png" alt="" className="hmZaszlo" /></p>
                            <p className="hmEvszam">1993</p>
                        </div>
                        <div className="hmCsikok">
                            <p className="hmIkonKor"><img src="/xandriaLogo.jpg" alt="" className="hmIkon" /></p>
                            <p className="hmZNev">Xandria</p>
                            <p className="hmZaszloFo"><img src="/nemetFlag.png" alt="" className="hmZaszlo" /></p>
                            <p className="hmEvszam">1994</p>
                        </div>
                        <div className="hmCsikok">
                            <p className="hmIkonKor"><img src="/tfLogo.jpg" alt="" className="hmIkon" /></p>
                            <p className="hmZNev">Twilight Force</p>
                            <p className="hmZaszloFo"><img src="/svedFlag.png" alt="" className="hmZaszlo" /></p>
                            <p className="hmEvszam">2011</p>
                        </div>
                    </div>
                </div>
                <h1 className="hmCim">Koncertképek</h1>
                <p className="hmCarouselalap">
                    <Carousel className="hmCarousel">
                        <Carousel.Item >
                            <img className="hmCarouselKep" src="/symp1.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img className="hmCarouselKep" src="/symp2.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="hmCarouselKep" src="/symp3.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img  className="hmCarouselKep" src="/symp4.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img className="hmCarouselKep" src="/symp5.png" alt="" />
                        </Carousel.Item>

                    </Carousel>
                </p>

            </main>
        </>
    )
}

export default Metal_Symphonic