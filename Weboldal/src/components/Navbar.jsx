//import React from 'react';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import { FaArrowRight } from "react-icons/fa";
import { IoMdMusicalNote } from "react-icons/io";
import { useState } from 'react';


const Navbar = () => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (dropdown) => {
        setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    }

    return (
        <>
            <Nav className="navigacio flex-column">
                <div>
                    <img src="icon.png" alt="" className='ikon' />
                    <h3 className='cim focim'>The Music of Masses</h3>
                </div>
                <hr />
                <h3 className='cim'>Műfajok</h3>
                <Nav.Link className='linkek' onClick={() => toggleDropdown('folk')}>
                <IoMdMusicalNote className='bogyosize' /> Folk <button><FaArrowRight /></button>
                </Nav.Link>
                <div className={`alfolk ${openDropdown === 'folk' ? 'show' : 'hide'}`}>
                    <ul>
                        <li><Nav.Link className='linkek'>Magyar folk</Nav.Link></li>
                        <li><Nav.Link className='linkek'>Skandináv folk</Nav.Link></li>
                    </ul>
                </div>

                <Nav.Link className='linkek' onClick={() => toggleDropdown('metal')}>
                    Metal <button><FaArrowRight /></button>
                </Nav.Link>
                <div className={`almetal ${openDropdown === 'metal' ? 'show' : 'hide'}`}>
                    <ul>
                        <li><Nav.Link className='linkek'>Heavy metal</Nav.Link></li>
                        <li><Nav.Link className='linkek'>Thrash metal</Nav.Link></li>
                        <li><Nav.Link className='linkek'>Gothic metal</Nav.Link></li>
                        <li><Nav.Link className='linkek'>Death metal</Nav.Link></li>
                        <li><Nav.Link className='linkek'>Power metal</Nav.Link></li>
                        <li><Nav.Link className='linkek'>Symphonic metal</Nav.Link></li>
                    </ul>
                </div>

                <Nav.Link className='linkek' onClick={() => toggleDropdown('pop')}>
                    Pop <button><FaArrowRight /></button>
                </Nav.Link>
                <div className={`alpop ${openDropdown === 'pop' ? 'show' : 'hide'}`}>
                    <ul>
                        <li><Nav.Link className='linkek'>K-pop</Nav.Link></li>
                        <li><Nav.Link className='linkek'>Eurobeat</Nav.Link></li>
                        <li><Nav.Link className='linkek'>Lo-Fi</Nav.Link></li>
                        <li><Nav.Link className='linkek'>Schlager pop</Nav.Link></li>
                    </ul>
                </div>

                <Nav.Link className='linkek' onClick={() => toggleDropdown('jazz')}>
                    Jazz <button><FaArrowRight /></button>
                </Nav.Link>
                <div className={`aljazz ${openDropdown === 'jazz' ? 'show' : 'hide'}`}>
                    <ul>
                        <li><Nav.Link className='linkek'>Bepop</Nav.Link></li>
                        <li><Nav.Link className='linkek'>Boogie-woogie</Nav.Link></li>
                        <li><Nav.Link className='linkek'>Smooth jazz</Nav.Link></li>
                        <li><Nav.Link className='linkek'>Swing</Nav.Link></li>
                    </ul>
                </div>

                <Nav.Link className='linkek' onClick={() => toggleDropdown('rock')}>
                    Rock <button><FaArrowRight /></button>
                </Nav.Link>
                <div className={`alrock ${openDropdown === 'rock' ? 'show' : 'hide'}`}>
                    <ul>
                        <li><Nav.Link className='linkek'>Modern rock</Nav.Link></li>
                        <li><Nav.Link className='linkek'>Punk rock</Nav.Link></li>
                        <li><Nav.Link className='linkek'>Indie rock</Nav.Link></li>
                        <li><Nav.Link className='linkek'>Classic rock</Nav.Link></li>
                        <li><Nav.Link className='linkek'>Folk rock</Nav.Link></li>
                        <li><Nav.Link className='linkek'>Rock & Roll</Nav.Link></li>
                        <li><Nav.Link className='linkek'>Hard rock</Nav.Link></li>
                    </ul>
                </div>

                <Nav.Link className='linkek' onClick={() => toggleDropdown('punk')}>
                    Punk <button><FaArrowRight /></button>
                </Nav.Link>
                <div className={`alpunk ${openDropdown === 'punk' ? 'show' : 'hide'}`}>
                    <ul>
                        <li><Nav.Link className='linkek'>Deathpunk</Nav.Link></li>
                        <li><Nav.Link className='linkek'>Gothic punk</Nav.Link></li>
                        <li><Nav.Link className='linkek'>Folk punk</Nav.Link></li>
                    </ul>
                </div>

                <h3 className='cim'>Egyéb oldalak</h3>
                <Nav.Link className='linkek'>Rólunk</Nav.Link>
            </Nav>
        </>
    )
};

export default Navbar;
