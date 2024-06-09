import Navbar from "../../components/Navbar";
import "./Folk_Skandinav.css"
import Carousel from 'react-bootstrap/Carousel';

const Folk_Skandinav = () => {
    return (
        <>
            <Navbar />

            <main className="mainhm">
                <h1 className="hmCim">A skandináv folk</h1>
                <div className="hmLeiras">
                    <p>Leírás</p>
                    <p>A Skandináv folkzene egyedülálló hangzással és gazdag történelmi hagyományokkal büszkélkedhet. A skandináv országok - Dánia, Svédország, Norvégia, Finnország és Izland - mindegyike rendelkezik saját, jól megkülönböztethető folkzenei hagyományokkal. Ezek a hagyományok gyakran kötődnek a vidéki élethez, a természethez és az évszázados mesékhez. A skandináv folkzenében gyakran hallhatók a hegedű, harmonika, duda és egyéb hagyományos hangszer, melyekkel a művészek újraértelmezik és megőrzik a régi hagyományokat. A modern skandináv folkzene egyre inkább felbukkan a nemzetközi színtéren is, hozzájárulva a regionális kulturális identitások megőrzéséhez és megosztásához.</p>
                </div>

                <h1 className="hmCim">Képviselőik</h1>
                <div className="hmZenekarszekcio">
                    <div className="hmBaloszlop">
                        <div className="hmCsikok">
                            <p className="hmIkonKor"><img src="/garmLogo.jpg" alt="" className="hmIkon" /></p>
                            <p className="hmZNev">Garmarna</p>
                            <p className="hmZaszloFo"><img src="/svedFlag.png" alt="" className="hmZaszlo" /></p>
                            <p className="hmEvszam">1990</p>
                        </div>
                        <div className="hmCsikok">
                            <p className="hmIkonKor"><img src="/varLogo.jpg" alt="" className="hmIkon" /></p>
                            <p className="hmZNev">Värttinä</p>
                            <p className="hmZaszloFo"><img src="/finnFlag.png" alt="" className="hmZaszlo" /></p>
                            <p className="hmEvszam">1983</p>
                        </div>
                    </div>
                    <div className="hmJobboszlop">
                        <div className="hmCsikok">
                            <p className="hmIkonKor"><img src="/gjallarhotnLogo.png" alt="" className="hmIkon" /></p>
                            <p className="hmZNev">Gjallarhorn</p>
                            <p className="hmZaszloFo"><img src="/svedFlag.png" alt="" className="hmZaszlo" /></p>
                            <p className="hmEvszam">1994</p>
                        </div>
                        <div className="hmCsikok">
                            <p className="hmIkonKor"><img src="/hednLogo.jpg" alt="" className="hmIkon" /></p>
                            <p className="hmZNev">Hedningarna</p>
                            <p className="hmZaszloFo"><img src="/svedFlag.png" alt="" className="hmZaszlo" /></p>
                            <p className="hmEvszam">1987</p>
                        </div>
                    </div>
                </div>
                <h1 className="hmCim">Koncertképek</h1>
                <p className="hmCarouselalap">
                    <Carousel className="hmCarousel">
                        <Carousel.Item >
                            <img className="hmCarouselKep" src="/skan1.jpg" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img className="hmCarouselKep" src="/skan2.jpg" alt="" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="hmCarouselKep" src="/skan3.jpg" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img  className="hmCarouselKep" src="/skan4.jpg" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img className="hmCarouselKep" src="/skan5.jpg" alt="" />
                        </Carousel.Item>

                    </Carousel>
                </p>

            </main>
        </>
    )
}

export default Folk_Skandinav