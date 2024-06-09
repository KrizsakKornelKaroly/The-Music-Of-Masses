import Navbar from "../../components/Navbar";
import "./Metal_Death.css"
import Carousel from 'react-bootstrap/Carousel';

const Metal_Death = () => {
    return (
        <>
            <Navbar />

            <main className="mainhm">
                <h1 className="hmCim">A death metal</h1>
                <div className="hmLeiras">
                    <p>Leírás</p>
                    <p>A death metal, azaz „halál metal” egy extrém metal zenei alműfaj, mely a 80-as évek közepén alakult ki az agresszívebb thrash metalból olyan zenekarok hatására, mint a Slayer, a Celtic Frost vagy a Kreator. A death metal szembetűnő stíluselemei a mélyebben hangolt gitárokon játszott, erősen torzított, disszonáns gitárriffek és a mélyhangú hörgés használata a hagyományos énekhang helyett.</p>
                </div>

                <h1 className="hmCim">Képviselőik</h1>
                <div className="hmZenekarszekcio">
                    <div className="hmBaloszlop">
                        <h3 className="hmKulfkepvis">Külföldi zenekarok</h3>
                        <div className="hmCsikok">
                            <p className="hmIkonKor"><img src="/cancorLogo.jpeg" alt="" className="hmIkon" /></p>
                            <p className="hmZNev">Cannibal Corpse</p>
                            <p className="hmZaszloFo"><img src="/usaFlag.png" alt="" className="hmZaszlo" /></p>
                            <p className="hmEvszam">1988</p>
                        </div>
                        <div className="hmCsikok">
                            <p className="hmIkonKor"><img src="/beheLogo.png" alt="" className="hmIkon" /></p>
                            <p className="hmZNev">Behemoth</p>
                            <p className="hmZaszloFo"><img src="/cowFlag.png" alt="" className="hmZaszlo" /></p>
                            <p className="hmEvszam">1991</p>
                        </div>
                        <div className="hmCsikok">
                            <p className="hmIkonKor"><img src="/gojiLogo.png" alt="" className="hmIkon" /></p>
                            <p className="hmZNev">Gojira</p>
                            <p className="hmZaszloFo"><img src="/frenchFlag.png" alt="" className="hmZaszlo" /></p>
                            <p className="hmEvszam">1996</p>
                        </div>
                        <div className="hmCsikok">
                            <p className="hmIkonKor"><img src="/amarantheLogo.png" alt="" className="hmIkon" /></p>
                            <p className="hmZNev"> Amaranthe</p>
                            <p className="hmZaszloFo"><img src="/svedFlag.png" alt="" className="hmZaszlo" /></p>
                            <p className="hmEvszam">2008</p>
                        </div>
                    </div>
                    <div className="hmJobboszlop">
                        <h3 className="hmBelfkepvis">Belföldi zenekarok</h3>
                        <div className="hmCsikok">
                            <p className="hmIkonKor"><img src="/cig.jpg" alt="" className="hmIkon" /></p>
                            <p className="hmZNev">Agregator</p>
                            <p className="hmZaszloFo"><img src="/magyarFlag.png" alt="" className="hmZaszlo" /></p>
                            <p className="hmEvszam">1997</p>
                        </div>
                        <div className="hmCsikok">
                            <p className="hmIkonKor"><img src="/cig.jpg" alt="" className="hmIkon" /></p>
                            <p className="hmZNev">Blood Rainbow</p>
                            <p className="hmZaszloFo"><img src="/magyarFlag.png" alt="" className="hmZaszlo" /></p>
                            <p className="hmEvszam">2002</p>
                        </div>
                        <div className="hmCsikok">
                            <p className="hmIkonKor"><img src="/cig.jpg" alt="" className="hmIkon" /></p>
                            <p className="hmZNev">Cenobite</p>
                            <p className="hmZaszloFo"><img src="/magyarFlag.png" alt="" className="hmZaszlo" /></p>
                            <p className="hmEvszam">2001</p>
                        </div>
                    </div>
                </div>
                <h1 className="hmCim">Koncertképek</h1>
                <p className="hmCarouselalap">
                    <Carousel className="hmCarousel">
                        <Carousel.Item >
                            <img className="hmCarouselKep" src="/death1.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img className="hmCarouselKep" src="/death2.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="hmCarouselKep" src="/death3.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img  className="hmCarouselKep" src="/death4.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img className="hmCarouselKep" src="/death5.png" alt="" />
                        </Carousel.Item>

                    </Carousel>
                </p>

            </main>
        </>
    )
}

export default Metal_Death