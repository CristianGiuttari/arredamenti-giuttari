import React, {Component} from 'react';
import Link from 'next/link';

class Footer extends Component {
    render() {
        return (
            <footer className="footer-area bg-fffcf4">
                <div className="container" id="contact">
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
                                        <span>9:00 - 13 / 15:00 - 17:30 </span>
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
                                        Via Carcile, 16/18 – Loc. Protonotaro
                                        98053 CASTROREALE (ME)
                                    </li>
                                    <li>
                                        <i className="fas fa-phone"></i>
                                        <span>Telefono:</span>
                                        <a href="#">090 97 31 753</a>
                                    </li>
                                    <li>
                                        <i className="fas fa-phone"></i>
                                        <span>Cellulare:</span>
                                        <a href="#">+39 333 976 11 21</a>
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
                                        Via Provinciale C.da Vernacola – Loc. Protonotaro
                                        98053 CASTROREALE (ME)
                                    </li>
                                    <li>
                                        <i className="fas fa-envelope"></i>
                                        <span>Email:</span>
                                        <a href="#">arredamentigiuttari@plive.it</a>
                                    </li>

                                    <li>
                                        <i className="fas fa-phone"></i>
                                        <span>Telefono:</span>
                                        <a href="#">+39 347 38 75 848</a>
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
                                        <Link href="#">
                                            <a><i className="fab fa-facebook-f"></i></a>
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
    }
}

export default Footer;
