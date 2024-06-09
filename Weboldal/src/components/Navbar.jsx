//import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import { NavLink } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import { IoMdMusicalNote } from "react-icons/io";
import { PiHeadphonesBold } from "react-icons/pi";
import { PiRadioBold } from "react-icons/pi";
import { MdOutlineSpeakerGroup } from "react-icons/md";
import { FaRecordVinyl } from "react-icons/fa";
import { FaCompactDisc } from "react-icons/fa";
import { TbBell } from "react-icons/tb";
import { TbBellExclamation } from "react-icons/tb";
import { FaPeopleGroup } from "react-icons/fa6";
import { useState } from 'react';
import { MdMenu } from "react-icons/md";

const Navbar = () => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const toggleDropdown = (dropdown) => {
        setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow} className='navkicsi'>
            <MdMenu />
            </Button>

            <Offcanvas show={show} onHide={handleClose} className="octelefon">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className='cim'><img src="icon.png" alt="" className='ikon' />
                    <h3 className='cim focim'>The Music of Masses</h3></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <hr />
                <h3 className='cim'>Műfajok</h3>
                <NavLink className='linkek' onClick={() => toggleDropdown('folk')}>
                    <IoMdMusicalNote className='bogyosize' /> Folk <button><FaArrowRight /></button>
                </NavLink >
                <div className={`alfolk ${openDropdown === 'folk' ? 'show' : 'hide'}`}>
                    <ul>
                        <li><NavLink className='linkek'> <TbBell /> Magyar folk</NavLink ></li>
                        <li><NavLink className='linkek'> <TbBellExclamation /> Skandináv folk</NavLink ></li>
                    </ul>
                </div>

                <NavLink className='linkek' onClick={() => toggleDropdown('metal')} to={"/Metalvalaszto"}>
                    <PiHeadphonesBold className='bogyosize' /> Metal <button><FaArrowRight /></button></NavLink>
                <div className={`almetal ${openDropdown === 'metal' ? 'show' : 'hide'}`}>
                    <ul>
                        <li><NavLink className='linkek' to={"/heavymetal"}> <TbBellExclamation /> Heavy metal</NavLink ></li>
                        <li><NavLink className='linkek'> <TbBell /> Thrash metal</NavLink ></li>
                        <li><NavLink className='linkek'> <TbBellExclamation /> Gothic metal</NavLink ></li>
                        <li><NavLink className='linkek'> <TbBell /> Death metal</NavLink ></li>
                        <li><NavLink className='linkek'> <TbBellExclamation /> Power metal</NavLink ></li>
                        <li><NavLink className='linkek'> <TbBell /> Symphonic metal</NavLink ></li>
                    </ul>
                </div>

                <NavLink className='linkek' onClick={() => toggleDropdown('pop')}>
                    <FaRecordVinyl className='bogyosize' /> Pop <button><FaArrowRight /></button>
                </NavLink >
                <div className={`alpop ${openDropdown === 'pop' ? 'show' : 'hide'}`}>
                
                    <ul>
                        <li><NavLink className='linkek'  to={"/Kpop"}> <TbBell /> K-pop</NavLink ></li>
                        <li><NavLink className='linkek'> <TbBellExclamation /> Eurobeat</NavLink ></li>
                        <li><NavLink className='linkek'> <TbBell /> Lo-Fi</NavLink ></li>
                        <li><NavLink className='linkek'> <TbBellExclamation /> Schlager pop</NavLink ></li>
                    </ul>
                </div>

                <NavLink className='linkek' onClick={() => toggleDropdown('jazz')}>
                    <PiRadioBold className='bogyosize' /> Jazz <button><FaArrowRight /></button>
                </NavLink >
                <div className={`aljazz ${openDropdown === 'jazz' ? 'show' : 'hide'}`}>
                    <ul>
                        <li><NavLink className='linkek'> <TbBell /> Bepop</NavLink ></li>
                        <li><NavLink className='linkek'> <TbBellExclamation /> Boogie-woogie</NavLink ></li>
                        <li><NavLink className='linkek'> <TbBell /> Smooth jazz</NavLink ></li>
                        <li><NavLink className='linkek'> <TbBellExclamation /> Swing</NavLink ></li>
                    </ul>
                </div>

                <NavLink className='linkek' onClick={() => toggleDropdown('rock')} to={"/Rockvalaszto"}>
                    <MdOutlineSpeakerGroup className='bogyosize' /> Rock <button><FaArrowRight /></button>
                </NavLink >
                <div className={`alrock ${openDropdown === 'rock' ? 'show' : 'hide'}`}>
                    <ul>
                        <li><NavLink className='linkek' to={"/modernrock"}> <TbBellExclamation /> Modern rock</NavLink ></li>
                        <li><NavLink className='linkek' to={"/punkrock"}> <TbBell /> Punk rock</NavLink ></li>
                        <li><NavLink className='linkek' to={"/indierock"}> <TbBellExclamation /> Indie rock</NavLink ></li>
                        <li><NavLink className='linkek'  to={"/classicrock"}> <TbBell /> Classic rock</NavLink ></li>
                        <li><NavLink className='linkek'  to={"/folkrock"}> <TbBellExclamation /> Folk rock</NavLink ></li>
                        <li><NavLink className='linkek'  to={"/rockroll"}> <TbBell /> Rock & Roll</NavLink ></li>
                        <li><NavLink className='linkek' to={"/hardrock"}> <TbBellExclamation /> Hard rock</NavLink ></li>
                    </ul>
                </div>

                <NavLink className='linkek' onClick={() => toggleDropdown('punk')} to={"/Punkvalaszto"}>
                    <FaCompactDisc className='bogyosize' /> Punk <button><FaArrowRight /></button>
                </NavLink >
                <div className={`alpunk ${openDropdown === 'punk' ? 'show' : 'hide'}`}>
                    <ul>
                        <li><NavLink className='linkek' to={"/deathpunk"}> <TbBell /> Deathpunk</NavLink ></li>
                        <li><NavLink className='linkek' to={"/gothicpunk"}> <TbBellExclamation /> Gothic punk</NavLink ></li>
                        <li><NavLink className='linkek' to={"/folkpunk"}> <TbBell /> Folk punk</NavLink ></li>
                    </ul>
                </div>

                <h3 className='cim'>Egyéb oldalak</h3>
                <NavLink className='linkek' to={"/rolunk"}> <FaPeopleGroup className='bogyosize' /> Rólunk</NavLink >
                </Offcanvas.Body>
            </Offcanvas>
            
            
            <Nav className="navigacio flex-column">
                <div className='fejlec'>
                    <img src="icon.png" alt="" className='ikon' />
                    <h3 className='cim focim'>The Music of Masses</h3>
                </div>
                <hr />
                <h3 className='cim'>Műfajok</h3>
                <NavLink className='linkek' onClick={() => toggleDropdown('folk')}>
                    <IoMdMusicalNote className='bogyosize' /> Folk <button><FaArrowRight /></button>
                </NavLink >
                <div className={`alfolk ${openDropdown === 'folk' ? 'show' : 'hide'}`}>
                    <ul>
                        <li><NavLink className='linkek'> <TbBell /> Magyar folk</NavLink ></li>
                        <li><NavLink className='linkek'> <TbBellExclamation /> Skandináv folk</NavLink ></li>
                    </ul>
                </div>

                <NavLink className='linkek' onClick={() => toggleDropdown('metal')} to={"/Metalvalaszto"}>
                    <PiHeadphonesBold className='bogyosize' /> Metal <button><FaArrowRight /></button></NavLink>
                <div className={`almetal ${openDropdown === 'metal' ? 'show' : 'hide'}`}>
                    <ul>
                        <li><NavLink className='linkek' to={"/heavymetal"}> <TbBellExclamation /> Heavy metal</NavLink ></li>
                        <li><NavLink className='linkek'> <TbBell /> Thrash metal</NavLink ></li>
                        <li><NavLink className='linkek'> <TbBellExclamation /> Gothic metal</NavLink ></li>
                        <li><NavLink className='linkek'> <TbBell /> Death metal</NavLink ></li>
                        <li><NavLink className='linkek'> <TbBellExclamation /> Power metal</NavLink ></li>
                        <li><NavLink className='linkek'> <TbBell /> Symphonic metal</NavLink ></li>
                    </ul>
                </div>

                <NavLink className='linkek' onClick={() => toggleDropdown('pop')}>
                    <FaRecordVinyl className='bogyosize' /> Pop <button><FaArrowRight /></button>
                </NavLink >
                <div className={`alpop ${openDropdown === 'pop' ? 'show' : 'hide'}`}>
                    <ul>
                        <li><NavLink className='linkek' to={"/Kpop"}> <TbBell /> K-pop</NavLink ></li>
                        <li><NavLink className='linkek'> <TbBellExclamation /> Eurobeat</NavLink ></li>
                        <li><NavLink className='linkek'> <TbBell /> Lo-Fi</NavLink ></li>
                        <li><NavLink className='linkek'> <TbBellExclamation /> Schlager pop</NavLink ></li>
                    </ul>
                </div>

                <NavLink className='linkek' onClick={() => toggleDropdown('jazz')}>
                    <PiRadioBold className='bogyosize' /> Jazz <button><FaArrowRight /></button>
                </NavLink >
                <div className={`aljazz ${openDropdown === 'jazz' ? 'show' : 'hide'}`}>
                    <ul>
                        <li><NavLink className='linkek'> <TbBell /> Bepop</NavLink ></li>
                        <li><NavLink className='linkek'> <TbBellExclamation /> Boogie-woogie</NavLink ></li>
                        <li><NavLink className='linkek'> <TbBell /> Smooth jazz</NavLink ></li>
                        <li><NavLink className='linkek'> <TbBellExclamation /> Swing</NavLink ></li>
                    </ul>
                </div>

                <NavLink className='linkek' onClick={() => toggleDropdown('rock')} to={"/Rockvalaszto"}>
                    <MdOutlineSpeakerGroup className='bogyosize' /> Rock <button><FaArrowRight /></button>
                </NavLink >
                <div className={`alrock ${openDropdown === 'rock' ? 'show' : 'hide'}`}>
                    <ul>
                        <li><NavLink className='linkek' to={"/modernrock"}> <TbBellExclamation /> Modern rock</NavLink ></li>
                        <li><NavLink className='linkek' to={"/punkrock"}> <TbBell /> Punk rock</NavLink ></li>
                        <li><NavLink className='linkek' to={"/indierock"}> <TbBellExclamation /> Indie rock</NavLink ></li>
                        <li><NavLink className='linkek' to={"/classicrock"}> <TbBell /> Classic rock</NavLink ></li>
                        <li><NavLink className='linkek' to={"/folkrock"}> <TbBellExclamation /> Folk rock</NavLink ></li>
                        <li><NavLink className='linkek' to={"/rockroll"}> <TbBell /> Rock & Roll</NavLink ></li>
                        <li><NavLink className='linkek' to={"/hardrock"}> <TbBellExclamation /> Hard rock</NavLink ></li>
                    </ul>
                </div>

                <NavLink className='linkek' onClick={() => toggleDropdown('punk')} to={"/Punkvalaszto"}>
                    <FaCompactDisc className='bogyosize' /> Punk <button><FaArrowRight /></button>
                </NavLink >
                <div className={`alpunk ${openDropdown === 'punk' ? 'show' : 'hide'}`}>
                    <ul>
                        <li><NavLink className='linkek' to={"/deathpunk"}> <TbBell /> Deathpunk</NavLink ></li>
                        <li><NavLink className='linkek' to={"/gothicpunk"}> <TbBellExclamation /> Gothic punk</NavLink ></li>
                        <li><NavLink className='linkek' to={"/folkpunk"}> <TbBell /> Folk punk</NavLink ></li>
                    </ul>
                </div>

                <h3 className='cim'>Egyéb oldalak</h3>
                <NavLink className='linkek' to={"/rolunk"}> <FaPeopleGroup className='bogyosize' /> Rólunk</NavLink >
            </Nav>
        </>
    )
};

export default Navbar;
