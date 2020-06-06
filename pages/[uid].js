import React from 'react'

import {Client} from '../utils/prismicHelpers'
import SliceZone from "../components/slices/SliceZone";
import Error from "./_error";
import Navbar from "../components/Layouts/Navbar";
import SimpleFooter from "../components/Layouts/SimpleFooter";

const Page = ({doc, menu}) => {
    if (doc) {
        return (
            <>
                <Navbar/>
                <section className="page-title-area parallax" data-parallax='{"speed": 0.2}'>
                    <div className="container">
                        <h2>{doc.uid.charAt(0).toUpperCase() + doc.uid.slice(1)}</h2>
                    </div>
                </section>
                <SliceZone sliceZone={doc.data.page_content}/>
                <SimpleFooter/>
            </>
        )
    }

    // Call the standard error page if the document was not found
    return <Error statusCode="404"/>
}

Page.getInitialProps = async ({req, query}) => {
    try {
        const uid = query.uid

        // Query both the specific page and navigation menu documents
        const doc = await Client(req).getByUID('page', uid)
        const menu = await Client(req).getSingle('menu')

        return {
            doc,
            menu
        }
    } catch (error) {
        console.error(error)
        return error
    }
}

export default Page
