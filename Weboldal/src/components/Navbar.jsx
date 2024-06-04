//import React from 'react';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
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


const Navbar = () => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (dropdown) => {
        setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    }

    return (
        <>
            <Nav className="navigacio flex-column">
                <div className='fejlec'>
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
                        <li><Nav.Link className='linkek'> <TbBell /> Magyar folk</Nav.Link></li>
                        <li><Nav.Link className='linkek'> <TbBellExclamation /> Skandináv folk</Nav.Link></li>
                    </ul>
                </div>

                <Nav.Link className='linkek' onClick={() => toggleDropdown('metal')}>
                <PiHeadphonesBold className='bogyosize' /> Metal <button><FaArrowRight /></button>
                </Nav.Link>
                <div className={`almetal ${openDropdown === 'metal' ? 'show' : 'hide'}`}>
                    <ul>
                        <li><Nav.Link className='linkek'> <TbBellExclamation /> Heavy metal</Nav.Link></li>
                        <li><Nav.Link className='linkek'> <TbBell /> Thrash metal</Nav.Link></li>
                        <li><Nav.Link className='linkek'> <TbBellExclamation /> Gothic metal</Nav.Link></li>
                        <li><Nav.Link className='linkek'> <TbBell /> Death metal</Nav.Link></li>
                        <li><Nav.Link className='linkek'> <TbBellExclamation /> Power metal</Nav.Link></li>
                        <li><Nav.Link className='linkek'> <TbBell /> Symphonic metal</Nav.Link></li>
                    </ul>
                </div>

                <Nav.Link className='linkek' onClick={() => toggleDropdown('pop')}>
                <FaRecordVinyl className='bogyosize' /> Pop <button><FaArrowRight /></button>
                </Nav.Link>
                <div className={`alpop ${openDropdown === 'pop' ? 'show' : 'hide'}`}>
                    <ul>
                        <li><Nav.Link className='linkek'> <TbBell /> K-pop</Nav.Link></li>
                        <li><Nav.Link className='linkek'> <TbBellExclamation /> Eurobeat</Nav.Link></li>
                        <li><Nav.Link className='linkek'> <TbBell /> Lo-Fi</Nav.Link></li>
                        <li><Nav.Link className='linkek'> <TbBellExclamation /> Schlager pop</Nav.Link></li>
                    </ul>
                </div>

                <Nav.Link className='linkek' onClick={() => toggleDropdown('jazz')}>
                <PiRadioBold className='bogyosize' /> Jazz <button><FaArrowRight /></button>
                </Nav.Link>
                <div className={`aljazz ${openDropdown === 'jazz' ? 'show' : 'hide'}`}>
                    <ul>
                        <li><Nav.Link className='linkek'> <TbBell /> Bepop</Nav.Link></li>
                        <li><Nav.Link className='linkek'> <TbBellExclamation /> Boogie-woogie</Nav.Link></li>
                        <li><Nav.Link className='linkek'> <TbBell /> Smooth jazz</Nav.Link></li>
                        <li><Nav.Link className='linkek'> <TbBellExclamation /> Swing</Nav.Link></li>
                    </ul>
                </div>

                <Nav.Link className='linkek' onClick={() => toggleDropdown('rock')}>
                <MdOutlineSpeakerGroup className='bogyosize' /> Rock <button><FaArrowRight /></button>
                </Nav.Link>
                <div className={`alrock ${openDropdown === 'rock' ? 'show' : 'hide'}`}>
                    <ul>
                        <li><Nav.Link className='linkek'> <TbBellExclamation /> Modern rock</Nav.Link></li>
                        <li><Nav.Link className='linkek'> <TbBell /> Punk rock</Nav.Link></li>
                        <li><Nav.Link className='linkek'> <TbBellExclamation /> Indie rock</Nav.Link></li>
                        <li><Nav.Link className='linkek'> <TbBell /> Classic rock</Nav.Link></li>
                        <li><Nav.Link className='linkek'> <TbBellExclamation /> Folk rock</Nav.Link></li>
                        <li><Nav.Link className='linkek'> <TbBell /> Rock & Roll</Nav.Link></li>
                        <li><Nav.Link className='linkek'> <TbBellExclamation /> Hard rock</Nav.Link></li>
                    </ul>
                </div>

                <Nav.Link className='linkek' onClick={() => toggleDropdown('punk')}>
                <FaCompactDisc className='bogyosize' /> Punk <button><FaArrowRight /></button>
                </Nav.Link>
                <div className={`alpunk ${openDropdown === 'punk' ? 'show' : 'hide'}`}>
                    <ul>
                        <li><Nav.Link className='linkek'> <TbBell /> Deathpunk</Nav.Link></li>
                        <li><Nav.Link className='linkek'> <TbBellExclamation /> Gothic punk</Nav.Link></li>
                        <li><Nav.Link className='linkek'> <TbBell /> Folk punk</Nav.Link></li>
                    </ul>
                </div>

                <h3 className='cim'>Egyéb oldalak</h3>
                <Nav.Link className='linkek'> <FaPeopleGroup className='bogyosize' /> Rólunk</Nav.Link>
            </Nav>
        </>
    )
};

export default Navbar;
