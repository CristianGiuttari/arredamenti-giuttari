import React, { Component } from 'react';

class Features extends Component {
    render() {
        return (
            <section id="services2" className="features-area ptb-100 bg-f9f9f9">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-features">
                                <div className="icon bg2">
                                    <i className="fas fa-truck"></i>
                                </div>
                                <h3>Consegna</h3>
                                <p>Consegna direttamente sul posto anche con elevatore</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-features">
                                <div className="icon bg5">
                                    <i className="fas fa-tools"></i>
                                </div>
                                <h3>Montaggio</h3>
                                <p>Posatori altamenti qualificati monteranno a regola d'arte i nostri prodotti</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-features">
                                <div className="icon bg3">
                                    <i className="fas fa-euro-sign"></i>
                                </div>
                                <h3>Pagamenti agevolati</h3>
                                <p>Anche con comodi finanziamenti</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Features;
