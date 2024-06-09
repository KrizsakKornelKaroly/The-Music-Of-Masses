import Navbar from "../../components/Navbar";
import "./Jazz_Boogie.css"
import Carousel from 'react-bootstrap/Carousel';

const Jazz_Boogie = () => {
    return (
        <>
            <Navbar />

            <main className="mainjboo">
                <h1 className="jbooCim">Boogie-woogie stílus</h1>
                <div className="jbooLeiras">
                    <p>Boogie-woogie stílus leírása</p>
                    <p>A boogie-woogie az afroamerikai zenei tradíciók egyik ága, amely az 1920-as években alakult ki az Egyesült Államok déli részén. Jellemzője az energikus, lendületes zongorajáték, amely gyakran improvizatív és ritmusos basszusvonalakkal dolgozik.</p>
                </div>
                <h1 className="jbooCim">Képviselőik</h1>
                <div className="jbooZenekarszekcio">
                    <div className="jbooBaloszlop">
                        <div className="jbooCsikok">
                            <p className="jbooIkonKor"><img src="/charl.png" alt="" className="jbooIkon" /></p>
                            <p className="jbooZNev">Albert Ammons</p>
                            <p className="jbooZaszloFo"><img src="/usaFlag.png" alt="" className="jbooZaszlo" /></p>
                            <p className="jbooEvszam">1934</p>
                        </div>
                        <div className="jbooCsikok">
                            <p className="jbooIkonKor"><img src="/dizzy.png" alt="" className="jbooIkon" /></p>
                            <p className="jbooZNev">Pete Johnson</p>
                            <p className="jbooZaszloFo"><img src="/usaFlag.png" alt="" className="jbooZaszlo" /></p>
                            <p className="jbooEvszam">1932</p>
                        </div>
                    </div>
                    <div className="jbooJobboszlop">
                        <div className="jbooCsikok">
                            <p className="jbooIkonKor"><img src="/thelo.png" alt="" className="jbooIkon" /></p>
                            <p className="jbooZNev">Meade Lux Lewis</p>
                            <p className="jbooZaszloFo"><img src="/usaFlag.png" alt="" className="jbooZaszlo" /></p>
                            <p className="jbooEvszam">1921</p>
                        </div>
                        <div className="jbooCsikok">
                            <p className="jbooIkonKor"><img src="/bud.png" alt="" className="jbooIkon" /></p>
                            <p className="jbooZNev">Jimmy Yancey</p>
                            <p className="jbooZaszloFo"><img src="/usaFlag.png" alt="" className="jbooZaszlo" /></p>
                            <p className="jbooEvszam">1922</p>
                        </div>
                    </div>
                </div>
                <h1 className="jbooCim">Koncert képek</h1>
                <p className="jbooCarouselalap">
                    <Carousel className="jbooCarousel">
                        <Carousel.Item >
                            <img className="jbooCarouselKep" src="/jboocar1.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img className="jbooCarouselKep" src="/jboocar2.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="jbooCarouselKep" src="/jboocar3.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img  className="jbooCarouselKep" src="/jboocar4.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img className="jbooCarouselKep" src="/jboocar5.png" alt="" />
                        </Carousel.Item>

                    </Carousel>
                </p>

            </main>
        </>
    )
}

export default Jazz_Boogie