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
                                <p>Arredamenti Falegnameria Renato Giuttari nasce  .....
                                     kljdfsaahjkadskjhkjdfhhjdsf
                                     dssfhjkdhfkj dl sfhdlsalj fdhkjh kldsaof ll hdff
                                    offre una vasta scelta di arredi interni o esterni, tettoie, infissi e parquet, su misura per te o da brand certificati. Dal cartongesso alla tenda per interni. Dal progetto alla posa in opera.</p>

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
