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
          <h1 id="cimP">Punk stílus</h1>
          <p id="szovegP">A punk olyan, mint a lángoló lázadás: ösztönös, szabályok nélküli robbanás, mely átlépi a határokat és megrengeti a társadalmi normákat.</p>
        </div>
        <img src="/punkfiatal.png" id="kepP" />
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
            <p className="kepPunk"><img className="kepCarouselPunk" src="/deathPunk.png" alt="Death Punk" title="Death Punk" /><br />Death Punk</p>
            <p className="kepPunk"><img className="kepCarouselPunk" src="/gothicPunk.png" alt="Gothic Punk" title="Gothic Punk"/><br />Gothic Punk</p>
            <p className="kepPunk"><img className="kepCarouselPunk" src="/FolkPunk.png" alt="Folk Punk" title="Folk Punk" /><br />Folk Punk</p>
        </Carousel>
          
         
        <div className="puZenekarszekcio">
        <div className="puBaloszlop">
            <h3 className="puKulfkepvis">Külföldi zenekarok</h3>
            <div className="puCsikok">
                <p className="puIkonKor"><img src="/blackflagLogo.png" alt="" className="puIkon"/></p>
                <p className="puZNev">Black Flag</p>
                <p className="puZaszloFo"><img src="/svedFlag.png" alt="" className="puZaszlo"/></p>
                <p className="puEvszam">1976</p>
            </div>
            <div className="puCsikok">
                <p className="puIkonKor"><img src="/theExploitedLogo.png" alt="" className="puIkon"/></p>
                <p className="puZNev">The Exploited</p>
                <p className="puZaszloFo"><img src="/norwayFlag.png" alt="" className="puZaszlo"/></p>
                <p className="puEvszam">1978</p>
            </div>
        </div>
        <div className="puJobboszlop">
        <h3 className="puBelfkepvis">Belföldi zenekarok</h3>
            <div className="puCsikok">
                <p className="puIkonKor"><img src="ElitosztagLogo.png" alt="" className="puIkon"/></p>
                <p className="puZNev">Elit Osztag</p>
                <p className="puZaszloFo"><img src="/magyarFlag.png" alt="" className="puZaszlo"/></p>
                <p className="puEvszam">1984</p>
            </div>
            <div className="puCsikok">
                <p className="puIkonKor"><img src="/kgbLogo.png" alt="" className="puIkon"/></p>
                <p className="puZNev">KGB</p>
                <p className="puZaszloFo"><img src="/magyarFlag.png" alt="" className="puZaszlo"/></p>
                <p className="puEvszam">1976</p>
            </div>
            
        </div>
        </div>
      </main>

    </>
  )
}

export default Punkvalaszto