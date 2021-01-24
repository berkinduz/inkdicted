import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import faCompass from '@fortawesome/fontawesome-free-solid/faCompass';
import faPhone from '@fortawesome/fontawesome-free-solid/faPhone';
import faClock from '@fortawesome/fontawesome-free-solid/faClock';
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope';


const Footer = () => {
    return (
        <footer className="bck_b_dark">
            <div className="container">
                <div className="logo">
                    Inkdicted
                </div>
                <div className="wrapper">
                    <div className="left">
                        <h2>Contact information</h2>
                        <div className="business_nfo">
                            <div className="tag">
                                <FontAwesomeIcon
                                    icon={faCompass}
                                    className="icon"
                                />
                                <div className="nfo">
                                    <div>Address</div>
                                    <div>Izmir/Turkey 35370</div>
                                </div>
                            </div>
                            <div className="tag">
                                <FontAwesomeIcon
                                    icon={faPhone}
                                    className="icon"
                                />
                                <div className="nfo">
                                    <div>Phone</div>
                                    <div>0542 434 7384</div>
                                </div>
                            </div>
                            <div className="tag">
                                <FontAwesomeIcon
                                    icon={faClock}
                                    className="icon"
                                />
                                <div className="nfo">
                                    <div>Working hours</div>
                                    <div>09:00 - 23:00</div>
                                </div>
                            </div>
                            <div className="tag">
                                <FontAwesomeIcon
                                    icon={faEnvelope}
                                    className="icon"
                                />
                                <div className="nfo">
                                    <div>Email</div>
                                    <div>duzberkin@gmail.com</div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className="left">
                        <h2>Manisa Celal Bayar University / Graduation Project 2</h2>
                        <div>
                            <div>
                            130315002 /  Mümin Berkin Düz
                            </div>
                        </div>
                    </div>      
                </div>
            </div>
        </footer>
    );
};

export default Footer;