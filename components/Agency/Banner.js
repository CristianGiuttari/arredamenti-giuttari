import React, {Component} from 'react';
import Link from 'next/link';
import '../../node_modules/react-modal-video/scss/modal-video.scss';

class Banner extends Component {

    state = {
        isOpen: false
    };

    openModal = () => {
        this.setState({isOpen: true})
    };

    render() {
        return (
            <React.Fragment>
                <div id="home" className="main-banner jarallax" data-jarallax='{"speed": 0.2}'>
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="main-banner-content">
                                    <h1>La tua casa su misura</h1>
                                    <p>Arredamenti Falegnameria Renato Giuttari</p>
                                    <div className="btn-box">

                                        <Link href="#">
                                            <a className="btn btn-primary">Contattaci</a>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Banner;
