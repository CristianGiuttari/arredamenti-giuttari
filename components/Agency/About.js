import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <section id="about" className="about-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-image">
                                <img src={require('../../images/about-img1.jpg')} alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="about-content">
                                <h2>Benvenuti</h2>
                                <p>Qualità, professionalità, stile, design, cortesia, sostenibilità e passione
                                    sono le parole chiavi che caratterizzano la nostra azienda
                                    Arredamenti Falegnameria Renato Giuttari offre una vasta scelta di arredi
                                    per interni ed esterni, da brand qualificati e certificati MADE IN ITALY
                                    oppure creati su misura per te nei nostri laboratori da ebanisti qualificati.
                                    Seguiamo i tuoi desideri dal progetto alla posa in opera, dalla singola
                                    parete in cartongesso al montaggio di tendaggi per i tuoi interni.
                                    Ci teniamo a fornire prodotti certificati con bassissime quantità di
                                    formaldeide, dalle cucine alle porte per interno, dalle coperture in legno
                                    ai parquet.
                                    Vi aspettiamo nei nostri Showroom per scegliere insieme l’arredo su
                                    misura per te.</p>

                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="single-inner-content">
                                            <div className="title">
                                                <div className="icon">
                                                    <i className="fas fa-couch"></i>
                                                </div>

                                                <h3>Arredamenti</h3>
                                            </div>

                                            <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan facilisis.</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="single-inner-content">
                                            <div className="title">
                                                <div className="icon">
                                                    <i className="fas fa-chair"></i>
                                                </div>

                                                <h3>Falegnameria</h3>
                                            </div>

                                            <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan facilisis.</p>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;
