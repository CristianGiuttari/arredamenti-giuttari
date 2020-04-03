import React, {Component} from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    navText: [
        "<i class='fas fa-angle-left'></i>",
        "<i class='fas fa-angle-right'></i>"
    ],
    responsive: {
        0: {
            items: 2,
        },
        768: {
            items: 3,
        },
        1024: {
            items: 4,
        },
        1200: {
            items: 6,
        }
    }
}

class Partner extends Component {

    state = {display: false};

    componentDidMount() {
        this.setState({display: true})
    }

    render() {
        return (
            <section className="partner-area">
                <div className="container">
                    <h3>I migliori marchi selezionati per voi</h3>

                    <div className="row">
                        {this.state.display ? <OwlCarousel
                            className="partner-slides owl-carousel owl-theme"
                            {...options}
                        >
                            <div className="col-lg-12 col-md-12">
                                <div className="partner-item">
                                    <Link href="https://www.creokitchens.it/" prefetch={false}>
                                        <a>
                                            <img src={require('../../images/loghiarredi/logo-creo.png')} alt="logo"/>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                                <div className="partner-item">
                                    <Link href="https://www.cucinelube.it/"  prefetch={false}>
                                        <a>
                                            <img src={require('../../images/loghiarredi/logo-lube.png')} alt="logo"/>
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="partner-item">
                                    <Link href="https://www.cucinelube.it/" prefetch={false} >
                                        <a>
                                            <img src={require('../../images/loghiarredi/logo-adriatica.png')}
                                                 alt="logo"/>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                                <div className="partner-item">
                                    <Link href="https://www.cucinelube.it/" prefetch={false}>
                                        <a>
                                            <img src={require('../../images/loghiarredi/Logo-colombini.png')}
                                                 alt="logo"/>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                                <div className="partner-item">
                                    <Link href="https://www.cucinelube.it/" prefetch={false}>
                                        <a>
                                            <img src={require('../../images/loghiarredi/logo-compab.png')} alt="logo"/>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                                <div className="partner-item">
                                    <Link href="https://www.cucinelube.it/" prefetch={false}>
                                        <a>
                                            <img src={require('../../images/loghiarredi/logo-dal-cin.png')} alt="logo"/>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                                <div className="partner-item">
                                    <Link href="https://www.cucinelube.it/" prefetch={false}>
                                        <a>
                                            <img src={require('../../images/loghiarredi/logo-ennerev.png')} alt="logo"/>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                                <div className="partner-item">
                                    <Link href="https://www.cucinelube.it/" prefetch={false}>
                                        <a>
                                            <img src={require('../../images/loghiarredi/logo-maronese.png')}
                                                 alt="logo"/>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                                <div className="partner-item">
                                    <Link href="https://www.cucinelube.it/" prefetch={false}>
                                        <a>
                                            <img src={require('../../images/loghiarredi/logo-newtrend.png')}
                                                 alt="logo"/>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                                <div className="partner-item">
                                    <Link href="https://www.cucinelube.it/" prefetch={false}>
                                        <a>
                                            <img src={require('../../images/loghiarredi/logo-seggiola.png')}
                                                 alt="logo"/>
                                        </a>
                                    </Link>
                                </div>
                            </div>               <div className="col-lg-12 col-md-12">
                                <div className="partner-item">
                                    <Link href="https://www.cucinelube.it/" prefetch={false}>
                                        <a>
                                            <img src={require('../../images/loghiarredi/logo-seggiola.png')}
                                                 alt="logo"/>
                                        </a>
                                    </Link>
                                </div>
                            </div>               <div className="col-lg-12 col-md-12">
                                <div className="partner-item">
                                    <Link href="https://www.cucinelube.it/" prefetch={false}>
                                        <a>
                                            <img src={require('../../images/loghifalegnameria/Cosmet.png')}
                                                 alt="logo"/>
                                        </a>
                                    </Link>
                                </div>
                            </div>               <div className="col-lg-12 col-md-12">
                                <div className="partner-item">
                                    <Link href="https://www.cucinelube.it/" prefetch={false}>
                                        <a>
                                            <img src={require('../../images/loghifalegnameria/Eclisse.png')}
                                                 alt="logo"/>
                                        </a>
                                    </Link>
                                </div>
                            </div>               <div className="col-lg-12 col-md-12">
                                <div className="partner-item">
                                    <Link href="https://www.cucinelube.it/" prefetch={false}>
                                        <a>
                                            <img src={require('../../images/loghifalegnameria/interno_ferrero.png')}
                                                 alt="logo"/>
                                        </a>
                                    </Link>
                                </div>
                            </div>               <div className="col-lg-12 col-md-12">
                                <div className="partner-item">
                                    <Link href="https://www.cucinelube.it/" prefetch={false}>
                                        <a>
                                            <img src={require('../../images/loghifalegnameria/Legnoform-logo.png')}
                                                 alt="logo"/>
                                        </a>
                                    </Link>
                                </div>
                            </div>               <div className="col-lg-12 col-md-12">
                                <div className="partner-item">
                                    <Link href="https://www.cucinelube.it/" prefetch={false}>
                                        <a>
                                            <img src={require('../../images/loghifalegnameria/LOGO-SIMAR-ver-1.png')}
                                                 alt="logo"/>
                                        </a>
                                    </Link>
                                </div>
                            </div>               <div className="col-lg-12 col-md-12">
                                <div className="partner-item">
                                    <Link href="https://www.cucinelube.it/" prefetch={false}>
                                        <a>
                                            <img src={require('../../images/loghifalegnameria/LOGO_GARDESA.png')}
                                                 alt="logo"/>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                                <div className="partner-item">
                                    <Link href="https://www.cucinelube.it/" prefetch={false}>
                                        <a>
                                            <img src={require('../../images/loghifalegnameria/mottura_logo.png')}
                                                 alt="logo"/>
                                        </a>
                                    </Link>
                                </div>
                            </div> <div className="col-lg-12 col-md-12">
                                <div className="partner-item">
                                    <Link href="https://www.cucinelube.it/" prefetch={false}>
                                        <a>
                                            <img src={require('../../images/loghifalegnameria/toscocornici-logo.png')}
                                                 alt="logo"/>
                                        </a>
                                    </Link>
                                </div>
                            </div> <div className="col-lg-12 col-md-12">
                                <div className="partner-item">
                                    <Link href="https://www.cucinelube.it/" prefetch={false}>
                                        <a>
                                            <img src={require('../../images/loghifalegnameria/Velux_logo.svg.png')}
                                                 alt="logo"/>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </OwlCarousel> : ''}
                    </div>
                </div>
            </section>
        );
    }
}

export default Partner;
