import React from 'react';
import Link from 'next/link';

const SimpleFooter = () => (
        <div className="copyright-area bg-fffcf4">
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
                                    href="https://www.facebook.com/Arredamenti-Falegnameria-Renato-Giuttari-572960006487445">
                                    <a><i className="fab fa-facebook-f"></i></a>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    prefetch={false}
                                    href="https://api.whatsapp.com/send?phone=+393473875848">
                                    <a><i className="fab fa-whatsapp"></i></a>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    prefetch={false}
                                    href="https://www.instagram.com/arredamentigiuttari">
                                    <a><i className="fab fa-instagram"></i></a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
);

export default SimpleFooter;
