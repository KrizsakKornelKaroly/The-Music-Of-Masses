import Navbar from "../../components/Navbar";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./PunkValaszto.css"
//import { IoMdArrowDropright } from "react-icons/io";


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1400, min: 464 },
    items: 4,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 800, min: 0 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile2: {
    breakpoint: { max: 600, min: 0 },
    items: 2,
    slidesToSlide: 1 
  },
  mobile3: {
    breakpoint: { max: 400, min: 0 },
    items: 1,
    slidesToSlide: 1,
  }
};

const Punkvalaszto = () => {
  return (
    <>
    <Navbar />
      <main className="mainPunk">
        <div className="cimSzovegP">
          <h1 id="cimP">Metal stílus</h1>
          <p id="szovegP">Kemény erős nőket szeretem. Amíg le tudom győzni őket szaknderben, nincs gond.</p>
          <span id="alkotoP">James Hetfield</span>
        </div>
        <img src="./public/JamesHetfield.png" id="kepP" />
        <h1 id="cimPu">Alstílus</h1>
        <Carousel
            swipeable={false}
            draggable={false}
            showDots={false}
            responsive={responsive}
            infinite={true}
            autoPlaySpeed={100}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["desktop"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            className="testcarouselPu"
          >
            <p className="kepPunk"><img className="kepCarouselPunk" src="/HeavyM.png" alt="Heavy Metal" title="Heavy Metal" /><br />Heavy Metal</p>
            <p className="kepPunk"><img className="kepCarouselPunk" src="/ThrashM.png" alt="Thrash Metal" title="Thrash Metal"/><br />Thrash Metal</p>
            <p className="kepPunk"><img className="kepCarouselPunk" src="/GothicM.png" alt="Gothic Metal" title="Gothic Metal" /><br />Gothic Metal</p>
        </Carousel>
          
         
        <div className="puZenekarszekcio">
        <div className="puBaloszlop">
            <h3 className="puKulfkepvis">Külföldi zenekarok</h3>
            <div className="puCsikok">
                <p className="puIkonKor"><img src="/metalicaLogo.png" alt="" className="puIkon"/></p>
                <p className="puZNev">Metallica</p>
                <p className="puZaszloFo"><img src="/usaFlag.png" alt="" className="puZaszlo"/></p>
                <p className="puEvszam">1981</p>
            </div>
            <div className="puCsikok">
                <p className="puIkonKor"><img src="/sabatonLogo.png" alt="" className="puIkon"/></p>
                <p className="puZNev">Sabaton</p>
                <p className="puZaszloFo"><img src="/svedFlag.png" alt="" className="puZaszlo"/></p>
                <p className="puEvszam">1999</p>
            </div>
        </div>
        <div className="puJobboszlop">
        <h3 className="puBelfkepvis">Belföldi zenekarok</h3>
            <div className="puCsikok">
                <p className="puIkonKor"><img src="wisdomLogo.png" alt="" className="puIkon"/></p>
                <p className="puZNev">Wisdom</p>
                <p className="puZaszloFo"><img src="/magyarFlag.png" alt="" className="puZaszlo"/></p>
                <p className="puEvszam">2000</p>
            </div>
            <div className="puCsikok">
                <p className="puIkonKor"><img src="/pokolgepLogo.png" alt="" className="puIkon"/></p>
                <p className="puZNev">Pokolgép</p>
                <p className="puZaszloFo"><img src="/magyarFlag.png" alt="" className="puZaszlo"/></p>
                <p className="puEvszam">1980</p>
            </div>
            
        </div>
        </div>
      </main>

    </>
  )
}

export default Punkvalaszto