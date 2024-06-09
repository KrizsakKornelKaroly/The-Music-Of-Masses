import Navbar from "../../components/Navbar";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./FolkValaszto.css";
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

const FolkValaszto = () => {
  return (
    <>
    <Navbar />
      <main className="mainFolk">
        <div className="cimSzovegF">
          <h1 id="cimF">Folk stílus</h1>
          <p id="szovegF">Kemény erős nőket szeretem. Amíg le tudom győzni őket szaknderben, nincs gond.</p>
        </div>
        <img src="./public/folkem.png" id="kepF" />
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
            <p className="kepFo"><img className="kepCarouselFolk" src="/magyar.png" alt="Heavy Metal" title="Heavy Metal" /><br />Magyar Folk</p>
            <p className="kepFo"><img className="kepCarouselFolk" src="/skandinav.png" alt="Thrash Metal" title="Thrash Metal"/><br />Skandináv</p>
        </Carousel>
          
         
        <div className="foZenekarszekcio">
        <div className="foBaloszlop">
            <h3 className="foKulfkepvis">Külföldi zenekarok</h3>
            <div className="foCsikok">
                <p className="foIkonKor"><img src="/vasenLogo.png" alt="" className="foIkon"/></p>
                <p className="foZNev">Väsen</p>
                <p className="foZaszloFo"><img src="/svedFlag.png" alt="" className="foZaszlo"/></p>
                <p className="foEvszam">1981</p>
            </div>
            <div className="foCsikok">
                <p className="foIkonKor"><img src="/gjallarhotnLogo.png" alt="" className="foIkon"/></p>
                <p className="foZNev">Gjallarhorn</p>
                <p className="foZaszloFo"><img src="/norwayFlag.png" alt="" className="foZaszlo"/></p>
                <p className="foEvszam">1999</p>
            </div>
        </div>
        <div className="foJobboszlop">
        <h3 className="foBelfkepvis">Belföldi zenekarok</h3>
            <div className="foCsikok">
                <p className="foIkonKor"><img src="ghymesLogo.png" alt="" className="foIkon"/></p>
                <p className="foZNev">Ghymes együttes</p>
                <p className="foZaszloFo"><img src="/magyarFlag.png" alt="" className="foZaszlo"/></p>
                <p className="foEvszam">2001</p>
            </div>
            <div className="foCsikok">
                <p className="foIkonKor"><img src="/vujcsicsLogo.png" alt="" className="foIkon"/></p>
                <p className="foZNev">Vujicsics együttes</p>
                <p className="foZaszloFo"><img src="/magyarFlag.png" alt="" className="foZaszlo"/></p>
                <p className="foEvszam">1980</p>
            </div>
            
        </div>
        </div>
      </main>

    </>
  )
}

export default FolkValaszto