import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaCircleArrowLeft } from "react-icons/fa6";
import Navbar from "./components/Navbar";



function App() {


  return (
    <>
      <Navbar />
      <main>
        <div className='szekcio'  id='elsoResz' >
          <h1>The Music of Masses</h1>
          <p>Üdvözlünk az oldalon kedves látogató! Érezd jól magad és böngészd a zenei stílusokat kedvedre, majd találd meg kedvenced.</p>
        </div>
        <div className='szekcio'  id='masodikResz' >
          <h1>Hallgasd meg kedvenceinket</h1>
          <p>A rólunk oldalon lehetőséged van meghallgatni a kedvenc zeneszámainkat is.</p>
        </div>
        <div  className='szekcio' id='harmadikResz' >
          <h1>Műfajok</h1>
            <Nav className='grid-cont'>
              <Nav.Link className='grid-item'>Rock <FaCircleArrowRight /></Nav.Link>
              <Nav.Link className='grid-item' id="jobb"><FaCircleArrowLeft /> Metal</Nav.Link>
              <Nav.Link className='grid-item'>Punk <FaCircleArrowRight /></Nav.Link>
              <Nav.Link className='grid-item' id="jobb"><FaCircleArrowLeft /> Folk</Nav.Link>
              <Nav.Link className='grid-item'>Pop <FaCircleArrowRight /></Nav.Link>
              <Nav.Link className='grid-item' id="jobb"><FaCircleArrowLeft /> Jazz</Nav.Link>
            </Nav>
        </div>
        <div className='szekcio'>
          <img src="../public/TMOM_Logo.png" id="Kep" alt="" />
        </div>
      </main>
    </>
  )
}

export default App
