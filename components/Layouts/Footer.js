import React from 'react';
import Link from 'next/link';

const Footer = () => (
    <footer className="footer-area bg-fffcf4" id="contact">
        <div className="container">
            <div className="row">


                <div className="col-lg-4 col-md-6">
                    <div className="single-footer-widget">
                        <h3>Orari di apertura</h3>

                        <ul className="list time">
                            <li>
                                LUNEDI MERCOLEDI VENERDI
                                <span>9:00 - 13 / 15:00 - 17:30 </span>
                            </li>
                            <li>
                                MARTEDI GIOVEDI
                                <span>9:00 - 13 / 15:00 - 19:30 </span>
                            </li>
                            <li>
                                SABATO
                                <span>su appuntamento </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className="single-footer-widget">
                        <h3>Falegnameria</h3>
                        <ul className="contact-info">
                            <li>
                                <i className="fas fa-map-marker-alt"></i>
                                <span>Indirizzo:</span>
                                <a href="https://goo.gl/maps/Hg3wqQWLVjs42XGL6" target="_blank" >
                                    Via Carcile, 16/18 – Loc. Protonotaro
                                    98053 CASTROREALE (ME)</a>
                            </li>
                            <li>
                                <i className="fas fa-phone"></i>
                                <span>Telefono:</span>
                                <a href="tel:0909731753" >090 97 31 753</a>
                            </li>
                            <li>
                                <i className="fas fa-phone"></i>
                                <span>Cellulare:</span>
                                <a href="tel:+393339761121">+39 333 976 11 21</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="single-footer-widget">
                        <h3>Amministrazione</h3>
                        <ul className="contact-info">
                            <li>
                                <i className="fas fa-map-marker-alt"></i>
                                <span>Indirizzo:</span>
                                <a href="https://goo.gl/maps/n2vUCebAdHykKQ5t6" target="_blank" >Via Provinciale C.da Vernacola – Loc.
                                    Protonotaro
                                    98053 CASTROREALE (ME)</a>
                            </li>
                            <li>
                                <i className="fas fa-envelope"></i>
                                <span>Email:</span>
                                <a href="mailto:arredamentigiuttari@live.it">arredamentigiuttari@live.it</a>
                            </li>
                            <li>
                                <i className="fas fa-envelope"></i>
                                <span>Email pec:</span>
                                renato.giuttari@pec.it
                            </li>

                            <li>
                                <i className="fas fa-phone"></i>
                                <span>Telefono:</span>
                                <a href="tel:+393473875848">+39 347 38 75 848</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>

        <div className="copyright-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7 col-md-7">
                        <p>Part. Iva 01367560834</p><p>C.F. GTTRNT62M25F951D</p><p> Codice SDI 6JXPS2J</p>
                    </div>

                    <div className="col-lg-5 col-md-5">
                        <ul>
                            <li>
                                <Link
                                    prefetch={false}
                                    href="https://www.facebook.com/Arredamenti-Falegnameria-Renato-Giuttari-572960006487445" >
                                    <a><i className="fab fa-facebook-f"></i></a>
                                </Link>
                            </li>    <li>
                                <Link
                                    prefetch={false}
                                    href="https://api.whatsapp.com/send?phone=+393473875848">
                                    <a><i className="fab fa-whatsapp"></i></a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a><i className="fab fa-instagram"></i></a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className="map2">
            <img src={require('../../images/map2.png')} alt="map"/>
        </div>
    </footer>
);

export default Footer;
