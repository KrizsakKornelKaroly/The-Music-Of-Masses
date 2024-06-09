import Navbar from "../../components/Navbar";
import "./Metal_Heavy.css"
import Carousel from 'react-bootstrap/Carousel';

const Metal_Heavy = () => {
    return (
        <>
            <Navbar />

            <main className="mainhm">
                <h1 className="hmCim">A heavy metal</h1>
                <div className="hmLeiras">
                    <p>Leírás</p>
                    <p>A heavy metal (vagy egyszerűen csak metal, metálzene) rockzenei műfaj, amely 1968 és 1974 között jött létre. A heavy metalt életre hívó, blues-rock- és pszichedelikusrock-gyökerekkel rendelkező együttesek gitár- és dobközpontú, vastag, kemény hangzást alakítottak ki, melyet erős torzítás és gyors gitárszólók jellemeznek. A heavy metal a könnyűzenei műfajok egyik legextrémebb formája.</p>
                </div>

                <h1 className="hmCim">Képviselőik</h1>
                <div className="hmZenekarszekcio">
                    <div className="hmBaloszlop">
                        <h3 className="hmKulfkepvis">Külföldi zenekarok</h3>
                        <div className="hmCsikok">
                            <p className="hmIkonKor"><img src="/BS_logo.png" alt="" className="hmIkon" /></p>
                            <p className="hmZNev">Black Sabbath</p>
                            <p className="hmZaszloFo"><img src="/britFlag.png" alt="" className="hmZaszlo" /></p>
                            <p className="hmEvszam">1968</p>
                        </div>
                        <div className="hmCsikok">
                            <p className="hmIkonKor"><img src="/JP_logo.png" alt="" className="hmIkon" /></p>
                            <p className="hmZNev">Judas Priest</p>
                            <p className="hmZaszloFo"><img src="/britFlag.png" alt="" className="hmZaszlo" /></p>
                            <p className="hmEvszam">1969</p>
                        </div>
                        <div className="hmCsikok">
                            <p className="hmIkonKor"><img src="/MH_logo.jpg" alt="" className="hmIkon" /></p>
                            <p className="hmZNev">Motörhead</p>
                            <p className="hmZaszloFo"><img src="/britFlag.png" alt="" className="hmZaszlo" /></p>
                            <p className="hmEvszam">1975</p>
                        </div>
                        <div className="hmCsikok">
                            <p className="hmIkonKor"><img src="/IM_logo.jpg" alt="" className="hmIkon" /></p>
                            <p className="hmZNev">Iron Maiden</p>
                            <p className="hmZaszloFo"><img src="/britFlag.png" alt="" className="hmZaszlo" /></p>
                            <p className="hmEvszam">1975</p>
                        </div>
                    </div>
                    <div className="hmJobboszlop">
                        <h3 className="hmBelfkepvis">Belföldi zenekarok</h3>
                        <div className="hmCsikok">
                            <p className="hmIkonKor"><img src="/KP_logo.jpg" alt="" className="hmIkon" /></p>
                            <p className="hmZNev">Kalapács</p>
                            <p className="hmZaszloFo"><img src="/magyarFlag.png" alt="" className="hmZaszlo" /></p>
                            <p className="hmEvszam">2000</p>
                        </div>
                        <div className="hmCsikok">
                            <p className="hmIkonKor"><img src="/OM_logo.jpg" alt="" className="hmIkon" /></p>
                            <p className="hmZNev">Omen</p>
                            <p className="hmZaszloFo"><img src="/magyarFlag.png" alt="" className="hmZaszlo" /></p>
                            <p className="hmEvszam">1990</p>
                        </div>
                        <div className="hmCsikok">
                            <p className="hmIkonKor"><img src="/MH_logo.jpg" alt="" className="hmIkon" /></p>
                            <p className="hmZNev">Pokolgép</p>
                            <p className="hmZaszloFo"><img src="/magyarFlag.png" alt="" className="hmZaszlo" /></p>
                            <p className="hmEvszam">1980</p>
                        </div>
                        <div className="hmCsikok">
                            <p className="hmIkonKor"><img src="/IM_logo.jpg" alt="" className="hmIkon" /></p>
                            <p className="hmZNev">Ossian</p>
                            <p className="hmZaszloFo"><img src="/magyarFlag.png" alt="" className="hmZaszlo" /></p>
                            <p className="hmEvszam">1986</p>
                        </div>
                    </div>
                </div>
                <h1 className="hmCim">Koncertképek</h1>
                <p className="hmCarouselalap">
                    <Carousel className="hmCarousel">
                        <Carousel.Item >
                            <img className="hmCarouselKep" src="/hmcar1.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img className="hmCarouselKep" src="/hmcar2.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="hmCarouselKep" src="/hmcar3.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img  className="hmCarouselKep" src="/hmcar4.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img className="hmCarouselKep" src="/hmcar5.png" alt="" />
                        </Carousel.Item>

                    </Carousel>
                </p>

            </main>
        </>
    )
}

export default Metal_Heavy