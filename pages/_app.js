import '../assets/css/bootstrap.min.css';
import '../assets/css/animate.min.css';
import '../assets/css/fontawesome.min.css';
import '../assets/css/style.css';

import { Preloader, Placeholder } from 'react-preloading-screen';
import React from 'react';
import App from 'next/app';
import { DefaultSeo } from 'next-seo';
import Loader from '../components/Shared/Loader';
import GoTop from '../components/Shared/GoTop';

export default class MyApp extends App {
    render () {
        const { Component, pageProps } = this.props

        return (
            <>
                <DefaultSeo
                    openGraph={{
                        type: 'website',
                        locale: 'it_IT',
                        url: 'https://arredamentigiuttari.com/',
                        site_name: 'Arredamenti falegnameria Renato Giuttari',
                    }}
                />

                <Preloader>
                    <Component {...pageProps} />
                    <GoTop scrollStepInPx="50" delayInMs="16.66" />
                    <Placeholder>
                        <Loader />
                    </Placeholder>
                </Preloader>
            </>
        );
    }
}
