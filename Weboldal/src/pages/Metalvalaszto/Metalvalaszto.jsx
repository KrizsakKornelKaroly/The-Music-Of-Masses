import Navbar from "../../components/Navbar";
import "./Metalvalaszto.css";
//import { IoMdArrowDropright } from "react-icons/io";

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
            <img src="./public/JamesHetfield.png" id="kep"/>
            <div>
              <h1 id="cimMa">Alstílus</h1>
              <img src="" alt="" /><img src="" alt="" /><img src="" alt="" /><img src="" alt="" /><img src="" alt="" /><img src="" alt="" />
            </div>
            
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