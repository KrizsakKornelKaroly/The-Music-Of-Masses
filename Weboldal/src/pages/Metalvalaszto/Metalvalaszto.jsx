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
    breakpoint: { max: 1024, min: 464 },
    items: 4,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const Metalvalaszto = () => {
  return (
    <>
    <Navbar />
      <main>
        
        <div className="cimSzoveg">
          <h1 id="cimM">Metal stílus</h1>
          <p id="szovegM">Kemény erős nőket szeretem. Amíg le tudom győzni őket szaknderben, nincs gond.</p>
          <span id="alkotoM">James Hetfield</span>
        </div>
        <img src="./public/JamesHetfield.png" id="kep" />
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
            <div>A</div>
            <div>B</div>
            <div>C</div>
            <div>D</div>
            <div>E</div>
            <div>F</div>
          </Carousel>
          
         <div className="ZenekarElrendezes">
          <h1 className="h1ZE">Külföldi Zenekarok</h1>
          <h1 className="h1ZE">Belföldi Zenekarok</h1>
          <div className="zenekarok"><span>asd</span></div>
          <div className="zenekarok">sad</div>
          <div className="zenekarok">asd</div>
          <div className="zenekarok">sad</div>
        </div> 
      </main>

    </>
  )
}

export default Metalvalaszto