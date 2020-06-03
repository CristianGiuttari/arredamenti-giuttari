import React from 'react'
import {RichText} from 'prismic-reactjs'

import {linkResolver} from '../../prismic-configuration'

const ImageGallery = ({slice}) => {
    console.log(slice)
    return (
        <section className="image-gallery content-section">
            <RichText
                render={slice.primary.gallery_title}
                linkResolver={linkResolver}
            />
            <div className="gallery" id="gallery">
                {slice.items.map((item, index) => (
                    <GalleryItem item={item} key={index} index={index}/>
                ))}
            </div>
            {slice.items.map((item, index) => (
                <ItemPreview item={item} key={index} index={index}/>
            ))}
        </section>
    )
}

const GalleryItem = ({item, index}) => (
    <div className="gallery-item">
        <img
            src={item.image.url}
            alt={item.image.alt}
        />
        <a href={`#lightbox-${index}`}>{RichText.asText(item.link_label)}</a>
        {/*<RichText*/}
        {/*    render={item.image_description}*/}
        {/*    linkResolver={linkResolver}*/}
        {/*/>*/}
        {/*<p className="gallery-link">*/}
        {/*    <DocLink link={item.link}>*/}
        {/*        {RichText.asText(item.link_label)}*/}
        {/*    </DocLink>*/}
        {/*</p>*/}
    </div>
)

const ItemPreview = ({item, index}) => (
    <div className="lightbox" id={`#lightbox-${index}`}>
        <div className="content"><img src={item.image.url}/>
            <div className="title">No. <b>529</b> from Picsum</div>
            <a className="close" href="#gallery"></a>
        </div>
    </div>
)

export default ImageGallery
