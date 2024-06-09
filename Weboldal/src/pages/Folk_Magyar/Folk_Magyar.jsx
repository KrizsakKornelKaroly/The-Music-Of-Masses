import Navbar from "../../components/Navbar";
import "./Folk_Magyar.css"
import Carousel from 'react-bootstrap/Carousel';

const Folk_Magyar = () => {
    return (
        <>
            <Navbar />

            <main className="mainhm">
                <h1 className="hmCim">A magyar folk</h1>
                <div className="hmLeiras">
                    <p>Leírás</p>
                    <p>A Magyar folkzene gazdag és sokszínű hagyományokkal rendelkezik, melyek évszázadokra nyúlnak vissza. A magyar népzene gyökerei a múltba nyúlnak, és szorosan kapcsolódnak a magyar nép történelméhez és kultúrájához. Az egyedi hangszerek, mint a koboz, doromb, citera és hegedű, jellemzik ezt a zenei stílust. A magyar népzene gyakran kifejezi az örömöt, bánatot, valamint a magyar táj és élet élményeit. Az elmúlt évtizedekben a magyar folkzene egyre inkább felkapottá vált a modern zenei világban is, miközben továbbra is őrzi hagyományait és autentikus hangzását.</p>
                </div>

                <h1 className="hmCim">Képviselőik</h1>
                <div className="hmZenekarszekcio">
                    <div className="hmBaloszlop">
                        <div className="hmCsikok">
                            <p className="hmIkonKor"><img src="/muzsLogo.jpg" alt="" className="hmIkon" /></p>
                            <p className="hmZNev">Muzsikás</p>
                            <p className="hmZaszloFo"><img src="/magyarFlag.png" alt="" className="hmZaszlo" /></p>
                            <p className="hmEvszam">1973</p>
                        </div>
                        <div className="hmCsikok">
                            <p className="hmIkonKor"><img src="/sondorLogo.png" alt="" className="hmIkon" /></p>
                            <p className="hmZNev">Söndörgő</p>
                            <p className="hmZaszloFo"><img src="/magyarFlag.png" alt="" className="hmZaszlo" /></p>
                            <p className="hmEvszam">1995</p>
                        </div>
                    </div>
                    <div className="hmJobboszlop">
                        <div className="hmCsikok">
                            <p className="hmIkonKor"><img src="/cig.jpg" alt="" className="hmIkon" /></p>
                            <p className="hmZNev">Életfa</p>
                            <p className="hmZaszloFo"><img src="/magyarFlag.png" alt="" className="hmZaszlo" /></p>
                            <p className="hmEvszam">2001</p>
                        </div>
                        <div className="hmCsikok">
                            <p className="hmIkonKor"><img src="/cig.jpg" alt="" className="hmIkon" /></p>
                            <p className="hmZNev">Dűvő</p>
                            <p className="hmZaszloFo"><img src="/magyarFlag.png" alt="" className="hmZaszlo" /></p>
                            <p className="hmEvszam">1986</p>
                        </div>
                    </div>
                </div>
                <h1 className="hmCim">Koncertképek</h1>
                <p className="hmCarouselalap">
                    <Carousel className="hmCarousel">
                        <Carousel.Item >
                            <img className="hmCarouselKep" src="/magyar1.jpg" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img className="hmCarouselKep" src="/magyar2.jpg" alt="" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="hmCarouselKep" src="/magyar3.jpg" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img  className="hmCarouselKep" src="/magyar4.jpg" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img className="hmCarouselKep" src="/magyar5.jpg" alt="" />
                        </Carousel.Item>

                    </Carousel>
                </p>

            </main>
        </>
    )
}

export default Folk_Magyar