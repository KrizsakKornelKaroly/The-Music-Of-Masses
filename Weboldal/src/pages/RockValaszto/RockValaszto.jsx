import Navbar from "../../components/Navbar";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./RockValaszto.css";
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

const Rockvalaszto = () => {
  return (
    <>
    <Navbar />
      <main className="mainRock">
        <div className="cimSzovegR">
          <h1 id="cimR">Rock stílus</h1>
          <p id="szovegR">Oda megyek, ahová a gitárom visz.</p>
          <span id="alkotoR">Angus Young</span>
        </div>
        <img src="/young.png" id="kepR" />
        <h1 id="cimRo">Alstílus</h1>
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
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            className="testcarouselRock"
          >
            <p className="kepRock"><img className="kepCarouselRock" src="/rockRoll.png" alt="Rock & Roll" title="Heavy Metal" /><br />Rock and Roll </p>
            <p className="kepRock"><img className="kepCarouselRock" src="/HardRock.png" alt="Hard Rock" title="Hard Rock"/><br />Hard Rock </p>
            <p className="kepRock"><img className="kepCarouselRock" src="/ClassicRock.png" alt="Classic Rock" title="Classic Rock" /><br />Classic Rock </p>
            <p className="kepRock"><img className="kepCarouselRock" src="/FolkRock.png" alt="Folk Rock" title="Folk Rock" /><br />Folk Rock </p>
            <p className="kepRock"><img className="kepCarouselRock" src="/ModernRock.png" alt="Modern Rock" title="Modern Rock" /><br />Modern Rock </p>
            <p className="kepRock"><img className="kepCarouselRock" src="/PunkRock.png" alt="Punk Rock" title="Punk Rock" /><br />Punk Rock </p>
            <p className="kepRock"><img className="kepCarouselRock" src="/indieRock.jpg" alt="Indie Rock" title="Indie Rock" /><br />Indie Rock </p>
        </Carousel>
          
         
        <div className="roZenekarszekcio">
        <div className="roBaloszlop">
            <h3 className="roKulfkepvis">Külföldi zenekarok</h3>
            <div className="roCsikok">
                <p className="roIkonKor"><img src="/acdcLogo.png" alt="" className="roIkon"/></p>
                <p className="roZNev">AC/DC</p>
                <p className="roZaszloFo"><img src="/australFlag.png" alt="" className="roZaszlo"/></p>
                <p className="roEvszam">1973</p>
            </div>
            <div className="roCsikok">
                <p className="roIkonKor"><img src="/queenLogo.png" alt="" className="roIkon"/></p>
                <p className="roZNev">Queen</p>
                <p className="roZaszloFo"><img src="/britFlag.png" alt="" className="roZaszlo"/></p>
                <p className="roEvszam">1971</p>
            </div>
        </div>
        <div className="roJobboszlop">
        <h3 className="roBelfkepvis">Belföldi zenekarok</h3>
            <div className="roCsikok">
                <p className="roIkonKor"><img src="EddaMüvekLogo.png" alt="" className="roIkon"/></p>
                <p className="roZNev">Edda Müvek</p>
                <p className="roZaszloFo"><img src="/magyarFlag.png" alt="" className="roZaszlo"/></p>
                <p className="roEvszam">1974</p>
            </div>
            <div className="roCsikok">
                <p className="roIkonKor"><img src="/TankcsapdaLogo.png" alt="" className="roIkon"/></p>
                <p className="roZNev">Tankcsapda</p>
                <p className="roZaszloFo"><img src="/magyarFlag.png" alt="" className="roZaszlo"/></p>
                <p className="roEvszam">1989</p>
            </div>
            
        </div>
        </div>
      </main>

    </>
  )
}

export default Rockvalaszto