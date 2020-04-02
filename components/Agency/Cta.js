import React, {Component} from 'react';
import ModalVideo from 'react-modal-video';
import '../../node_modules/react-modal-video/scss/modal-video.scss';

class Cta extends Component {

    state = {
        isOpen: false
    };

    openModal = () => {
        this.setState({isOpen: true})
    };


    render() {
        return (
            <React.Fragment>
                <section id="services" className="cta-area ptb-100 jarallax pb-0" data-jarallax='{"speed": 0.2}'>
                    <div className="container">
                        <div className="cta-content">
                            <h2>I nostri servizi</h2>
                        </div>

                        <div className="cta-inner-content">
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-cta-box">
                                        <i className="fas fa-layer-group"></i>
                                        <h3>Catalogo</h3>
                                        <p>Tanti articoli selezionati dai migliori brand italiani</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="single-cta-box">
                                        <i className="fas fa-pencil-ruler"></i>
                                        <h3>Progettazione</h3>
                                        <p>Un progettista qualificato disegnerà in 3D l'arredamento ideale per la vostra
                                            casa</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                                    <div className="single-cta-box">
                                        <i className="fas fa-broom"></i>
                                        <h3>Realizzazioni su misura</h3>
                                        <p>Ebanisti qualificati realizzeranno tutto ciò che su misura non troverai nei
                                            nostri brand con attenzione a materiali certificati e verniciature a basse
                                            quantità di formaldeide</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <ModalVideo
                    channel='youtube'
                    isOpen={this.state.isOpen}
                    videoId='szuchBiLrEM'
                    onClose={() => this.setState({isOpen: false})}
                />
            </React.Fragment>
        );
    }
}

export default Cta;
