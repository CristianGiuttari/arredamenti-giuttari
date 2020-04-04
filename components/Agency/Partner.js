import React, {useEffect, useState} from 'react';
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
;

const partners = [
    {
        imgSrc: require("../../images/loghifalegnameria/interno_ferrero.png"),
        url: "https://www.ferrerolegno.com/",
        alt: "ferrero legno"
    },
    {imgSrc: require("../../images/loghiarredi/logo-lube.png"), url: "https://www.cucinelube.it/", alt: "cucine lube"},
    {
        imgSrc: require("../../images/loghiarredi/logo-creo.png"),
        url: "https://www.creokitchens.it/",
        alt: "creo kitchen"
    },
    {
        imgSrc: require("../../images/loghiarredi/logo-adriatica.png"),
        url: "https://www.adriaticamobili.com/",
        alt: "adriatica mobili"
    },
    {
        imgSrc: require("../../images/loghiarredi/Logo-colombini.png"),
        url: "https://www.colombinicasa.com/",
        alt: "colombini casa"
    },
    {imgSrc: require("../../images/loghiarredi/logo-compab.png"), url: "https://compab.it/", alt: "compab"},
    {
        imgSrc: require("../../images/loghiarredi/logo-dal-cin.png"),
        url: "http://www.mobilificiodalcin.it/",
        alt: "mobilificio dal ci"
    },
    {imgSrc: require("../../images/loghiarredi/logo-ennerev.png"), url: "http://www.ennerev.it/", alt: "ennerev"},
    {
        imgSrc: require("../../images/loghiarredi/logo-maronese.png"),
        url: "https://www.maroneseacf.com/",
        alt: "maronesea"
    },
    {
        imgSrc: require("../../images/loghiarredi/logo-newtrend.png"),
        url: "https://www.newtrendconcepts.it/",
        alt: "new trend concept"
    },
    {
        imgSrc: require("../../images/loghiarredi/logo-seggiola.png"),
        url: "https://www.laseggiola.it/",
        alt: "la seggiola"
    },
    {
        imgSrc: require("../../images/loghifalegnameria/Cosmet.png"),
        url: "https://www.cosmet-infissi.com/",
        alt: "cosmet infissi"
    },
    {imgSrc: require("../../images/loghifalegnameria/Eclisse.png"), url: "https://www.eclisse.it/", alt: "eclisse"},
    {
        imgSrc: require("../../images/loghifalegnameria/Legnoform-logo.png"),
        url: "http://www.legnoform.it/",
        alt: "legno form"
    },
    {
        imgSrc: require("../../images/loghifalegnameria/LOGO-SIMAR-ver-1.png"),
        url: "https://www.simarsrl.it/",
        alt: "simar srl"
    },
    {
        imgSrc: require("../../images/loghifalegnameria/LOGO_GARDESA.png"),
        url: "https://www.gardesa.com/",
        alt: "gardesa"
    },
    {
        imgSrc: require("../../images/loghifalegnameria/mottura_logo.png"),
        url: "https://www.mottura.it/",
        alt: "mottura"
    },
    {
        imgSrc: require("../../images/loghifalegnameria/toscocornici-logo.png"),
        url: "https://www.toscocornici.it/",
        alt: "tosco cornici"
    },
    {imgSrc: require("../../images/loghifalegnameria/Velux_logo.svg.png"), url: "https://www.velux.it/", alt: "velux"}
];

const Partner = () => {

    const [display, setDisplay] = useState(false);

    useEffect(() => setDisplay(true), []);

    return (
        <section className="partner-area">
            <div className="container">
                <h3>I migliori marchi selezionati per voi</h3>

                <div className="row">
                    {display ? <OwlCarousel
                        className="partner-slides owl-carousel owl-theme"
                        {...options}
                    >
                        {partners.map(({imgSrc, url, alt}) => (
                            <div key={alt} className="col-lg-12 col-md-12">
                                <div className="partner-item">
                                    <a href={url} target="_blank">
                                        <img src={imgSrc} alt={alt}/>
                                    </a>
                                </div>
                            </div>))
                        }
                    </OwlCarousel> : ''}
                </div>
            </div>
        </section>
    );
};

export default Partner;
