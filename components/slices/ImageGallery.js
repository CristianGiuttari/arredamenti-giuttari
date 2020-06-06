import React from 'react'
import {RichText} from 'prismic-reactjs'

import {linkResolver} from '../../prismic-configuration'

const ImageGallery = ({slice}) => {
    console.log('slice', slice)
    return (
        <section className="mt-3">
            <RichText
                render={slice.primary.gallery_title}
                linkResolver={linkResolver}
            />
            <div className="gallery" id={slice.primary.gallery_id}>
                {slice.items.map((item, index) => (
                    <GalleryItem item={item} key={index} index={index} galleryId={slice.primary.gallery_id}/>
                ))}
            </div>
            {slice.items.map((item, index) => (
                <ItemPreview item={item} key={index} index={index} galleryId={slice.primary.gallery_id}/>
            ))}
        </section>
    )
}

const GalleryItem = ({item, index, galleryId}) => {
    console.log('Gallery', item)
    return (
        <div className="gallery-item">
            <img
                src={item.image.url}
                alt={item.image.alt}
            />
            <a href={`#lightbox-${galleryId}-${index}`}>{RichText.asText(item.link_label)}</a>
        </div>
    )
}

const ItemPreview = ({item, index, galleryId}) => (
    <div className="lightbox" id={`lightbox-${galleryId}-${index}`}>
        <div className="content"><img src={item.link.url}/>
            <div className="title">{RichText.asText(item.image_description)}</div>
            <a className="close" href={`#${galleryId}`}></a>
        </div>
    </div>
)

export default ImageGallery
