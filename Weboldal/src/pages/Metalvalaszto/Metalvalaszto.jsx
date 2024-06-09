import Navbar from "../../components/Navbar";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Metalvalaszto.css";
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
  }
};

const Metalvalaszto = () => {
  return (
    <>
    <Navbar />
      <main className="mainMetal">
        <div className="cimSzoveg">
          <h1 id="cimM">Metal stílus</h1>
          <p id="szovegM">Kemény erős nőket szeretem. Amíg le tudom győzni őket szaknderben, nincs gond.</p>
          <span id="alkotoM">James Hetfield</span>
        </div>
        <img src="./public/JamesHetfield.png" id="kepM" />
        <h1 id="cimMa">Alstílus</h1>
        <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            infinite={true}
            autoPlaySpeed={100}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            className="testcarousel"
          >
            <img className="kepCarouselMetal" src="/HeavyM.png" alt="Heavy Metal" title="Heavy Metal" />
            <img className="kepCarouselMetal" src="/ThrashM.png" alt="Thrash Metal" title="Thrash Metal"/>
            <img className="kepCarouselMetal" src="/GothicM.png" alt="Gothic Metal" title="Gothic Metal" />
            <img className="kepCarouselMetal" src="/DeathM.png" alt="Death Metal" title="Death Metal" />
            <img className="kepCarouselMetal" src="/PowerM.png" alt="Power Metal" title="Power Metal" />
            <img className="kepCarouselMetal" src="SymphonicM.png" alt="Symphonic Metal" title="Symphonic Metal" />
        </Carousel>
          
         
        <div className="meZenekarszekcio">
        <div className="meBaloszlop">
            <h3 className="meKulfkepvis">Külföldi zenekarok</h3>
            <div className="meCsikok">
                <p className="meIkonKor"><img src="/metalicaLogo.png" alt="" className="meIkon"/></p>
                <p className="meZNev">Metallica</p>
                <p className="meZaszloFo"><img src="/usaFlag.png" alt="" className="meZaszlo"/></p>
                <p className="meEvszam">1981</p>
            </div>
            <div className="meCsikok">
                <p className="meIkonKor"><img src="/sabatonLogo.png" alt="" className="meIkon"/></p>
                <p className="meZNev">Sabaton</p>
                <p className="meZaszloFo"><img src="/svedFlag.png" alt="" className="meZaszlo"/></p>
                <p className="meEvszam">1999</p>
            </div>
        </div>
        <div className="meJobboszlop">
        <h3 className="meBelfkepvis">Belföldi zenekarok</h3>
            <div className="meCsikok">
                <p className="meIkonKor"><img src="wisdomLogo.png" alt="" className="meIkon"/></p>
                <p className="meZNev">Wisdom</p>
                <p className="meZaszloFo"><img src="/magyarFlag.png" alt="" className="meZaszlo"/></p>
                <p className="meEvszam">2000</p>
            </div>
            <div className="meCsikok">
                <p className="meIkonKor"><img src="/pokolgepLogo.png" alt="" className="meIkon"/></p>
                <p className="meZNev">Pokolgép</p>
                <p className="meZaszloFo"><img src="/magyarFlag.png" alt="" className="meZaszlo"/></p>
                <p className="meEvszam">1980</p>
            </div>
            
        </div>
        </div>
      </main>

    </>
  )
}

export default Metalvalaszto