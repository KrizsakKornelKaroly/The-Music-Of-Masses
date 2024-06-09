import Navbar from "../../components/Navbar";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ReactModal from 'react-modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Rolunk.css";
import { IoMdClose } from "react-icons/io";



const Rolunk = () => {
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);

    return (
        <>
            <Navbar />
            <main className="rolunkMain">
                <div className="rolunkFlex">
                    <div>
                        <Button onClick={() => setShow1(true)} className="rolunkGomb">
                            <img src="/OG.png" alt="" />
                            <p className="rolNev">Ohradka Gergő</p>
                        </Button>
                    </div>

                    <div>
                        <Button onClick={() => setShow2(true)} className="rolunkGomb">
                            <img src="/BEA.png" alt="" />
                            <p className="rolNev">Bujáki Erik</p>
                        </Button>
                    </div>
                    <div>
                        <Button onClick={() => setShow3(true)} className="rolunkGomb">
                            <img src="/KK.png" alt="" />
                            <p className="rolNev">Krizsák Kornél</p>
                        </Button>
                    </div>
                </div>

                <ReactModal
                    isOpen={show1}>
                    <div id="full_description">
                        <div className="rolunkMaradsz">
                        <img src="/OG.png" alt="" className="rGeri"/>
                            <p>Ohradka Gergő</p>
                        </div>
                            
                        <div>
                            <button className="bezaras" onClick=
                                {() => setShow1(!show1)}>
                                <IoMdClose />
                            </button>
                        </div>
                    </div>
                </ReactModal>


            </main>

        </>
    )
}

export default Rolunk;