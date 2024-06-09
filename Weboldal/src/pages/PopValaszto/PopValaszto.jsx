import Navbar from "../../components/Navbar";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./PopValaszto.css";
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

const PopValaszto = () => {
  return (
    <>
    <Navbar />
      <main className="mainFolk">
        <div className="cimSzovegF">
          <h1 id="cimF">Pop stílus</h1>
          <p id="szovegF">"Az élet olyan, mint egy popdal: hol könnyed dallam, hol megható szöveg, de mindig a szív rezdüléseivel csendül."</p>
        </div>
        <img src="/popmandro.png" id="kepF" />
        <h1 id="cimFo">Alstílus</h1>
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
            className="testcarouselF"
          >
            <p className="kepFo"><img className="kepCarouselFolk" src="/kpopV.png" alt="Heavy Metal" title="Heavy Metal" /><br />K-Pop</p>
            <p className="kepFo"><img className="kepCarouselFolk" src="/eurobeatV.png" alt="Thrash Metal" title="Thrash Metal"/><br />Eurobeat</p>
            <p className="kepFo"><img className="kepCarouselFolk" src="/lofiV.png" alt="Heavy Metal" title="Heavy Metal" /><br />Lo-Fi</p>
            <p className="kepFo"><img className="kepCarouselFolk" src="/schlagerV.png" alt="Thrash Metal" title="Thrash Metal"/><br />Schlager pop</p>
        </Carousel>
          
         
        <div className="foZenekarszekcio">
        <div className="foBaloszlop">
            <h3 className="foKulfkepvis">Külföldi zenekarok</h3>
            <div className="foCsikok">
                <p className="foIkonKor"><img src="/bts.png" alt="" className="foIkon"/></p>
                <p className="foZNev">BTS</p>
                <p className="foZaszloFo"><img src="/koreanFlag.png" alt="" className="foZaszlo"/></p>
                <p className="foEvszam">2010</p>
            </div>
            <div className="foCsikok">
                <p className="foIkonKor"><img src="/coldplayLogo.jpg" alt="" className="foIkon"/></p>
                <p className="foZNev">Coldplay</p>
                <p className="foZaszloFo"><img src="/britFlag.png" alt="" className="foZaszlo"/></p>
                <p className="foEvszam">1997</p>
            </div>
        </div>
        <div className="foJobboszlop">
        <h3 className="foBelfkepvis">Belföldi zenekarok</h3>
            <div className="foCsikok">
                <p className="foIkonKor"><img src="whLogo.jpg" alt="" className="foIkon"/></p>
                <p className="foZNev">Wellhello</p>
                <p className="foZaszloFo"><img src="/magyarFlag.png" alt="" className="foZaszlo"/></p>
                <p className="foEvszam">2014</p>
            </div>
            <div className="foCsikok">
                <p className="foIkonKor"><img src="/bxsLogo.png" alt="" className="foIkon"/></p>
                <p className="foZNev">Bruno X Spacc</p>
                <p className="foZaszloFo"><img src="/magyarFlag.png" alt="" className="foZaszlo"/></p>
                <p className="foEvszam">2022</p>
            </div>
            
        </div>
        </div>
      </main>

    </>
  )
}

export default PopValaszto