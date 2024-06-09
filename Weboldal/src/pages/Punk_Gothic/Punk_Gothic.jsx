import Navbar from "../../components/Navbar";
import "./Punk_Gothic.css"
import Carousel from 'react-bootstrap/Carousel';

const Punk_Gothic = () => {
    return (
        <>
            <Navbar />

            <main className="mainpg">
                <h1 className="pgCim">Gothic punk stílus</h1>
                <div className="pgLeiras">
                    <p>Gothic punk stílus leírása</p>
                    <p>A Gothic Punk egy izgalmas és sokszínű zenei műfaj, amely a gothic rock és a punk rock stílusok különleges keverékét kínálja. Ezek a két alapvetően eltérő zenei stílusú elemek egyesülnek a Gothic Punkban, létrehozva egyedi hangzást és atmoszférát, amely egyaránt vonzza a punk és a gothic zene rajongóit. A műfaj sötét és melankolikus hangulatot áraszt, amely gyakran kifejezi az emberi lélek mélyebb rétegeit és a társadalom peremén élők érzéseit.</p>
                </div>
                <h1 className="pgCim">Képviselőik</h1>
                <div className="pgZenekarszekcio">
                    <div className="pgBaloszlop">
                        <h3 className="pgKulfkepvis">Külföldi zenekarok</h3>
                        <div className="pgCsikok">
                            <p className="pgIkonKor"><img src="/bau.png" alt="" className="pgIkon" /></p>
                            <p className="pgZNev">Bauhaus</p>
                            <p className="pgZaszloFo"><img src="/britFlag.png" alt="" className="pgZaszlo" /></p>
                            <p className="pgEvszam">1978</p>
                        </div>
                        <div className="pgCsikok">
                            <p className="pgIkonKor"><img src="/siou.png" alt="" className="pgIkon" /></p>
                            <p className="pgZNev">Siouxsie and the Banshees</p>
                            <p className="pgZaszloFo"><img src="/britFlag.png" alt="" className="pgZaszlo" /></p>
                            <p className="pgEvszam">1976</p>
                        </div>
                        <div className="pgCsikok">
                            <p className="pgIkonKor"><img src="/tsom.png" alt="" className="pgIkon" /></p>
                            <p className="pgZNev">The Sisters of Mercy</p>
                            <p className="pgZaszloFo"><img src="/britFlag.png" alt="" className="pgZaszlo" /></p>
                            <p className="pgEvszam">1980</p>
                        </div>
                        <div className="pgCsikok">
                            <p className="pgIkonKor"><img src="/joydiv.png" alt="" className="pgIkon" /></p>
                            <p className="pgZNev">Joy Division</p>
                            <p className="pgZaszloFo"><img src="/britFlag.png" alt="" className="pgZaszlo" /></p>
                            <p className="pgEvszam">1976</p>
                        </div>
                    </div>
                    <div className="pgJobboszlop">
                        <h3 className="pgBelfkepvis">Belföldi zenekarok</h3>
                        <div className="pgCsikok">
                            <p className="pgIkonKor"><img src="/kispal.png" alt="" className="pgIkon" /></p>
                            <p className="pgZNev">Kispál és a Borz</p>
                            <p className="pgZaszloFo"><img src="/magyarFlag.png" alt="" className="pgZaszlo" /></p>
                            <p className="pgEvszam">1987</p>
                        </div>
                        <div className="pgCsikok">
                            <p className="pgIkonKor"><img src="/gothika.png" alt="" className="pgIkon" /></p>
                            <p className="pgZNev">Gothika</p>
                            <p className="pgZaszloFo"><img src="/magyarFlag.png" alt="" className="pgZaszlo" /></p>
                            <p className="pgEvszam">1994</p>
                        </div>
                        <div className="pgCsikok">
                            <p className="pgIkonKor"><img src="/cibola.png" alt="" className="pgIkon" /></p>
                            <p className="pgZNev">Dogs of Cibola</p>
                            <p className="pgZaszloFo"><img src="/magyarFlag.png" alt="" className="pgZaszlo" /></p>
                            <p className="pgEvszam">XXXX</p>
                        </div>
                        <div className="pgCsikok">
                            <p className="pgIkonKor"><img src="/sunseth.png" alt="" className="pgIkon" /></p>
                            <p className="pgZNev">Sunseth Midnight</p>
                            <p className="pgZaszloFo"><img src="/magyarFlag.png" alt="" className="pgZaszlo" /></p>
                            <p className="pgEvszam">2009</p>
                        </div>
                    </div>
                </div>
                <h1 className="pgCim">Koncertképek</h1>
                <p className="pgCarouselalap">
                    <Carousel className="pgCarousel">
                        <Carousel.Item >
                            <img className="pgCarouselKep" src="/pgcar1.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img className="pgCarouselKep" src="/pgcar2.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="pgCarouselKep" src="/pgcar3.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img  className="pgCarouselKep" src="/pgcar4.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img className="pgCarouselKep" src="/pgcar5.png" alt="" />
                        </Carousel.Item>

                    </Carousel>
                </p>

            </main>
        </>
    )
}

export default Punk_Gothic