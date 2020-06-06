import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import SeoSection from './SeoSection';
import clsx from "clsx";

const Navbar = () => {

    const [collapsed, setCollapsed] = useState(true);
    const [isSticky, setIsSticky] = useState(false);

    const toggleNavbarIsCollapsed = () => setCollapsed(oldValue => !oldValue);

    useEffect(() => {
        let mainNavLinks = document.querySelectorAll("nav ul li a");
        const callback = () => {
            let fromTop = window.scrollY;

            setIsSticky(fromTop > 170);

            mainNavLinks.forEach(link => {
                if (link.hash) {
                    let section = document.querySelector(link.hash);
                    if (
                        section && section.offsetTop <= fromTop &&
                        section.offsetTop + section.offsetHeight > fromTop
                    ) {
                        link.classList.add("active");
                    } else {
                        link.classList.remove("active");
                    }
                }
            });
        };

        window.addEventListener("scroll", callback);
        return () => window.removeEventListener('scroll', callback)
    }, []);

    return (
        <React.Fragment>
            <SeoSection
                title="Arredamenti falegnameria Renato Giuttari"
                desc="Arredamenti Falegnameria Renato Giuttari offre una vasta scelta di arredi interni o esterni, tettoie, infissi e parquet, su misura per te o da brand certificati. Dal cartongesso alla tenda per interni. Dal progetto alla posa in opera."
                url="https://arredamentigiuttari.it"
            />
            <nav id="navbar"
                 className={clsx("navbar navbar-expand-lg navbar-style-one navbar-light bg-light", isSticky && "is-sticky")}>
                <div className="container">
                    <Link href="/">
                        <a className="navbar-brand">
                            <img src={require("../../images/RG80White.png")} alt="logo"/>
                            <img src={require('../../images/RG80.png')} alt="logo"/>
                        </a>
                    </Link>


                    <button
                        onClick={toggleNavbarIsCollapsed}
                        className={clsx('navbar-toggler navbar-toggler-right', collapsed && 'collapsed')}
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={clsx('navbar-collapse collapse', !collapsed && 'show')}
                         id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link href="/" as="/">
                                    <a className="nav-link">
                                        Home
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <AnchorLink
                                    onClick={toggleNavbarIsCollapsed}
                                    offset={() => 0}
                                    className="nav-link"
                                    href="#about"
                                >
                                    Chi siamo
                                </AnchorLink>
                            </li>
                            <li className="nav-item">
                                <AnchorLink
                                    onClick={toggleNavbarIsCollapsed}
                                    offset={() => 0}
                                    className="nav-link"
                                    href="#services"
                                >
                                    Servizi
                                </AnchorLink>
                            </li>
                            <li className="nav-item">
                                <Link href="[uid]" as="progettazione">
                                    <a className="nav-link">
                                        Progettazione
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <AnchorLink
                                    onClick={toggleNavbarIsCollapsed}
                                    offset={() => 200}
                                    className="nav-link"
                                    href="#contact"
                                >
                                    Contatti
                                </AnchorLink>
                            </li>
                        </ul>

                        <ul className="others-option">
                            <li>

                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    );
}

export default Navbar;
