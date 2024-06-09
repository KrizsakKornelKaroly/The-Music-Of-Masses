import Navbar from "../../components/Navbar";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./JazzValaszto.css";
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

const JazzValaszto = () => {
  return (
    <>
    <Navbar />
      <main className="mainMetal">
        <div className="cimSzoveg">
          <h1 id="cimM">Jazz stílus</h1>
          <p id="szovegM">"A jazz olyan, mint a végtelen táj, ahol minden hang szabadon szárnyal, mint a madarak repülése a szabadság érintésében."</p>
        </div>
        <img src="/jazzkep.png" id="kepM" />
        <h1 id="cimMa">Alstílus</h1>
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
            className="testcarousel"
          >
            <p className="kepMe"><img className="kepCarouselMetal" src="/bepop.png" alt="Bepop" title="Bepop" /><br />Bepop</p>
            <p className="kepMe"><img className="kepCarouselMetal" src="/bugi.png" alt="Boogie-woogie" title="Boogie-woogie"/><br />Boogie-woogie</p>
            <p className="kepMe"><img className="kepCarouselMetal" src="/smut.png" alt="Smooth jazz" title="Smooth jazz" /><br />Smooth jazz</p>
            <p className="kepMe"><img className="kepCarouselMetal" src="/swng.png" alt="Swing" title="Swing" /><br />Swing</p>
        </Carousel>
          
         
        <div className="meZenekarszekcio">
        <div className="meBaloszlop">
            <h3 className="meKulfkepvis">Külföldi zenekarok</h3>
            <div className="meCsikok">
                <p className="meIkonKor"><img src="/stereo.png" alt="" className="meIkon"/></p>
                <p className="meZNev">Stereolab</p>
                <p className="meZaszloFo"><img src="/britFlag.png" alt="" className="meZaszlo"/></p>
                <p className="meEvszam">1990</p>
            </div>
            <div className="meCsikok">
                <p className="meIkonKor"><img src="/jrny.png" alt="" className="meIkon"/></p>
                <p className="meZNev">Journey</p>
                <p className="meZaszloFo"><img src="/usaFlag.png" alt="" className="meZaszlo"/></p>
                <p className="meEvszam">1973</p>
            </div>
        </div>
        <div className="meJobboszlop">
        <h3 className="meBelfkepvis">Belföldi zenekarok</h3>
            <div className="meCsikok">
                <p className="meIkonKor"><img src="hotjazz.png" alt="" className="meIkon"/></p>
                <p className="meZNev">Hot Jazz Band</p>
                <p className="meZaszloFo"><img src="/magyarFlag.png" alt="" className="meZaszlo"/></p>
                <p className="meEvszam">1985</p>
            </div>
            <div className="meCsikok">
                <p className="meIkonKor"><img src="/bpjzz.png" alt="" className="meIkon"/></p>
                <p className="meZNev">Budapest Jazz Orchestra</p>
                <p className="meZaszloFo"><img src="/magyarFlag.png" alt="" className="meZaszlo"/></p>
                <p className="meEvszam">1998</p>
            </div>
            
        </div>
        </div>
      </main>

    </>
  )
}

export default JazzValaszto